import React from 'react';
import { motion } from 'framer-motion';

const Future = () => {
  return (
    <section id="future" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-medium"
        >
          Evolving Forward
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 max-w-3xl text-neutral-300"
        >
          UMX INDIE is expanding its creative network — developing more brands, enhancing encrypted systems, and exploring AI-based design automation.
        </motion.p>

        {/* Subtle timeline */}
        <div className="mt-10 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-cyan-500/40 via-purple-500/40 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1,2,3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
              >
                <p className="text-sm text-neutral-200">Phase {i}</p>
                <p className="mt-2 text-sm text-neutral-400">Progressive development in design systems, AI tools, and encrypted brand operations.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
