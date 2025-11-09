import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-neutral-100"
        >
          “UMX INDIE believes in minimalism with meaning — silent ideas that leave loud impact.”
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 text-neutral-400"
        >
          Every project under UMX INDIE is crafted with precision, independence, and imagination.
        </motion.p>
      </div>
    </section>
  );
};

export default Philosophy;
