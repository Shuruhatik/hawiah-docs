'use client';

import { motion } from 'framer-motion';
import { Zap, Code2, Layers, Shield, Globe, Link2 } from 'lucide-react';

const fadeInUp = {
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

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center max-w-3xl mx-auto will-change-transform"
      >
        <h2 className="mb-6 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
          Everything you need. <br />
          <span className="text-slate-500 dark:text-slate-400">Nothing you don't.</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Built for modern development workflows. Hawiah strips away the complexity
          of traditional ORMs while keeping the power you need.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Large Card - No Schema */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-2 relative overflow-hidden rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 group hover:border-teal-500/50 transition-colors will-change-transform"
        >
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center mb-6 text-teal-600 dark:text-teal-400">
                <Layers size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Modular Architecture</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-md">
                Install only what you need. Core package + your choice of drivers.
                Keep your bundle size small and dependencies minimal.
              </p>
            </div>


          </div>
        </motion.div>

        {/* Tall Card - Lightning Fast */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1 }}
          className="md:row-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:bg-black dark:from-transparent dark:to-transparent border border-slate-200 dark:border-white/10 p-8 text-slate-900 dark:text-white group will-change-transform"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/20 dark:bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-all duration-500 group-hover:bg-teal-400/30 dark:group-hover:bg-teal-500/20" />

          <div className="relative z-10 h-full flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 dark:bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap size={24} className="text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Zero-overhead abstraction. Direct driver access when you need it.
            </p>

            <div className="mt-auto space-y-4">
              {['In-Memory', 'JSON', 'SQLite', 'MongoDB'].map((tech, i) => (
                <div key={tech} className="flex items-center gap-3">
                  <div className="w-full bg-slate-200 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: (90 + i * 2) / 100 }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                      className="h-full bg-teal-500 origin-left will-change-transform"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 w-20">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Standard Card - Type Safe */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 group hover:border-teal-500/50 transition-colors will-change-transform"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
            <Shield size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Type Safe</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            First-class TypeScript support. Autocomplete and type checking out of the box.
          </p>
        </motion.div>

        {/* Standard Card - Virtual Relationships */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 group hover:border-teal-500/50 transition-colors will-change-transform"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
            <Link2 size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Virtual Relationships</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Create relationships between instances with DataLoader batching. Avoid N+1 queries.
          </p>
        </motion.div>

        {/* Wide Card - Universal */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4 }}
          className="md:col-span-3 relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 to-emerald-500 dark:from-teal-600 dark:to-emerald-600 p-8 text-white will-change-transform"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 dark:opacity-20"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-teal-200" />
                <span className="font-mono text-teal-200">Universal Compatibility</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Run Anywhere</h3>
              <p className="text-teal-100 text-lg">
                Works in Node.js, Bun, Deno, and Edge environments.
                One library for all your JavaScript runtimes.
              </p>
            </div>
            <div className="flex gap-4">
              {/* Decorative icons/logos could go here */}
              <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 font-mono">Node.js</div>
              <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 font-mono">Bun</div>
              <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 font-mono">Edge</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

