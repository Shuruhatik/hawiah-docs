import { NextRequest, NextResponse } from 'next/server';
import { buildSearchIndex, SearchItem } from '@/lib/searchData.server';

let searchIndex: SearchItem[] = [];

// Build index on first request
function getSearchIndex() {
  if (searchIndex.length === 0) {
    searchIndex = buildSearchIndex();
  }
  return searchIndex;
}

interface SearchResult extends SearchItem {
  score: number;
  matchedSnippet?: string;
  highlightedLabel?: string;
}

function highlightText(text: string, searchTerms: string[]): string {
  let result = text;
  
  searchTerms.forEach(term => {
    if (term.length < 2) return;
    
    const regex = new RegExp(`(${term})`, 'gi');
    result = result.replace(regex, '<mark class="bg-teal-500/30 text-teal-300">$1</mark>');
  });
  
  return result;
}

function extractSnippet(text: string, searchTerm: string): string {
  const lowerText = text.toLowerCase();
  const lowerTerm = searchTerm.toLowerCase();
  const index = lowerText.indexOf(lowerTerm);
  
  if (index === -1) return text.substring(0, 100);
  
  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + searchTerm.length + 60);
  
  let snippet = text.substring(start, end);
  
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';
  
  return snippet.trim();
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q') || '';
  
  if (!query.trim()) {
    return NextResponse.json([]);
  }
  
  const index = getSearchIndex();
  const searchTerms = query.toLowerCase().trim().split(/\s+/);
  
  const results: SearchResult[] = index
    .map(item => {
      let score = 0;
      let matchedSnippet = '';
      const lowerLabel = item.label.toLowerCase();
      const lowerDescription = item.description.toLowerCase();
      const lowerContent = item.content.toLowerCase();
      const lowerCategory = item.category.toLowerCase();
      
      searchTerms.forEach(term => {
        // Exact match in label (highest priority)
        if (lowerLabel === term) {
          score += 100;
          matchedSnippet = item.description;
        } else if (lowerLabel.includes(term)) {
          score += 50;
          matchedSnippet = item.description;
        }
        
        // Match in keywords
        if (item.keywords.some(k => k.includes(term))) {
          score += 30;
        }
        
        // Match in description
        if (lowerDescription.includes(term)) {
          score += 20;
          if (!matchedSnippet) {
            matchedSnippet = item.description;
          }
        }
        
        // Match in category
        if (lowerCategory.includes(term)) {
          score += 15;
        }
        
        // Match in full content
        if (lowerContent.includes(term)) {
          score += 10;
          if (!matchedSnippet) {
            matchedSnippet = extractSnippet(item.content, term);
          }
        }
      });
      
      const highlightedLabel = highlightText(item.label, searchTerms);
      const highlightedSnippet = highlightText(matchedSnippet || item.description, searchTerms);
      
      return { 
        ...item, 
        score,
        matchedSnippet: highlightedSnippet,
        highlightedLabel
      };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
  
  return NextResponse.json(results);
}
