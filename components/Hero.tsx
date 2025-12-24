'use client';

// ... imports
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
              <span>v1.0.0 Stable</span>
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

            <motion.div variants={itemVariants} className="flex flex-row gap-2 sm:gap-3 justify-center lg:justify-start px-4 sm:px-0 w-full max-w-[400px] mx-auto lg:mx-0">
              <Link
                href="/docs#quick-start"
                className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-slate-900 dark:bg-white px-3 sm:px-6 py-3 text-[13px] sm:text-sm font-bold text-white dark:text-slate-900 transition-all hover:opacity-90 flex-1 sm:flex-none whitespace-nowrap"
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
                <span>View on NPM</span>
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

