'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Sidebar from '@/components/docs/Sidebar';
import DocContent from '@/components/docs/DocContent';
import TableOfContents from '@/components/docs/TableOfContents';

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('installation');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020202] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#020202]/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link href="/" className="text-xl font-bold">Hawiah</Link>
            <nav className="hidden md:flex items-center gap-6 text-sm ml-4">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link href="/docs" className="text-teal-400">Docs</Link>
            </nav>
          </div>
          <a
            href="https://github.com/yourusername/hawiah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex pt-16">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Left Sidebar */}
        <div className={`
          fixed lg:sticky top-16 h-[calc(100vh-4rem)] z-40 lg:z-0
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        {/* Main Content */}
        <main className="flex-1 px-4 md:px-8 py-8 md:py-12 max-w-4xl min-w-0">
          <DocContent activeSection={activeSection} />
        </main>

        {/* Right Sidebar - Table of Contents */}
        <TableOfContents activeSection={activeSection} />
      </div>
    </div>
  );
}
