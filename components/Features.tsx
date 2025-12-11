'use client';

import { motion } from 'framer-motion';
import { Zap, Code2, Layers, Shield, Globe, Link2, Database, Box } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
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
        className="mb-20 text-center max-w-3xl mx-auto will-change-transform"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-6 border border-teal-100 dark:border-teal-800">
          Why Hawiah?
        </div>
        <h2 className="mb-6 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
          One API for All Your <br />
          <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">Databases</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          A truly modular abstraction layer. Install only the drivers you need and switch between them without changing your code.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
        {/* Large Card - No Schema */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-2 relative overflow-hidden rounded-3xl bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 p-8 group hover:border-teal-500/20 transition-all shadow-sm hover:shadow-xl hover:shadow-teal-500/5 will-change-transform"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300">
                <Box size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Unified API</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-md text-lg leading-relaxed">
                Write your application logic once using Hawiah's unified API. Switch from local JSON files to MongoDB or PostgreSQL instantly by changing the driver definition.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="w-2 h-2 rounded-full bg-[#336791]" />
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">Postgres</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="w-2 h-2 rounded-full bg-[#47A248]" />
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">MongoDB</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="w-2 h-2 rounded-full bg-[#00758F]" />
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">MySQL</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="w-2 h-2 rounded-full bg-slate-400" />
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400">SQLite</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tall Card - Performance */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:row-span-2 relative overflow-hidden rounded-3xl bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 p-8 group will-change-transform shadow-xl shadow-teal-900/5 dark:shadow-none hover:border-teal-500/20 transition-all"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-500/20 dark:group-hover:bg-teal-500/30 transition-colors duration-500" />

          <div className="relative z-10 h-full flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-500/20 flex items-center justify-center mb-6 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-transparent">
              <Zap size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Modular Architecture</h3>
            <p className="text-slate-600 dark:text-gray-400 mb-auto text-lg leading-relaxed">
              Install <strong>only what you need</strong>. Each driver is a separate package (<code>@hawiah/mongo</code>, <code>@hawiah/sqlite</code>, etc.), keeping your bundle size minimal.
            </p>

            <div className="mt-8 space-y-6">
              {['Read Latency', 'Write Throughput', 'Memory Usage'].map((metric, i) => (
                <div key={metric} className="space-y-2">
                  <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                    <span>{metric}</span>
                    <span className="text-teal-600 dark:text-teal-400">Native</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                      className="h-full bg-teal-500 origin-left"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Standard Card - Virtual Relationships */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 p-8 group hover:border-purple-500/20 transition-all shadow-sm hover:shadow-xl hover:shadow-purple-500/5 will-change-transform"
        >
          <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
            <Link2 size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Virtual Relationships</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Create relationships between different Hawiah instances. Join a <code>User</code> in SQL with their <code>Activity</code> in MongoDB using built-in DataLoader support.
          </p>
        </motion.div>

        {/* Standard Card - Types */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 p-8 group hover:border-blue-500/20 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-500/5 will-change-transform"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
            <Shield size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">TypeScript Support</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Full type safety and autocomplete. Hawiah leverages TypeScript generics to ensure your code is robust and error-free.
          </p>
        </motion.div>

        {/* Wide Card - Universal */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-3 h-[250px] relative overflow-hidden rounded-3xl bg-white dark:bg-[#0c0c0c] border border-slate-200 dark:border-white/5 p-8 flex flex-col md:flex-row items-center justify-between gap-8 will-change-transform shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]"></div>

          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <Globe size={20} className="text-teal-600 dark:text-teal-400" />
              <span className="text-teal-600 dark:text-teal-400 font-bold tracking-widest text-xs uppercase">Start Simple, Scale Big</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Prototyping to Production</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Start your project with simple local JSON files. When you're ready to scale, switch to robust databases like MongoDB or PostgreSQL without rewriting logic.
            </p>
          </div>

          <div className="relative z-10 flex gap-4 pr-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                <Database size={20} className="text-green-600 dark:text-green-400" />
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Node</span>
            </div>
            <div className="w-12 h-[2px] bg-slate-200 dark:bg-white/10 self-center"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                <Zap size={20} className="text-yellow-500 dark:text-yellow-400" />
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Bun</span>
            </div>
            <div className="w-12 h-[2px] bg-slate-200 dark:bg-white/10 self-center"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                <Globe size={20} className="text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Edge</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
