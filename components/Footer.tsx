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
            <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">Hawiah (حاوية)</h3>
            <p className="text-sm text-slate-600 dark:text-gray-400">
              The fastest Universal ORM for JavaScript/TypeScript. A lightweight, schema-less database abstraction layer for professional modern applications.
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
              <Link
                href="https://npmjs.com/package/hawiah"
                target="_blank"
                className="text-slate-600 dark:text-gray-400 transition-colors hover:text-slate-900 dark:hover:text-white"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.129z" /></svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 dark:border-white/10 pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-slate-600 dark:text-gray-400">
                Developed by
              </span>
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
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-teal-500 fill-teal-500" />
              <span>by the Hawiah team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
