'use client';

import { Github, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Hawiah</h3>
            <p className="text-sm text-gray-400">
              A lightweight, schema-less database abstraction layer for modern applications.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/docs" className="transition-colors hover:text-white">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Community</h4>
            <div className="flex gap-4">
              <Link
                href="https://github.com/Shuruhatik/hawiah"
                target="_blank"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 border-t border-white/10 pt-8 text-sm text-gray-400">
          <span>Made with</span>
          <Heart size={16} className="text-red-500" />
          <span>by the Hawiah team</span>
        </div>
      </div>
    </footer>
  );
}
