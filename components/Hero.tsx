'use client';

// ... imports
import { DEFAULT_VERSION } from '@/config/versions';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Database, Zap, Terminal, Layers } from 'lucide-react';
import Link from 'next/link';
import BenchmarkChart from './BenchmarkChart';

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
    <section className="relative w-full overflow-hidden pt-20 sm:pt-32 pb-16 sm:pb-32">
      {/* Background Elements - Absolute Full Screen Width */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_0%,#000_40%,transparent_100%)]"></div>

        {/* Large Decorative Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] left-[10%] w-[600px] h-[600px] bg-teal-500/10 dark:bg-teal-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[100px]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-medium mb-6 backdrop-blur-sm"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse"></span>
              <span>{DEFAULT_VERSION} Stable</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight sm:leading-[1.2]"
            >
              Hawiah: The <span className="text-teal-600 dark:text-teal-400">Ultra-Fast</span> <br className="hidden md:block" /> Universal Database Interface
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl px-4 sm:px-0"
            >
              Stop settling for slow database layers. Hawiah is <strong>2.6x faster</strong> than industry standards,
              providing a zero-config, unified API for SQL, NoSQL, and Local files, powered by a revolutionary <strong>Hybrid Schema</strong> engine.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-row flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start px-4 sm:px-0 w-full max-w-[600px] mx-auto lg:mx-0">
              <Link
                href="/docs#quick-start"
                className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-slate-900 dark:bg-white px-3 sm:px-6 py-3 text-[13px] sm:text-sm font-bold text-white dark:text-slate-900 transition-all hover:opacity-90 w-full sm:w-auto flex-none whitespace-nowrap"
              >
                <span>Get Started</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>

              <Link
                href="https://npmjs.com/package/hawiah"
                target="_blank"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 sm:px-6 py-3 text-[13px] sm:text-sm font-semibold text-slate-900 dark:text-white transition-all hover:bg-slate-50 dark:hover:bg-white/10 flex-1 sm:flex-none whitespace-nowrap"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="shrink-0"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.129z" /></svg>
                <span>NPM</span>
              </Link>

              <Link
                href="https://dsc.gg/hawiah"
                target="_blank"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-[#5865F2]/30 bg-[#5865F2]/5 dark:bg-[#5865F2]/10 px-3 sm:px-6 py-3 text-[13px] sm:text-sm font-semibold text-[#5865F2] hover:bg-[#5865F2]/10 dark:hover:bg-[#5865F2]/20 transition-all flex-1 sm:flex-none whitespace-nowrap"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="shrink-0"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" /></svg>
                <span>Chat</span>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-2 xs:grid-cols-2 gap-y-6 gap-x-4 sm:gap-x-8 text-slate-500 dark:text-slate-400 text-[11px] sm:text-xs font-semibold border-t border-slate-100 dark:border-white/5 pt-8 w-full max-w-md mx-auto lg:mx-0 px-6 sm:px-0"
            >
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <Database size={16} className="text-teal-500 shrink-0" />
                <span className="whitespace-nowrap">Multi-Driver</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <Terminal size={16} className="text-teal-500 shrink-0" />
                <span className="whitespace-nowrap">TypeScript</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <Layers size={16} className="text-teal-500 shrink-0" />
                <span className="whitespace-nowrap">Modular Core</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <Zap size={16} className="text-teal-500 shrink-0" />
                <span className="whitespace-nowrap">Zero Config</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative order-2 lg:order-2"
          >
            <BenchmarkChart />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

