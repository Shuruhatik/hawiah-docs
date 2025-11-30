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

export default function EcosystemGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
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

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {drivers.map((driver, index) => {
          const Icon = driver.icon;
          return (
            <motion.div
              key={driver.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-all hover:-translate-y-1"
            >
              <div className="mb-4 p-3 rounded-xl bg-white dark:bg-white/5 shadow-sm group-hover:shadow-md group-hover:shadow-teal-500/10 transition-all">
                <Icon className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:text-teal-500 transition-colors" />
              </div>

              <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                {driver.name}
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-500 text-center mb-2">
                {driver.description}
              </p>

              <code className="text-[10px] text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 px-2 py-1 rounded">
                {driver.package}
              </code>
            </motion.div>
          );
        })}


      </div>
    </section>
  );
}
