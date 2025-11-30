'use client';

import { Moon, Sun, Monitor, Check } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-white/5" />
    );
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg bg-slate-200 dark:bg-white/5 p-2 text-slate-700 dark:text-gray-400 transition-all hover:bg-slate-300 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
        aria-label="Toggle theme"
      >
        {currentTheme === 'dark' ? (
          <Moon size={18} />
        ) : (
          <Sun size={18} />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111111] shadow-lg overflow-hidden z-50">
          {themeOptions.map((option) => {
            const Icon = option.icon;
            const isActive = theme === option.value;
            
            return (
              <button
                key={option.value}
                onClick={() => {
                  setTheme(option.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400'
                    : 'text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon size={16} />
                  <span>{option.label}</span>
                </div>
                {isActive && <Check size={16} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
