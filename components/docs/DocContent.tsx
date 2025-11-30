'use client';

import { useState, useEffect } from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import RelatedMethods from './RelatedMethods';

interface DocContentProps {
  activeSection: string;
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

export default function DocContent({ activeSection }: DocContentProps) {
  const [docData, setDocData] = useState<DocData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDoc() {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`/api/docs/${activeSection}`);
        
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
  }, [activeSection]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  if (error || !docData) {
    return (
      <div className="py-12">
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-400 mb-2">
            Documentation Not Found
          </h2>
          <p className="text-gray-400">
            The documentation for <code className="text-teal-400">{activeSection}</code> is not available yet.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            To add this documentation, create a file at <code>content/docs/{activeSection}.md</code>
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
    </div>
  );
}
