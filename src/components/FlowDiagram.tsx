import React from 'react';
import { motion } from 'framer-motion';

export default function FlowDiagram() {
  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/flow-diagram.svg" 
        alt="ESデータ活用フロー" 
        className="w-full h-auto"
      />
    </motion.div>
  );
}