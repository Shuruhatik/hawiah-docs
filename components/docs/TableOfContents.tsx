'use client';

interface TableOfContentsProps {
  activeSection: string;
}

const tocItems: Record<string, string[]> = {
  installation: ['NPM', 'Yarn', 'PNPM'],
  'quick-start': ['Initialize', 'Basic Usage', 'Configuration'],
  connect: ['Syntax', 'Parameters', 'Examples'],
  insert: ['Syntax', 'Parameters', 'Examples', 'Return Value'],
  get: ['Syntax', 'Parameters', 'Examples', 'Return Value'],
  // Add more as needed
};

export default function TableOfContents({ activeSection }: TableOfContentsProps) {
  const items = tocItems[activeSection] || ['Overview', 'Syntax', 'Examples'];

  return (
    <aside className="hidden xl:block sticky top-16 h-[calc(100vh-4rem)] w-56 overflow-y-auto">
      <nav className="p-6">
        <h3 className="text-xs font-semibold text-slate-500 dark:text-gray-500 uppercase tracking-wider mb-4">
          On This Page
        </h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
