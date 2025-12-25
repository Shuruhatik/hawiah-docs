'use client';

import { Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { DEFAULT_VERSION } from '@/config/versions';

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
            href="/docs#benchmarks"
            className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            Performance
          </Link>

          <Link
            href="https://dsc.gg/hawiah"
            target="_blank"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600 dark:text-gray-400 transition-colors hover:text-[#5865F2] dark:hover:text-[#5865F2]"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="sm:w-[18px] sm:h-[18px]"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" /></svg>
            <span className="hidden xs:inline">Discord</span>
          </Link>

          <Link
            href="https://github.com/Shuruhatik/hawiah"
            target="_blank"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600 dark:text-gray-400 transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="hidden xs:inline">GitHub</span>
          </Link>

          <Link
            href="https://npmjs.com/package/hawiah"
            target="_blank"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600 dark:text-gray-400 transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="sm:w-[18px] sm:h-[18px]"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.129z" /></svg>
            <span className="hidden xs:inline">NPM</span>
          </Link>

          <span className="hidden sm:inline-block rounded-full border border-teal-600/30 dark:border-teal-500/20 bg-teal-50 dark:bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-700 dark:text-teal-400">
            {DEFAULT_VERSION}
          </span>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
