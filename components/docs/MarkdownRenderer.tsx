'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import { Copy, Check, FileCode, Terminal } from 'lucide-react';
import InstallTabs from './InstallTabs';

interface MarkdownRendererProps {
  content: string;
}

function extractText(children: any): string {
  if (typeof children === 'string') {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map(extractText).join('');
  }

  if (children?.props?.children) {
    return extractText(children.props.children);
  }

  return '';
}

function createId(children: any): string {
  const text = extractText(children);
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

function CodeBlock({ children, className, language }: { children: any; className?: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const codeText = extractText(children);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0F0F0F] overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
          </div>
          <span className="ml-2 text-xs font-medium text-slate-500 dark:text-gray-400 uppercase tracking-wider">
            {language || 'Code'}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
          aria-label="Copy code"
          title={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono">
        <code className={className}>
          {children}
        </code>
      </pre>
    </div>
  );
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          h1: ({ children }) => (
            <h1 id={createId(children)} className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-teal-600 dark:text-teal-400 scroll-mt-20">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 id={createId(children)} className="text-xl sm:text-2xl font-bold mt-8 sm:mt-10 mb-3 sm:mb-4 text-teal-600 dark:text-teal-400 scroll-mt-20">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 id={createId(children)} className="text-lg sm:text-xl font-semibold mt-6 sm:mt-8 mb-2 sm:mb-3 text-slate-900 dark:text-white scroll-mt-20">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 id={createId(children)} className="text-base sm:text-lg font-semibold mt-4 sm:mt-6 mb-2 text-slate-900 dark:text-white scroll-mt-20">{children}</h4>
          ),
          p: ({ children }) => (
            <p className="text-slate-600 dark:text-gray-400 text-base mb-4 leading-relaxed">{children}</p>
          ),
          // Custom Mark style for primary colored text
          mark: ({ children }) => (
            <span className="text-teal-600 dark:text-teal-400 font-medium bg-teal-50 dark:bg-teal-500/10 px-1 rounded mx-0.5">
              {children}
            </span>
          ),
          code: ({ className, children, inline, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '');

            if (inline) {
              return (
                <code className="bg-teal-50 dark:bg-white/10 text-teal-700 dark:text-teal-400 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                  {children}
                </code>
              );
            }

            if (match) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }

            return (
              <code className="bg-teal-50 dark:bg-white/10 text-teal-700 dark:text-teal-400 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                {children}
              </code>
            );
          },
          pre: ({ children }: any) => {
            const codeElement = children?.props;
            const className = codeElement?.className || '';
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : undefined;

            if (className.includes('language-install')) {
              const args = extractText(codeElement.children);
              return <InstallTabs args={args} />;
            }

            return <CodeBlock className={className} language={language}>{children}</CodeBlock>;
          },
          ul: ({ children }) => (
            <ul className="list-disc list-inside text-slate-600 dark:text-gray-400 mb-4 space-y-1.5 ml-4">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside text-slate-600 dark:text-gray-400 mb-4 space-y-1.5 ml-4">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-slate-600 dark:text-gray-400 text-base">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-teal-600 dark:border-teal-500 pl-4 italic text-slate-600 dark:text-gray-400 my-4 bg-teal-50 dark:bg-teal-500/5 py-2">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 underline transition-colors"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-6 rounded-lg border border-slate-200 dark:border-white/10 -mx-4 sm:mx-0">
              <table className="min-w-full">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-slate-100 dark:bg-white/5">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-slate-200 dark:divide-white/10">{children}</tbody>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-sm text-slate-600 dark:text-gray-400">
              {children}
            </td>
          ),
          hr: () => (
            <hr className="my-8 border-slate-200 dark:border-white/10" />
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-slate-900 dark:text-white">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-slate-700 dark:text-gray-300">{children}</em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
