'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
    return (
        <section className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-slate-900 dark:bg-black">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-6 text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Ready to simplify your database layer?
                    </h2>
                    <p className="mb-10 text-xl text-slate-400 max-w-2xl mx-auto">
                        Join thousands of developers building faster with Hawiah.
                        Open source and free forever.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/docs"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-teal-400 hover:scale-105"
                        >
                            <span>Get Started Now</span>
                            <ArrowRight size={20} />
                        </Link>

                        <Link
                            href="https://github.com/Shuruhatik/hawiah"
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/20"
                        >
                            <span>View on GitHub</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
