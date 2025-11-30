'use client';

import { Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/icon.png" 
            alt="Hawiah Logo" 
            width={32} 
            height={32}
            className="rounded-lg"
          />
          <span className="text-2xl font-bold text-white">Hawiah</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/docs"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Documentation
          </Link>

          <Link
            href="https://github.com/Shuruhatik/hawiah"
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <Github size={18} />
            GitHub
          </Link>

          <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-400">
            v1.0.0
          </span>
        </div>
      </nav>
    </header>
  );
}
