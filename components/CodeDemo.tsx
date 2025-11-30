'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import CodeBlock from './docs/CodeBlock';

const codeExamples = [
  {
    title: 'Connect',
    code: `import { Hawiah, MongoDriver } from 'hawiah';

const db = new Hawiah(
  new MongoDriver('mongodb://localhost:27017')
);

await db.connect();
console.log('Connected!');`
  },
  {
    title: 'Insert',
    code: `// Insert a single document
await db.insert({ 
  name: 'John Doe',
  email: 'john@example.com',
  role: 'Admin'
});

// Insert multiple documents
await db.insert([
  { name: 'Alice', role: 'Developer' },
  { name: 'Bob', role: 'Designer' }
]);`
  },
  {
    title: 'Query',
    code: `// Get all documents
const all = await db.get();

// Filter by criteria
const devs = await db.get({ 
  role: 'Developer' 
});

// Get single document
const user = await db.get({ 
  email: 'john@example.com' 
}, { limit: 1 });`
  },
  {
    title: 'Paginate',
    code: `// Paginate results
const page1 = await db.paginate({
  role: 'Developer'
}, {
  page: 1,
  limit: 10
});

console.log(page1.data);
console.log(page1.total);
console.log(page1.hasMore);`
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
          Unified API
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400">
          Same methods, different drivers. It's that simple.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0c0c0c] shadow-lg"
      >
        {/* Tabs */}
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

        {/* Code Content */}
        <div className="p-4 sm:p-6">
          <CodeBlock code={codeExamples[activeTab].code} />
        </div>
      </motion.div>
    </section>
  );
}
