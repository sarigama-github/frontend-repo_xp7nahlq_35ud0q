import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Afflare',
    desc: 'Retail and lifestyle brand selling print-on-demand clothing and accessories.',
  },
  {
    title: 'Encrypted Projects',
    desc: 'Private experimental labs focusing on UI/UX, AI tools, games, and art.',
  },
  {
    title: 'Design & Web Division',
    desc: 'Creative studio for digital design, presentation, and branding.',
  },
  {
    title: 'Innovation Wing',
    desc: 'Exploring indie technology, AI-assisted creativity, and automation.',
  },
];

const BrandNetwork = () => {
  return (
    <section id="network" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-medium"
        >
          The Network
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm hover:bg-white/[0.06] transition-colors"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-lg font-medium">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandNetwork;
