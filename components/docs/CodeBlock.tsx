'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'typescript' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightCode = (code: string) => {
    const strings: string[] = [];
    const comments: string[] = [];

    let highlighted = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    highlighted = highlighted.replace(/(['"`])((?:\\.|(?!\1)[^\\])*?)\1/g, (match) => {
      const index = strings.length;
      strings.push(`<span class="text-emerald-600 dark:text-[#6ee7b7] font-medium">${match}</span>`);
      return `__STRING_${index}__`;
    });

    highlighted = highlighted.replace(/\/\/(.*?)$/gm, (match) => {
      const index = comments.length;
      comments.push(`<span class="text-slate-500 dark:text-[#6b7280] italic">${match}</span>`);
      return `__COMMENT_${index}__`;
    });

    highlighted = highlighted.replace(/\b(const|let|var|function|async|await|return|if|else|for|while|class|import|export|from|default|new|interface|type|Promise)\b/g, '<span class="text-teal-700 dark:text-[#5eead4] font-semibold">$1</span>');

    highlighted = highlighted.replace(/\b(true|false|null|undefined)\b/g, '<span class="text-emerald-700 dark:text-[#34d399] font-medium">$1</span>');

    highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="text-emerald-700 dark:text-[#34d399]">$1</span>');

    highlighted = highlighted.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g, '<span class="text-teal-600 dark:text-[#2dd4bf] font-medium">$1</span>(');
    
    highlighted = highlighted.replace(/\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '.<span class="text-teal-600 dark:text-[#2dd4bf]">$1</span>');

    highlighted = highlighted.replace(/\bnew\s+<span class="text-teal-700 dark:text-\[#5eead4\] font-semibold">new<\/span>\s+([A-Z][a-zA-Z0-9_$]*)/g, 'new <span class="text-teal-700 dark:text-[#5eead4] font-semibold">new</span> <span class="text-emerald-600 dark:text-[#10b981] font-semibold">$1</span>');
    highlighted = highlighted.replace(/\b([A-Z][a-zA-Z0-9_$]*)\s*\(/g, '<span class="text-emerald-600 dark:text-[#10b981] font-semibold">$1</span>(');

    strings.forEach((str, index) => {
      highlighted = highlighted.replace(`__STRING_${index}__`, str);
    });

    comments.forEach((comment, index) => {
      highlighted = highlighted.replace(`__COMMENT_${index}__`, comment);
    });

    return highlighted;
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
      <pre className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#0a0f0d] dark:to-[#0d1512] rounded-lg p-2.5 sm:p-4 overflow-x-auto border border-teal-200 dark:border-teal-900/30 shadow-xl shadow-teal-100/50 dark:shadow-teal-950/20">
        <code
          className="text-[11px] sm:text-sm font-mono text-slate-800 dark:text-gray-200 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
        />
      </pre>
    </div>
  );
}
