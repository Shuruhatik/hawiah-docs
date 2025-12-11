'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TableOfContentsProps {
  activeSection: string;
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ activeSection }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Small delay to ensure content is rendered
    const timer = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll('main h2, main h3'));
      const headingData = elements
        .map((elem) => ({
          id: elem.id,
          text: elem.textContent || '',
          level: Number(elem.tagName.charAt(1)),
        }))
        .filter((heading) => heading.text !== 'Related Methods');
      setHeadings(headingData);
    }, 100);

    return () => clearTimeout(timer);
  }, [activeSection]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Adjust scroll position for fixed header
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
      setOpen(false);
    }
  };

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle Button - Top Right Pill */}
      <button
        onClick={() => setOpen(!open)}
        className="xl:hidden absolute top-20 right-4 z-30 flex items-center gap-2 px-3 py-1.5 mt-2 bg-white/80 dark:bg-[#020202]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-full shadow-sm text-xs font-medium text-slate-600 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
        <span>On This Page</span>
      </button>

      {/* Mobile Drawer Overlay */}
      {open && (
        <div
          className="xl:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-[1px] transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer (Bottom Sheet) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) {
                setOpen(false);
              }
            }}
            className="xl:hidden fixed inset-x-0 bottom-0 z-50 w-full max-h-[80vh] bg-white dark:bg-[#111111] rounded-t-[20px] border-t border-slate-200 dark:border-white/10 shadow-2xl flex flex-col"
          >
            {/* Drawer Handle */}
            <div className="w-full flex justify-center pt-4 pb-2 cursor-grab active:cursor-grabbing touch-none">
              <div className="w-12 h-1.5 rounded-full bg-slate-200 dark:bg-white/10" />
            </div>

            <div className="p-6 pt-2 overflow-y-auto max-h-[calc(80vh-3rem)]">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                On This Page
              </h3>
              <ul className="space-y-3">
                {headings.map((heading) => (
                  <li
                    key={heading.id}
                    className={`${heading.level === 3 ? 'pl-4' : ''}`}
                  >
                    <a
                      href={`#${heading.id}`}
                      onClick={(e) => handleClick(e, heading.id)}
                      className={`
                        text-sm block leading-snug
                        ${activeId === heading.id
                          ? 'text-teal-600 dark:text-teal-400 font-medium'
                          : 'text-slate-600 dark:text-gray-400'
                        }
                      `}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className={`
        hidden xl:block
        sticky top-24 right-0 
        h-[calc(100vh-6rem)] 
        w-56 
        overflow-y-auto 
        pl-8 
        border-l border-slate-200 dark:border-white/10 
      `}>
        <nav>
          <h3 className="text-xs font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-4">
            On This Page
          </h3>
          <ul className="space-y-2.5">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={`transition-all duration-200 ${heading.level === 3 ? 'pl-4' : ''}`}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.id)}
                  className={`
                      text-sm block leading-snug transition-colors duration-200
                      ${activeId === heading.id
                      ? 'text-teal-600 dark:text-teal-400 font-medium'
                      : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                    }
                    `}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
