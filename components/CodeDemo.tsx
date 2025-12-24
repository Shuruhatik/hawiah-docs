'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CodeBlock from './docs/CodeBlock';

const codeExamples = [
  {
    title: 'JSON',
    code: `import { Hawiah } from 'hawiah';
import { JSONDriver } from '@hawiah/local';

const driver = new JSONDriver('./users.json');
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ 
  id: 1, 
  name: 'Ahmed', 
  age: 25 
});

const users = await db.get({});
await db.disconnect();`
  },
  {
    title: 'YAML',
    code: `import { Hawiah } from 'hawiah';
import { YAMLDriver } from '@hawiah/local';

const driver = new YAMLDriver('./config.yaml');
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ 
  id: 1, 
  setting: 'theme',
  value: 'dark' 
});

const settings = await db.get({});
await db.disconnect();`
  },
  {
    title: 'SQLite',
    code: `import { Hawiah } from 'hawiah';
import { SQLiteDriver } from '@hawiah/sqlite';

const driver = new SQLiteDriver(
  './app.db', 
  'users'
);
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ 
  id: 1, 
  username: 'ahmed',
  email: 'ahmed@test.com' 
});

const users = await db.get({});
await db.disconnect();`
  },
  {
    title: 'MongoDB',
    code: `import { Hawiah } from 'hawiah';
import { MongoDriver } from '@hawiah/mongo';

const driver = new MongoDriver({
  uri: 'mongodb+srv://user:pass@cluster/',
  databaseName: 'myDatabase',
  collectionName: 'users'
});
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ 
  id: 1, 
  name: 'Ahmed',
  email: 'ahmed@test.com' 
});

const users = await db.get({});
await db.disconnect();`
  },
  {
    title: 'MySQL',
    code: `import { Hawiah } from 'hawiah';
import { MySQLDriver } from '@hawiah/mysql';

const driver = new MySQLDriver({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
  port: 3306
}, 'users');
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ 
  id: 1, 
  name: 'Ahmed',
  email: 'ahmed@test.com' 
});

const users = await db.get({});
await db.disconnect();`
  },
  {
    title: 'PostgreSQL',
    code: `import { Hawiah } from 'hawiah';
import { PostgreSQLDriver } from '@hawiah/postgres';

const driver = new PostgreSQLDriver({
  connectionString: 'postgresql://user:pass@host:5432/db',
  tableName: 'users'
});
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ 
  id: 1, 
  name: 'Ahmed',
  email: 'ahmed@test.com' 
});

const users = await db.get({});
await db.disconnect();`
  },
  {
    title: 'Firebase',
    code: `import { Hawiah } from 'hawiah';
import { FirebaseDriver } from '@hawiah/firebase';

const driver = new FirebaseDriver({
  firebaseConfig: {
    apiKey: "YOUR_API_KEY",
    projectId: "your-project-id",
    // ... other config
  },
  collectionName: 'users'
});
const db = new Hawiah({ driver });

await db.connect();
await db.insert({ 
  id: 1, 
  name: 'Ahmed' 
});

const users = await db.get({});
await db.disconnect();`
  }
];

export default function CodeDemo() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring' as const, stiffness: 100, damping: 20 }}
        className="mb-8 sm:mb-12 text-center"
      >
        <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          One API, Multiple Drivers
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400">
          Same code, different databases. Switch drivers without changing your application logic.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring' as const, stiffness: 100, damping: 20, delay: 0.2 }}
        className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c0c0c] shadow-2xl"
      >
        {/* Header / Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-[#1a1a1a]/50 backdrop-blur-md">
          {/* Traffic Lights (Desktop only) */}
          <div className="hidden md:flex gap-2 px-4 py-3">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#27c93f]" />
          </div>

          {/* Scrollable Tabs */}
          <div className="flex-1 w-full md:w-auto overflow-x-auto no-scrollbar px-2 py-2">
            <div className="flex items-center md:justify-center gap-1 min-w-max px-2">
              {codeExamples.map((example, index) => (
                <button
                  key={example.title}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors z-10 ${activeTab === index
                    ? 'text-white dark:text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                >
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-teal-600 dark:bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {example.title}
                </button>
              ))}
            </div>
          </div>

          {/* Spacer for desktop symmetry */}
          <div className="hidden md:block w-20" />
        </div>

        {/* Code Content */}
        <div className="p-0 bg-slate-50 dark:bg-[#0a0f0d] transition-colors duration-300">
          <div className="p-4 sm:p-6 min-h-[400px] overflow-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <CodeBlock code={codeExamples[activeTab].code} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

