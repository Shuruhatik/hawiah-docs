'use client';

import { Github, Heart, Code } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">Hawiah</h3>
            <p className="text-sm text-slate-600 dark:text-gray-400">
              A lightweight, schema-less database abstraction layer for modern applications.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-gray-400">
              <li>
                <Link href="/docs" className="transition-colors hover:text-slate-900 dark:hover:text-white">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">Community</h4>
            <div className="flex gap-4">
              <Link
                href="https://github.com/Shuruhatik/hawiah"
                target="_blank"
                className="text-slate-600 dark:text-gray-400 transition-colors hover:text-slate-900 dark:hover:text-white"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 dark:border-white/10 pt-8">
          <div className="flex flex-col items-center gap-4">
            {/* Made with love */}
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by the Hawiah team</span>
            </div>

            {/* Developer credits */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-gray-400">
              <span>
                <a
                  href="https://shuruhatik.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-300 font-semibold"
                >
                  Mohamed Abdelkarim
                </a>
                {' '}and{' '}
                <a
                  href="https://tahawy.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-300 font-semibold"
                >
                  Amer Mohamed
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
