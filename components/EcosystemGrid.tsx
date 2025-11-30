'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  File,
  Braces,
  FileCode,
  Leaf,
  Flame,
  Feather,
  Database
} from 'lucide-react';

const drivers = [
  { name: 'MemoryDriver', icon: Cpu, description: 'In-memory storage' },
  { name: 'FileDriver', icon: File, description: 'File-based storage' },
  { name: 'JSONDriver', icon: Braces, description: 'JSON file storage' },
  { name: 'YAMLDriver', icon: FileCode, description: 'YAML file storage' },
  { name: 'MongoDriver', icon: Leaf, description: 'MongoDB support' },
  { name: 'FirebaseDriver', icon: Flame, description: 'Firebase integration' },
  { name: 'SQLiteDriver', icon: Feather, description: 'Lightweight SQL' },
  { name: 'MySQLDriver', icon: Database, description: 'MySQL database' },
  { name: 'PostgreSQLDriver', icon: Database, description: 'PostgreSQL database' },
];

export default function EcosystemGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
          Connect to Any Database
        </h2>
        <p className="text-lg text-slate-600 dark:text-gray-400">
          Unified API across all supported drivers
        </p>
      </motion.div>

      <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-3">
        {drivers.map((driver, index) => {
          const Icon = driver.icon;
          return (
            <motion.div
              key={driver.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 sm:p-6 transition-all hover:border-teal-600 dark:hover:border-teal-500/50 hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm hover:shadow-md"
            >
              <div className="mb-3 sm:mb-4 inline-flex rounded-lg bg-teal-50 dark:bg-teal-500/10 p-2 sm:p-3">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 dark:text-teal-400" />
              </div>

              <h3 className="mb-1.5 sm:mb-2 text-sm sm:text-lg font-semibold text-slate-900 dark:text-white">
                {driver.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                {driver.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-transparent"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
