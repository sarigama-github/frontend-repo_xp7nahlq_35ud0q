import React from 'react';
import { motion } from 'framer-motion';

const services = [
  'Web Design & Development',
  'UI/UX & App Interfaces',
  'Graphic Design & Brand Identity',
  'Presentation & Pitch Deck Design',
  'Print-on-Demand Product Design',
  'Concept & Encrypted Brand Development',
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-medium"
        >
          What We Create
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm hover:bg-white/[0.06] transition-colors"
            >
              <p className="text-sm text-neutral-200">{s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
