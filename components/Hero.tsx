'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';
import CodeBlock from './docs/CodeBlock';

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
            One API to{' '}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Rule Them All
            </span>
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-gray-400">
            A lightweight, schema-less database abstraction layer. Swap drivers
            instantly without changing your code.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/docs"
              className="group flex items-center justify-center gap-2 rounded-lg bg-teal-400 px-6 py-3 font-medium text-black transition-all hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-400/20"
            >
              Get Started
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="https://github.com/hawiah/hawiah"
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition-all hover:border-white/20 hover:bg-white/10"
            >
              <Github size={18} />
              View on GitHub
            </Link>
          </div>
        </motion.div>

        {/* Right Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-xl border border-teal-500/20 bg-[#0c0c0c] p-6 shadow-2xl">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>

            <div className="-m-2">
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
