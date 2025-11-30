'use client';

import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 dark:text-gray-500" />
      <input
        type="text"
        placeholder="Search documentation..."
        className="w-full bg-white dark:bg-[#111111] border border-slate-300 dark:border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-500 focus:outline-none focus:border-teal-600 dark:focus:border-teal-500/50 focus:ring-1 focus:ring-teal-600 dark:focus:ring-teal-500/50 transition-colors"
      />
    </div>
  );
}
