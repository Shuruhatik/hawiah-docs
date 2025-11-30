'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';
import CodeBlock from './docs/CodeBlock';

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            One API to{' '}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Rule Them All
            </span>
          </h1>

          <p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-gray-400">
            A lightweight, schema-less database abstraction layer. Swap drivers
            instantly without changing your code.
          </p>

          <div className="flex flex-row gap-3 sm:gap-4">
            <Link
              href="/docs"
              className="group flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg bg-teal-400 px-4 sm:px-6 py-3 text-sm sm:text-base font-medium text-black transition-all hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-400/20"
            >
              <span>Get Started</span>
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://github.com/Shuruhatik/hawiah"
              target="_blank"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 sm:px-6 py-3 text-sm sm:text-base font-medium text-white transition-all hover:border-white/20 hover:bg-white/10"
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
          <div className="rounded-xl border border-teal-500/20 bg-[#0c0c0c] p-4 sm:p-6 shadow-2xl">
            <div className="mb-3 sm:mb-4 flex items-center gap-2">
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500"></div>
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-500"></div>
              <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-500"></div>
            </div>

            <div className="-m-2 overflow-x-auto">
              <CodeBlock code={`import { Hawiah, JSONDriver } from 'hawiah';

// 1. Initialize with any driver
const db = new Hawiah(
  new JSONDriver('./db.json')
);

// 2. Connect
await db.connect();

// 3. Unified CRUD API
await db.insert({ 
  name: 'Ali', 
  role: 'Developer' 
});

const users = await db.get({ 
  role: 'Developer' 
});
// Output: [{ _id: '...', name: 'Ali', ... }]`} />
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-r from-teal-400/20 to-emerald-400/20 opacity-50 blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
