'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/components/docs/Sidebar';
import DocContent from '@/components/docs/DocContent';
import TableOfContents from '@/components/docs/TableOfContents';
import { searchDocumentation } from '@/lib/searchData';

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('installation');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Advanced search with full content indexing
  const searchResults = searchDocumentation(searchQuery);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        const searchInput = searchRef.current?.querySelector('input');
        searchInput?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchSelect = (sectionId: string) => {
    setActiveSection(sectionId);
    setSearchQuery('');
    setShowSearchResults(false);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#020202]/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4 gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/icon.png" 
                alt="Hawiah Logo" 
                width={28} 
                height={28}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">Hawiah</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm ml-4">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link href="/docs" className="text-teal-400">Docs</Link>
            </nav>
          </div>
          
          {/* Mobile Search Button */}
          <button
            onClick={() => setShowMobileSearch(true)}
            className="sm:hidden text-gray-400 hover:text-white"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          
          {/* Search Bar */}
          <div className="hidden sm:flex flex-1 max-w-md mx-4" ref={searchRef}>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search documentation... (Ctrl+K)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(true);
                }}
                onFocus={() => searchQuery && setShowSearchResults(true)}
                className="w-full bg-[#111111] border border-white/10 rounded-lg pl-10 pr-20 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-colors"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-gray-500 bg-white/5 border border-white/10 rounded">
                ⌘K
              </kbd>
              
              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-[#111111] border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">
                  <div className="max-h-[400px] overflow-y-auto">
                    {searchResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => handleSearchSelect(result.id)}
                        className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span 
                                className="text-sm font-medium text-white"
                                dangerouslySetInnerHTML={{ __html: result.highlightedLabel || result.label }}
                              />
                              <span className="text-xs text-gray-500 px-2 py-0.5 bg-white/5 rounded">
                                {result.category}
                              </span>
                            </div>
                            <p 
                              className="text-xs text-gray-400 line-clamp-2"
                              dangerouslySetInnerHTML={{ __html: result.matchedSnippet || result.description }}
                            />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  {searchQuery && searchResults.length === 0 && (
                    <div className="px-4 py-3 text-sm text-gray-500 text-center">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <a
            href="https://github.com/yourusername/hawiah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors whitespace-nowrap"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Mobile Search Modal */}
      {showMobileSearch && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm sm:hidden">
          <div className="p-4">
            <div className="bg-[#111111] rounded-lg border border-white/10">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="flex-1 bg-transparent text-white placeholder:text-gray-500 focus:outline-none"
                />
                <button
                  onClick={() => {
                    setShowMobileSearch(false);
                    setSearchQuery('');
                  }}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="max-h-[60vh] overflow-y-auto">
                {searchResults.length > 0 ? (
                  searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => {
                        handleSearchSelect(result.id);
                        setShowMobileSearch(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span 
                          className="text-sm font-medium text-white"
                          dangerouslySetInnerHTML={{ __html: result.highlightedLabel || result.label }}
                        />
                        <span className="text-xs text-gray-500 px-2 py-0.5 bg-white/5 rounded">
                          {result.category}
                        </span>
                      </div>
                      <p 
                        className="text-xs text-gray-400 line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: result.matchedSnippet || result.description }}
                      />
                    </button>
                  ))
                ) : searchQuery ? (
                  <div className="px-4 py-8 text-center text-gray-500">
                    No results found
                  </div>
                ) : (
                  <div className="px-4 py-8 text-center text-gray-500">
                    Start typing to search...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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
          <Sidebar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection}
            searchQuery={searchQuery}
          />
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
