'use client';

import { useState, useEffect } from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import RelatedMethods from './RelatedMethods';
import DocNavigation from './DocNavigation';
import { NavGroup } from './Sidebar';

interface DocContentProps {
  activeSection: string;
  onNavigate?: (sectionId: string) => void;
  activeVersion: string;
  navGroups: NavGroup[];
}

interface DocData {
  content: string;
  metadata: {
    title: string;
    description?: string;
    category?: string;
    relatedMethods?: string[];
  };
}

export default function DocContent({ activeSection, onNavigate, activeVersion, navGroups }: DocContentProps) {
  const [docData, setDocData] = useState<DocData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDoc() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/docs/${activeVersion}/${activeSection}`);

        if (!response.ok) {
          throw new Error('Document not found');
        }

        const data = await response.json();
        setDocData(data);
      } catch (err) {
        setError('Failed to load documentation');
        console.error('Error loading doc:', err);
      } finally {
        setLoading(false);
      }
    }

    loadDoc();
  }, [activeSection, activeVersion]);

  if (loading) {
    return (
      <div className="opacity-50">
        {/* Title skeleton */}
        <div className="h-10 bg-slate-200 dark:bg-white/10 rounded-lg w-2/3 mb-6"></div>

        {/* Description skeleton */}
        <div className="h-4 bg-slate-200 dark:bg-white/10 rounded w-full mb-3"></div>
        <div className="h-4 bg-slate-200 dark:bg-white/10 rounded w-5/6 mb-8"></div>

        {/* Section heading skeleton */}
        <div className="h-8 bg-slate-200 dark:bg-white/10 rounded-lg w-1/3 mb-4 mt-10"></div>

        {/* Code block skeleton */}
        <div className="bg-slate-100 dark:bg-[#0F0F0F] border border-slate-200 dark:border-white/10 rounded-lg p-4 mb-6">
          <div className="h-4 bg-slate-200 dark:bg-white/10 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-slate-200 dark:bg-white/10 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-slate-200 dark:bg-white/10 rounded w-4/5"></div>
        </div>

        {/* Section heading skeleton */}
        <div className="h-8 bg-slate-200 dark:bg-white/10 rounded-lg w-1/4 mb-4 mt-10"></div>

        {/* Paragraph skeleton */}
        <div className="h-4 bg-slate-200 dark:bg-white/10 rounded w-full mb-2"></div>
        <div className="h-4 bg-slate-200 dark:bg-white/10 rounded w-full mb-2"></div>
        <div className="h-4 bg-slate-200 dark:bg-white/10 rounded w-4/5 mb-6"></div>

        {/* Code block skeleton */}
        <div className="bg-slate-100 dark:bg-[#0F0F0F] border border-slate-200 dark:border-white/10 rounded-lg p-4 mb-6">
          <div className="h-4 bg-slate-200 dark:bg-white/10 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-slate-200 dark:bg-white/10 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-slate-200 dark:bg-white/10 rounded w-1/2"></div>
        </div>

        {/* Section heading skeleton */}
        <div className="h-8 bg-slate-200 dark:bg-white/10 rounded-lg w-1/3 mb-4 mt-10"></div>

        {/* Paragraph skeleton */}
        <div className="h-4 bg-slate-200 dark:bg-white/10 rounded w-full mb-2"></div>
        <div className="h-4 bg-slate-200 dark:bg-white/10 rounded w-5/6"></div>
      </div>
    );
  }

  if (error || !docData) {
    return (
      <div className="py-12">
        <div className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">
            Documentation Not Found
          </h2>
          <p className="text-slate-600 dark:text-gray-400">
            The documentation for <code className="text-teal-600 dark:text-teal-400">{activeSection}</code> is not available yet.
          </p>
          <p className="text-slate-500 dark:text-gray-500 text-sm mt-4">
            To add this documentation, create a file at <code>content/docs/{activeVersion}/{activeSection}.md</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <MarkdownRenderer content={docData.content} />

      {docData.metadata.relatedMethods && docData.metadata.relatedMethods.length > 0 && (
        <RelatedMethods methods={docData.metadata.relatedMethods} />
      )}

      {onNavigate && (
        <DocNavigation
          currentSection={activeSection}
          onNavigate={onNavigate}
          navGroups={navGroups}
        />
      )}
    </div>
  );
}
