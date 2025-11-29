'use client';

import { motion } from 'framer-motion';
import { Zap, Code2, Layers, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for performance with minimal overhead. Switch drivers without sacrificing speed.'
  },
  {
    icon: Code2,
    title: 'Developer Friendly',
    description: 'Intuitive API design that feels natural. Write less code, accomplish more.'
  },
  {
    icon: Layers,
    title: 'Schema-less',
    description: 'No rigid schemas. Store and retrieve data flexibly across any supported driver.'
  },
  {
    icon: Shield,
    title: 'Type Safe',
    description: 'Built with TypeScript for complete type safety and excellent IDE support.'
  }
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold text-white">
          Why Choose Hawiah?
        </h2>
        <p className="text-lg text-gray-400">
          Built for developers who value simplicity and flexibility
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex rounded-xl bg-[#C5F74F]/10 p-4">
                <Icon className="h-8 w-8 text-[#C5F74F]" />
              </div>
              
              <h3 className="mb-2 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              
              <p className="text-sm text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
