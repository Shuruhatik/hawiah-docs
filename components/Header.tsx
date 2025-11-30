'use client';

import { Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-black/50 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image 
            src="/icon.png" 
            alt="Hawiah Logo" 
            width={28} 
            height={28}
            className="rounded-lg sm:w-8 sm:h-8 logo-light-mode"
          />
          <span className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">Hawiah</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            href="/docs"
            className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            Docs
          </Link>

          <Link
            href="https://github.com/Shuruhatik/hawiah"
            target="_blank"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600 dark:text-gray-400 transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="hidden xs:inline">GitHub</span>
          </Link>

          <span className="hidden sm:inline-block rounded-full border border-teal-600/30 dark:border-teal-500/20 bg-teal-50 dark:bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-700 dark:text-teal-400">
            v1.0.0
          </span>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
