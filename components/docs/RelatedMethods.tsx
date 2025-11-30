'use client';

import { ArrowRight } from 'lucide-react';
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

interface RelatedMethodsProps {
  methods: string[];
}

// Find label for a method ID from navigation
function findMethodLabel(id: string): string {
  for (const group of navGroups) {
    const item = group.items.find(item => item.id === id);
    if (item) return item.label;
  }
  return id; // Fallback to ID if not found
}

export default function RelatedMethods({ methods }: RelatedMethodsProps) {
  if (methods.length === 0) return null;

  return (
    <div className="mt-12 p-6 bg-slate-100 dark:bg-[#111111] border border-slate-200 dark:border-white/10 rounded-lg">
      <h3 className="text-sm font-semibold text-slate-600 dark:text-gray-400 uppercase tracking-wider mb-4">
        Related Methods
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {methods.map((methodId) => (
          <a
            key={methodId}
            href={`#${methodId}`}
            onClick={(e) => {
              e.preventDefault();
              // Trigger section change via custom event
              window.dispatchEvent(new CustomEvent('navigate-to-section', { detail: methodId }));
            }}
            className="flex items-center justify-between p-3 bg-white dark:bg-[#0c0c0c] hover:bg-slate-50 dark:hover:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-teal-600 dark:hover:border-teal-500/30 rounded-lg transition-all group text-left"
          >
            <span className="text-sm text-slate-700 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white font-mono">
              {findMethodLabel(methodId)}
            </span>
            <ArrowRight className="w-4 h-4 text-slate-500 dark:text-gray-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
}
