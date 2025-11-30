'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
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

// Flatten all items into a single array
const allItems: NavItem[] = navGroups.flatMap(group => group.items);

interface DocNavigationProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function DocNavigation({ currentSection, onNavigate }: DocNavigationProps) {
  const currentIndex = allItems.findIndex(item => item.id === currentSection);
  
  if (currentIndex === -1) return null;
  
  const previousItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const nextItem = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

  return (
    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
      <div className="flex items-center justify-between gap-4">
        {/* Previous Button */}
        {previousItem ? (
          <button
            onClick={() => onNavigate(previousItem.id)}
            className="group flex items-center gap-2 px-4 py-3 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-all flex-1 text-left"
          >
            <ChevronLeft className="w-5 h-5 text-slate-400 dark:text-gray-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-slate-500 dark:text-gray-500 mb-1">Previous</div>
              <div className="text-sm font-medium text-slate-900 dark:text-white truncate">
                {previousItem.label}
              </div>
            </div>
          </button>
        ) : (
          <div className="flex-1" />
        )}

        {/* Next Button */}
        {nextItem ? (
          <button
            onClick={() => onNavigate(nextItem.id)}
            className="group flex items-center gap-2 px-4 py-3 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-all flex-1 text-right"
          >
            <div className="flex-1 min-w-0">
              <div className="text-xs text-slate-500 dark:text-gray-500 mb-1">Next</div>
              <div className="text-sm font-medium text-slate-900 dark:text-white truncate">
                {nextItem.label}
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 dark:text-gray-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />
          </button>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}
