import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-medium"
        >
          The Indie Ecosystem.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 text-neutral-300 leading-relaxed"
        >
          UMX INDIE, founded by Om Lakhera, is a multi-domain creative and technology brand that builds, manages, and evolves a network of self-sustaining indie projects. Each creation merges design, development, and imagination — powered by independence, encrypted identity, and aesthetic innovation.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-neutral-400"
        >
          A private ecosystem for limitless creation.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
