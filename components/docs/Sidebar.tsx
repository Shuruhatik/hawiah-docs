import { ChevronDown, ChevronRight, Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { DOCS_VERSIONS } from '@/config/versions';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  activeVersion: string;
  setActiveVersion: (version: string) => void;
  navGroups: NavGroup[];
}

export interface NavItem {
  id: string;
  label: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export default function Sidebar({
  activeSection,
  setActiveSection,
  activeVersion,
  setActiveVersion,
  navGroups
}: SidebarProps) {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(navGroups.map((g) => g.title))
  );
  const [versionDropdownOpen, setVersionDropdownOpen] = useState(false);
  const activeItemRef = useRef<HTMLButtonElement>(null);

  // Update expanded groups when navGroups change (version change)
  useEffect(() => {
    setExpandedGroups(new Set(navGroups.map((g) => g.title)));
  }, [navGroups]);

  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeSection]);

  const toggleGroup = (title: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedGroups(newExpanded);
  };

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-72 border-r border-slate-200 dark:border-white/10 overflow-y-auto bg-slate-50 dark:bg-[#020202]">
      <div className="p-6">
        <div className="mb-6">
          <div className="text-xs font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-2">
            Documentation
          </div>

          {/* Version Selector */}
          <div className="relative z-20">
            <button
              onClick={() => setVersionDropdownOpen(!versionDropdownOpen)}
              className="group flex items-center justify-between w-full px-3 py-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-sm font-medium text-slate-900 dark:text-white hover:border-teal-500/50 dark:hover:border-teal-500/50 hover:ring-2 hover:ring-teal-500/10 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <span className="text-slate-500 dark:text-gray-500 font-normal">Version:</span>
                <span>{activeVersion}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 dark:text-gray-500 group-hover:text-teal-500 transition-transform duration-200 ${versionDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {versionDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setVersionDropdownOpen(false)}
                />
                <div className="absolute top-full left-0 w-full mt-2 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-xl shadow-2xl shadow-teal-900/5 overflow-hidden z-20 ring-1 ring-black/5 motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 duration-150 origin-top">
                  <div className="p-1.5 space-y-0.5">
                    {DOCS_VERSIONS.map((version) => (
                      <button
                        key={version}
                        onClick={() => {
                          setActiveVersion(version);
                          setVersionDropdownOpen(false);
                        }}
                        className={`
                          flex items-center justify-between w-full px-3 py-2 text-sm text-left rounded-lg transition-all duration-150
                          ${version === activeVersion
                            ? 'bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-300'
                            : 'text-slate-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                          }
                        `}
                      >
                        <span className="font-medium">{version}</span>
                        {version === activeVersion && (
                          <Check className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <nav className="space-y-6">
          {navGroups.map((group) => (
            <div key={group.title}>
              <button
                onClick={() => toggleGroup(group.title)}
                className="flex items-center justify-between w-full text-sm font-semibold text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-2"
              >
                <span>{group.title}</span>
                {expandedGroups.has(group.title) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {expandedGroups.has(group.title) && (
                <ul className="space-y-1 ml-2">
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <button
                        ref={activeSection === item.id ? activeItemRef : null}
                        onClick={() => setActiveSection(item.id)}
                        className={`block w-full text-left text-sm py-1.5 px-3 rounded transition-colors ${activeSection === item.id
                          ? 'text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-500/10 border-l-2 border-teal-600 dark:border-teal-400'
                          : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                          }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
