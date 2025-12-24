'use client';

import { useState, useRef, useEffect } from 'react';
import { Menu, X, Search, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar, { NavGroup } from '@/components/docs/Sidebar';
import DocContent from '@/components/docs/DocContent';
import TableOfContents from '@/components/docs/TableOfContents';
import ThemeToggle from '@/components/ThemeToggle';
import { DEFAULT_VERSION } from '@/config/versions';
import { sidebarMap } from '@/data/sidebar-map';

interface SearchResult {
  id: string;
  label: string;
  category: string;
  description: string;
  matchedSnippet?: string;
  highlightedLabel?: string;
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeVersion, setActiveVersion] = useState(DEFAULT_VERSION);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const navGroups: NavGroup[] = sidebarMap[activeVersion] || [];

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    setActiveSection(hash || 'installation');
  }, []);

  useEffect(() => {
    if (activeSection && typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${activeSection}`);
    }
  }, [activeSection]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchQuery.trim()) {
        try {
          const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
          const results = await response.json();
          setSearchResults(results);
        } catch (error) {
          console.error('Search error:', error);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  useEffect(() => {
    const handleNavigate = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setActiveSection(customEvent.detail);
      setSidebarOpen(false);
    };

    window.addEventListener('navigate-to-section', handleNavigate);
    return () => window.removeEventListener('navigate-to-section', handleNavigate);
  }, []);

  const handleSearchSelect = (sectionId: string) => {
    setActiveSection(sectionId);
    setSearchQuery('');
    setShowSearchResults(false);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020202] text-slate-900 dark:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#020202]/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4 gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
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
                className="rounded-lg logo-light-mode"
              />
              <span className="text-xl font-bold">Hawiah</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm ml-4">
              <Link href="/" className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors">Home</Link>
              <Link href="/docs" className="text-teal-600 dark:text-teal-400">Docs</Link>
            </nav>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden sm:flex flex-1 max-w-md mx-4" ref={searchRef}>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search documentation... (Ctrl+K)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(true);
                }}
                onFocus={() => searchQuery && setShowSearchResults(true)}
                className="w-full bg-slate-100 dark:bg-[#111111] border border-slate-300 dark:border-white/10 rounded-lg pl-10 pr-20 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-500 focus:outline-none focus:border-teal-600 dark:focus:border-teal-500/50 focus:ring-1 focus:ring-teal-600 dark:focus:ring-teal-500/50 transition-colors"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-slate-500 dark:text-gray-500 bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded">
                ⌘K
              </kbd>

              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white dark:bg-[#111111] border border-slate-200 dark:border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">
                  <div className="max-h-[400px] overflow-y-auto">
                    {searchResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => handleSearchSelect(result.id)}
                        className="w-full text-left px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border-b border-slate-200 dark:border-white/5 last:border-b-0"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className="text-sm font-medium text-slate-900 dark:text-white"
                                dangerouslySetInnerHTML={{ __html: result.highlightedLabel || result.label }}
                              />
                              <span className="text-xs text-slate-500 dark:text-gray-500 px-2 py-0.5 bg-slate-100 dark:bg-white/5 rounded">
                                {result.category}
                              </span>
                            </div>
                            <p
                              className="text-xs text-slate-600 dark:text-gray-400 line-clamp-2"
                              dangerouslySetInnerHTML={{ __html: result.matchedSnippet || result.description }}
                            />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  {searchQuery && searchResults.length === 0 && (
                    <div className="px-4 py-3 text-sm text-slate-500 dark:text-gray-500 text-center">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Mobile Search Button */}
            <button
              onClick={() => setShowMobileSearch(true)}
              className="sm:hidden text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* GitHub Link - Icon + text on desktop, icon only on mobile */}
            <a
              href="https://github.com/Shuruhatik/hawiah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              href="https://npmjs.com/package/hawiah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="NPM"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.129z" /></svg>
              <span className="hidden sm:inline">NPM</span>
            </a>

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Search Modal */}
      {showMobileSearch && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm sm:hidden">
          <div className="p-4">
            <div className="bg-white dark:bg-[#111111] rounded-lg border border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-white/10">
                <Search className="w-5 h-5 text-slate-500 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="flex-1 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-gray-500 focus:outline-none"
                />
                <button
                  onClick={() => {
                    setShowMobileSearch(false);
                    setSearchQuery('');
                  }}
                  className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
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
                      className="w-full text-left px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border-b border-slate-200 dark:border-white/5 last:border-b-0"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-sm font-medium text-slate-900 dark:text-white"
                          dangerouslySetInnerHTML={{ __html: result.highlightedLabel || result.label }}
                        />
                        <span className="text-xs text-slate-500 dark:text-gray-500 px-2 py-0.5 bg-slate-100 dark:bg-white/5 rounded">
                          {result.category}
                        </span>
                      </div>
                      <p
                        className="text-xs text-slate-600 dark:text-gray-400 line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: result.matchedSnippet || result.description }}
                      />
                    </button>
                  ))
                ) : searchQuery ? (
                  <div className="px-4 py-8 text-center text-slate-500 dark:text-gray-500">
                    No results found
                  </div>
                ) : (
                  <div className="px-4 py-8 text-center text-slate-500 dark:text-gray-500">
                    Start typing to search...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Layout */}
      <div className="flex pt-16 relative">
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
          {activeSection && (
            <Sidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              activeVersion={activeVersion}
              setActiveVersion={setActiveVersion}
              navGroups={navGroups}
            />
          )}
        </div>

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 md:px-8 pt-16 pb-6 md:py-12 max-w-5xl min-w-0">
          {activeSection && (
            <DocContent
              activeSection={activeSection}
              activeVersion={activeVersion}
              navGroups={navGroups}
              onNavigate={(sectionId) => {
                setActiveSection(sectionId);
                setSidebarOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}
        </main>

        {/* Right Sidebar - Table of Contents */}
        {activeSection && <TableOfContents activeSection={activeSection} />}
      </div>
    </div>
  );
}
