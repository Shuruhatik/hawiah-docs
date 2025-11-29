'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface NavItem {
  id: string;
  label: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navGroups: NavGroup[] = [
  {
    title: 'Getting Started',
    items: [
      { id: 'installation', label: 'Installation' },
      { id: 'quick-start', label: 'Quick Start' },
    ],
  },
  {
    title: 'Connection',
    items: [
      { id: 'connect', label: 'connect()' },
      { id: 'disconnect', label: 'disconnect()' },
      { id: 'isActive', label: 'isActive()' },
    ],
  },
  {
    title: 'CRUD: Writing Data',
    items: [
      { id: 'insert', label: 'insert()' },
      { id: 'insertMany', label: 'insertMany()' },
      { id: 'save', label: 'save()' },
    ],
  },
  {
    title: 'CRUD: Reading Data',
    items: [
      { id: 'get', label: 'get()' },
      { id: 'getOne', label: 'getOne()' },
      { id: 'getAll', label: 'getAll()' },
      { id: 'getById', label: 'getById()' },
      { id: 'getBy', label: 'getBy()' },
      { id: 'first', label: 'first()' },
      { id: 'last', label: 'last()' },
      { id: 'random', label: 'random()' },
      { id: 'paginate', label: 'paginate()' },
    ],
  },
  {
    title: 'CRUD: Updating Data',
    items: [
      { id: 'update', label: 'update()' },
      { id: 'updateOne', label: 'updateOne()' },
      { id: 'updateById', label: 'updateById()' },
    ],
  },
  {
    title: 'CRUD: Deleting Data',
    items: [
      { id: 'remove', label: 'remove()' },
      { id: 'removeOne', label: 'removeOne()' },
      { id: 'removeById', label: 'removeById()' },
      { id: 'clear', label: 'clear()' },
    ],
  },
  {
    title: 'Array Operations',
    items: [
      { id: 'push', label: 'push()' },
      { id: 'pull', label: 'pull()' },
      { id: 'shift', label: 'shift()' },
      { id: 'unshift', label: 'unshift()' },
      { id: 'pop', label: 'pop()' },
    ],
  },
  {
    title: 'Math Operations',
    items: [
      { id: 'increment', label: 'increment()' },
      { id: 'decrement', label: 'decrement()' },
      { id: 'sum', label: 'sum()' },
    ],
  },
  {
    title: 'Field Operations',
    items: [
      { id: 'rename', label: 'rename()' },
      { id: 'unset', label: 'unset()' },
    ],
  },
  {
    title: 'Utility Methods',
    items: [
      { id: 'count', label: 'count()' },
      { id: 'has', label: 'has()' },
      { id: 'sort', label: 'sort()' },
      { id: 'select', label: 'select()' },
      { id: 'unique', label: 'unique()' },
      { id: 'group', label: 'group()' },
    ],
  },
];

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(navGroups.map((g) => g.title))
  );

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
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 border-r border-white/10 overflow-y-auto bg-[#0c0c0c]">
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
          {navGroups.map((group) => (
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
                      className={`block w-full text-left text-sm py-1.5 px-3 rounded transition-colors ${
                        activeSection === item.id
                          ? 'text-[#C5F74F] bg-[#C5F74F]/10 border-l-2 border-[#C5F74F]'
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
