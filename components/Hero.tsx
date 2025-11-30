'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';
import CodeBlock from './docs/CodeBlock';

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
            One API to{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Rule Them All
            </span>
          </h1>

          <p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-gray-400">
            A lightweight, schema-less database abstraction layer. Swap drivers
            instantly without changing your code.
          </p>

          <div className="flex flex-row gap-3 sm:gap-4">
            <Link
              href="/docs"
              className="group flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg bg-teal-600 dark:bg-teal-400 px-4 sm:px-6 py-3 text-sm sm:text-base font-medium text-white dark:text-black transition-all hover:bg-teal-700 dark:hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-600/20 dark:hover:shadow-teal-400/20"
            >
              <span>Get Started</span>
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://github.com/Shuruhatik/hawiah"
              target="_blank"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-4 sm:px-6 py-3 text-sm sm:text-base font-medium text-slate-900 dark:text-white transition-all hover:border-slate-400 dark:hover:border-white/20 hover:bg-slate-200 dark:hover:bg-white/10"
            >
              <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="hidden xs:inline">GitHub</span>
            </Link>
          </div>
        </motion.div>

        {/* Right Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <div className="rounded-lg sm:rounded-xl border border-teal-200 dark:border-teal-500/20 bg-slate-50 dark:bg-[#0c0c0c] p-3 sm:p-6 shadow-2xl">
            <div className="mb-2 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500"></div>
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500"></div>
              <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500"></div>
            </div>

            <div className="-m-1 sm:-m-2 overflow-x-auto text-xs sm:text-sm">
              <CodeBlock code={`import { Hawiah, JSONDriver } from 'hawiah';

// Initialize with any driver
const db = new Hawiah(
  new JSONDriver('./db.json')
);

// Connect
await db.connect();

// Unified CRUD API
await db.insert({ 
  name: 'Ali', 
  role: 'Developer' 
});

const users = await db.get({ 
  role: 'Developer' 
});`} />
            </div>
          </div>

          <div className="absolute -inset-1 -z-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-teal-400/20 to-emerald-400/20 opacity-50 blur-xl sm:blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
