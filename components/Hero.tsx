'use client';

// ... imports
import { motion } from 'framer-motion';
import { ArrowRight, Github, Database, Zap, Terminal, Layers } from 'lucide-react';
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
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]"
        />
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
            className="will-change-transform inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-sm font-medium mb-8 mx-auto w-fit backdrop-blur-sm shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span>v1.0.0 Stable Release</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="will-change-transform mb-8 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            One API to <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600 dark:from-teal-400 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Rule Them All
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="will-change-transform mb-10 text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A lightweight, unified API for <strong>JSON</strong>, <strong>SQL</strong>, and <strong>NoSQL</strong>.
            Switch drivers instantly without rewriting your application logic.
          </motion.p>

          <motion.div variants={itemVariants} className="will-change-transform flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs#quick-start"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-white px-8 py-4 text-base font-bold text-white dark:text-slate-900 transition-all hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20"
            >
              <span>Get Started</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://github.com/Shuruhatik/hawiah"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-8 py-4 text-base font-semibold text-slate-900 dark:text-white transition-all hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20"
            >
              <Github size={18} />
              <span>Star on GitHub</span>
            </Link>

            <Link
              href="https://npmjs.com/package/hawiah"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-8 py-4 text-base font-semibold text-slate-900 dark:text-white transition-all hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-[#CB3837]"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.129z" /></svg>
              <span>v1.0.0</span>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="will-change-transform mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-500 dark:text-slate-400 text-sm font-medium border-t border-slate-200 dark:border-white/5 pt-8"
          >
            <div className="flex items-center justify-center gap-2">
              <Database size={16} />
              <span>Multi-Driver Support</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Terminal size={16} />
              <span>TypeScript Ready</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Layers size={16} />
              <span>Modular Core</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Zap size={16} />
              <span>Zero Config</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

