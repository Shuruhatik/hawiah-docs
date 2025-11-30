'use client';

import { useState, useEffect, useRef } from 'react';
import { Check, Copy } from 'lucide-react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import '@/app/highlight.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'typescript' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      // Remove existing highlighting classes
      codeRef.current.removeAttribute('data-highlighted');
      codeRef.current.className = `language-${language} text-[11px] sm:text-sm font-mono leading-relaxed`;
      // Apply highlighting
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-lg bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100 z-10"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-teal-600 dark:text-teal-400" />
        ) : (
          <Copy className="w-4 h-4 text-slate-600 dark:text-gray-400" />
        )}
      </button>
      <pre className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#0a0f0d] dark:to-[#0d1512] rounded-lg p-2.5 sm:p-4 overflow-x-auto border border-slate-200 dark:border-white/10">
        <code
          ref={codeRef}
          className={`language-${language} text-[11px] sm:text-sm font-mono leading-relaxed`}
        >
          {code}
        </code>
      </pre>
    </div>
  );
}
