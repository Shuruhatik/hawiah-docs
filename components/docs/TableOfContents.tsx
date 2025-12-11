'use client';

import { useEffect, useState } from 'react';

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
    }
  };

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block sticky top-24 h-[calc(100vh-6rem)] w-64 overflow-y-auto pl-8 border-l border-slate-200 dark:border-white/10">
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
  );
}
