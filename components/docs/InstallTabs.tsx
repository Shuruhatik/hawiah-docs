'use client';

import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, Terminal } from 'lucide-react';

interface InstallTabsProps {
    args: string;
}

type Tab = 'npm' | 'pnpm' | 'yarn' | 'bun';

export default function InstallTabs({ args }: InstallTabsProps) {
    const [activeTab, setActiveTab] = useState<Tab>('npm');
    const [copied, setCopied] = useState(false);
    const id = useId();

    const getCommand = (tab: Tab) => {
        const packages = args.trim();
        switch (tab) {
            case 'npm':
                return `npm install ${packages}`;
            case 'pnpm':
                return `pnpm add ${packages}`;
            case 'yarn':
                return `yarn add ${packages}`;
            case 'bun':
                return `bun add ${packages}`;
            default:
                return '';
        }
    };

    const currentCommand = getCommand(activeTab);

    const handleCopy = () => {
        navigator.clipboard.writeText(currentCommand);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const tabs: Tab[] = ['npm', 'pnpm', 'yarn', 'bun'];

    return (
        <div className="my-6 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0F0F0F] overflow-hidden shadow-sm">
            <div className="flex items-center border-b border-slate-200 dark:border-white/10 overflow-x-auto bg-slate-100/50 dark:bg-white/5 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-white/10">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
              relative px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap
              ${activeTab === tab
                                ? 'text-teal-600 dark:text-teal-400'
                                : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                            }
            `}
                    >
                        {tab}
                        {activeTab === tab && (
                            <motion.div
                                layoutId={`activeTabInstall-${id}`}
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500"
                            />
                        )}
                    </button>
                ))}
            </div>

            <div className="relative group p-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center flex-wrap gap-2 font-mono text-sm break-all">
                        <span className="text-slate-400 select-none">$</span>
                        <span className="text-slate-900 dark:text-slate-300">
                            {activeTab !== 'npm' ? activeTab : 'npm'}
                            <span className={activeTab === 'npm' ? 'text-teal-600 dark:text-teal-400' : 'text-yellow-600 dark:text-yellow-400'}>
                                {activeTab === 'npm' ? ' install ' : ' add '}
                            </span>
                            <span className="text-purple-600 dark:text-purple-400">{args.trim()}</span>
                        </span>
                    </div>

                    <button
                        onClick={handleCopy}
                        className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                        aria-label="Copy command"
                        title="Copy command"
                    >
                        {copied ? (
                            <Check className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        ) : (
                            <Copy className="w-4 h-4" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
