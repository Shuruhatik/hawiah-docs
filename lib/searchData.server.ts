import { getAllDocs } from './markdown';
import navGroupsData from '@/data/sidebar-navigation.json';

interface NavItem {
  id: string;
  label: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = navGroupsData as NavGroup[];

export interface SearchItem {
  id: string;
  label: string;
  category: string;
  description: string;
  content: string;
  keywords: string[];
}

/**
 * Build search index from markdown files (server-side only)
 */
export function buildSearchIndex(): SearchItem[] {
  const docs = getAllDocs();
  const index: SearchItem[] = [];

  navGroups.forEach(group => {
    group.items.forEach(item => {
      const doc = docs.find(d => d.id === item.id);
      
      if (doc) {
        // Extract keywords from content
        const keywords = extractKeywords(doc.content, item.label);
        
        index.push({
          id: item.id,
          label: item.label,
          category: group.title,
          description: doc.metadata.description || '',
          content: doc.content.substring(0, 500), // First 500 chars for search
          keywords,
        });
      } else {
        // Add placeholder for missing docs
        index.push({
          id: item.id,
          label: item.label,
          category: group.title,
          description: '',
          content: '',
          keywords: [],
        });
      }
    });
  });

  return index;
}

/**
 * Extract keywords from content
 */
function extractKeywords(content: string, label: string): string[] {
  const keywords = new Set<string>();
  
  // Add label words
  label.toLowerCase().split(/\W+/).forEach(word => {
    if (word.length > 2) keywords.add(word);
  });
  
  // Extract common programming terms
  const codeMatches = content.match(/`([^`]+)`/g);
  if (codeMatches) {
    codeMatches.forEach(match => {
      const word = match.replace(/`/g, '').toLowerCase();
      if (word.length > 2) keywords.add(word);
    });
  }
  
  // Extract words from headers
  const headerMatches = content.match(/^#+\s+(.+)$/gm);
  if (headerMatches) {
    headerMatches.forEach(match => {
      const words = match.replace(/^#+\s+/, '').toLowerCase().split(/\W+/);
      words.forEach(word => {
        if (word.length > 2) keywords.add(word);
      });
    });
  }
  
  return Array.from(keywords);
}
