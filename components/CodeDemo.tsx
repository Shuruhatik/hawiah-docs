'use client';

import { motion } from 'framer-motion';
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
        transition={{ duration: 0.5 }}
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
        transition={{ duration: 0.5, delay: 0.2 }}
        className="overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c0c0c] shadow-lg"
      >
        <div className="flex overflow-x-auto border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5">
          {codeExamples.map((example, index) => (
            <button
              key={example.title}
              onClick={() => setActiveTab(index)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${activeTab === index
                  ? 'border-b-2 border-teal-600 dark:border-teal-400 text-teal-700 dark:text-teal-400'
                  : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              {example.title}
            </button>
          ))}
        </div>

        <div className="p-4 sm:p-6">
          <CodeBlock code={codeExamples[activeTab].code} />
        </div>
      </motion.div>
    </section>
  );
}
