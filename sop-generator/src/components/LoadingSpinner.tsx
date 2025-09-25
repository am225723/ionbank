import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="relative"
      >
        <div className="w-16 h-16 rounded-full border-4 border-slate-200">
          <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;