'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import navGroupsData from '@/data/sidebar-navigation.json';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  searchQuery?: string;
}

interface NavItem {
  id: string;
  label: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = navGroupsData as NavGroup[];

// Highlight text matching search query
function highlightText(text: string, query: string): string {
  if (!query.trim()) return text;
  
  const searchTerms = query.toLowerCase().trim().split(/\s+/);
  let result = text;
  
  searchTerms.forEach(term => {
    if (term.length < 2) return;
    const regex = new RegExp(`(${term})`, 'gi');
    result = result.replace(regex, '<mark>$1</mark>');
  });
  
  return result;
}

export default function Sidebar({ activeSection, setActiveSection, searchQuery = '' }: SidebarProps) {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(navGroups.map((g) => g.title))
  );

  // Filter groups and items based on search query
  const filteredGroups = navGroups.map(group => {
    const filteredItems = group.items.filter(item => 
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...group, items: filteredItems };
  }).filter(group => group.items.length > 0);

  const toggleGroup = (title: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedGroups(newExpanded);
  };

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 border-r border-white/10 overflow-y-auto bg-[#020202]">
      <div className="p-6">
        <div className="mb-6">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Documentation
          </div>
          <div className="text-sm text-gray-400">
            v1.0.0
          </div>
        </div>
        <nav className="space-y-6">
          {filteredGroups.map((group) => (
            <div key={group.title}>
              <button
                onClick={() => toggleGroup(group.title)}
                className="flex items-center justify-between w-full text-sm font-semibold text-gray-400 hover:text-white transition-colors mb-2"
              >
                <span>{group.title}</span>
                {expandedGroups.has(group.title) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {expandedGroups.has(group.title) && (
                <ul className="space-y-1 ml-2">
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveSection(item.id)}
                        className={`block w-full text-left text-sm py-1.5 px-3 rounded transition-colors ${activeSection === item.id
                            ? 'text-teal-400 bg-teal-500/10 border-l-2 border-teal-400'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
