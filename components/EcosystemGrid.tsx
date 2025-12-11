'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  Braces,
  FileCode,
  Leaf,
  Flame,
  Feather,
  Database,
  Code2
} from 'lucide-react';

const drivers = [
  { name: 'MemoryDriver', icon: Cpu, description: 'In-memory storage', package: '@hawiah/local' },
  { name: 'JSONDriver', icon: Braces, description: 'Local JSON files', package: '@hawiah/local' },
  { name: 'YAMLDriver', icon: FileCode, description: 'Local YAML files', package: '@hawiah/local' },
  { name: 'SQLiteDriver', icon: Feather, description: 'SQLite database', package: '@hawiah/sqlite' },
  { name: 'MongoDriver', icon: Leaf, description: 'MongoDB support', package: '@hawiah/mongo' },
  { name: 'FirebaseDriver', icon: Flame, description: 'Firebase Firestore', package: '@hawiah/firebase' },
  { name: 'PostgreSQLDriver', icon: Database, description: 'PostgreSQL database', package: '@hawiah/postgres' },
  { name: 'MySQLDriver', icon: Database, description: 'MySQL database', package: '@hawiah/mysql' },
  { name: 'CustomDriver', icon: Code2, description: 'Build your own', package: 'DIY' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 120,
      damping: 15,
      mass: 0.8,
    },
  },
};

export default function EcosystemGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center will-change-transform"
      >
        <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
          Connect to Any Database
        </h2>
        <p className="text-lg text-slate-600 dark:text-gray-400 mb-2">
          Unified API across all supported drivers
        </p>
        <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">
          ✨ Plus Virtual Relationships with DataLoader batching
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-4 grid-cols-2 lg:grid-cols-3"
      >
        {drivers.map((driver) => {
          const Icon = driver.icon;
          return (
            <motion.div
              key={driver.name}
              variants={itemVariants}
              className="group relative flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-all hover:-translate-y-1 will-change-transform [&:nth-child(odd):last-child]:col-span-2 lg:[&:nth-child(odd):last-child]:col-span-1"
            >
              <div className="mb-5 p-3.5 rounded-2xl bg-white dark:bg-white/5 shadow-sm group-hover:shadow-md group-hover:shadow-teal-500/10 transition-all">
                <Icon className="h-7 w-7 text-slate-600 dark:text-slate-400 group-hover:text-teal-500 transition-colors" />
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 text-center">
                {driver.name}
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 text-center mb-4 leading-relaxed">
                {driver.description}
              </p>

              <code className="text-xs text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-2.5 py-1 rounded-md font-medium">
                {driver.package}
              </code>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

