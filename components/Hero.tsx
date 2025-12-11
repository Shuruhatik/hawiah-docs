'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Database, Zap } from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="flex items-center justify-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center text-center max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="will-change-transform inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-sm font-medium mb-6 mx-auto w-fit"
          >
            <Zap size={14} className="fill-current" />
            <span>No Schema ORM</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="will-change-transform mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            One API to{' '}
            <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600 dark:from-teal-400 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Rule Them All
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="will-change-transform mb-8 text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Modular database abstraction with virtual relationships.
            Support for 7 drivers, 50+ methods, and DataLoader batching.
            One API to rule them all.
          </motion.p>

          <motion.div variants={itemVariants} className="will-change-transform flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 dark:bg-teal-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-teal-700 dark:hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-600/25 hover:-translate-y-0.5"
            >
              <span>Start Building</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://github.com/Shuruhatik/hawiah"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-8 py-4 text-base font-semibold text-slate-900 dark:text-white transition-all hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20"
            >
              <Github size={18} />
              <span>GitHub</span>
            </Link>

            <Link
              href="https://npmjs.com/package/hawiah"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-8 py-4 text-base font-semibold text-slate-900 dark:text-white transition-all hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-[#CB3837]"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.129z" /></svg>
              <span>NPM</span>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="will-change-transform mt-10 flex items-center justify-center gap-6 text-slate-400 dark:text-slate-500 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <Database size={16} />
              <span>Multi-Driver Support</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div>TypeScript Ready</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

