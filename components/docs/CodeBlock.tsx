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

  // Enhanced syntax highlighting with proper escaping
  const highlightCode = (code: string) => {
    // Store strings and comments temporarily to avoid nested replacements
    const strings: string[] = [];
    const comments: string[] = [];

    // First escape HTML
    let highlighted = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Extract and store comments
    highlighted = highlighted.replace(/\/\/(.*?)$/gm, (match) => {
      const index = comments.length;
      comments.push(`<span class="text-[#6a9955]">${match}</span>`);
      return `__COMMENT_${index}__`;
    });

    // Extract and store strings
    highlighted = highlighted.replace(/(['"`])((?:\\.|(?!\1)[^\\])*?)\1/g, (match) => {
      const index = strings.length;
      strings.push(`<span class="text-[#ce9178]">${match}</span>`);
      return `__STRING_${index}__`;
    });

    // Apply syntax highlighting to remaining code
    // Keywords
    highlighted = highlighted.replace(/\b(const|let|var|function|async|await|return|if|else|for|while|class|import|export|from|default|new|interface|type|Promise)\b/g, '<span class="text-[#c586c0]">$1</span>');

    // Booleans and special values
    highlighted = highlighted.replace(/\b(true|false|null|undefined)\b/g, '<span class="text-[#569cd6]">$1</span>');

    // Numbers
    highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="text-[#b5cea8]">$1</span>');

    // Function calls
    highlighted = highlighted.replace(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g, '<span class="text-[#dcdcaa]">$1</span>(');

    // Restore strings
    strings.forEach((str, index) => {
      highlighted = highlighted.replace(`__STRING_${index}__`, str);
    });

    // Restore comments
    comments.forEach((comment, index) => {
      highlighted = highlighted.replace(`__COMMENT_${index}__`, comment);
    });

    return highlighted;
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100 z-10"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-teal-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-400" />
        )}
      </button>
      <pre className="bg-[#1e1e1e] rounded-lg p-4 overflow-x-auto border border-white/10">
        <code
          className="text-sm font-mono text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
        />
      </pre>
    </div>
  );
}
