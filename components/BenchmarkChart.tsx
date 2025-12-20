'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Zap, Activity, Rocket, ChevronRight, BarChart3 } from 'lucide-react';

const benchmarks = [
    {
        name: 'Total',
        icon: <Rocket size={14} />,
        description: 'Total execution time (Lower is better)',
        unit: 'ms',
        data: [
            { name: 'Hawiah', value: 94.42 },
            { name: 'Sequelize', value: 230.08 },
            { name: 'TypeORM', value: 239.49 },
            { name: 'Prisma', value: 268.57 },
        ]
    },
    {
        name: 'Read',
        icon: <Zap size={14} />,
        description: 'Single record retrieval speed',
        unit: 'ms',
        data: [
            { name: 'Hawiah', value: 0.24 },
            { name: 'TypeORM', value: 1.45 },
            { name: 'Sequelize', value: 4.15 },
            { name: 'Prisma', value: 6.44 },
        ]
    },
    {
        name: 'Write',
        icon: <Activity size={14} />,
        description: 'Data modification efficiency',
        unit: 'ms',
        data: [
            { name: 'Hawiah', value: 18.72 },
            { name: 'TypeORM', value: 70.68 },
            { name: 'Sequelize', value: 71.17 },
            { name: 'Prisma', value: 80.26 },
        ]
    }
];

export default function BenchmarkChart() {
    const [activeTab, setActiveTab] = useState(0);
    const current = benchmarks[activeTab];
    const maxValue = Math.max(...current.data.map(d => d.value));

    return (
        <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 relative group/chart">
            {/* Blended Glass Container */}
            <div className="relative rounded-3xl bg-white/40 dark:bg-white/[0.02] backdrop-blur-md shadow-sm overflow-hidden transition-colors">
                <div className="p-5 sm:p-6">
                    {/* Simplified Tabs */}
                    <div className="flex gap-1 p-1 bg-slate-200/50 dark:bg-white/5 rounded-xl mb-6">
                        {benchmarks.map((b, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(i)}
                                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-bold transition-all relative ${activeTab === i
                                    ? 'text-white'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                            >
                                {activeTab === i && (
                                    <motion.div
                                        layoutId="tabBg"
                                        className="absolute inset-0 bg-teal-600 dark:bg-teal-500 rounded-lg shadow-sm"
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {b.icon}
                                    <span className="hidden sm:inline whitespace-nowrap">{b.name}</span>
                                    <span className="sm:hidden">{b.name.split(' ')[0]}</span>
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="min-h-[240px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-5"
                            >
                                <div className="space-y-1">
                                    <div className="text-teal-600 dark:text-teal-400 text-[10px] font-bold uppercase tracking-wider">
                                        Performance Test
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                        {current.description}
                                    </h3>
                                </div>

                                <div className="space-y-4">
                                    {current.data.map((item, i) => (
                                        <div key={item.name} className="space-y-1.5">
                                            <div className="flex justify-between items-center px-0.5">
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-xs font-bold ${item.name === 'Hawiah'
                                                        ? 'text-teal-600 dark:text-teal-400'
                                                        : 'text-slate-600 dark:text-slate-400'
                                                        }`}>
                                                        {item.name}
                                                    </span>
                                                    {item.name === 'Hawiah' && (
                                                        <span className="text-[9px] bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 px-1.5 py-0.5 rounded font-black uppercase">
                                                            Fastest
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">
                                                    {item.value} {current.unit}
                                                </div>
                                            </div>

                                            <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${(item.value / maxValue) * 100}%` }}
                                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                                    className={`h-full rounded-full ${item.name === 'Hawiah'
                                                        ? 'bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.3)]'
                                                        : 'bg-slate-300 dark:bg-slate-700'
                                                        }`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="mt-8">
                        <Link
                            href="/docs#benchmarks"
                            className="flex items-center justify-between p-3 rounded-xl bg-slate-200/40 dark:bg-white/5 hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors group/btn"
                        >
                            <div className="flex items-center gap-2 font-bold text-xs text-slate-700 dark:text-slate-300">
                                <BarChart3 size={14} className="text-teal-500" />
                                Full Benchmark Report
                            </div>
                            <ChevronRight size={14} className="text-slate-400 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            <p className="mt-4 text-center text-[10px] text-slate-400 font-medium">
                Results from SQLite local performance cluster
            </p>
        </div>
    );
}
