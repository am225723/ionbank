import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const SuccessAnimation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <CheckCircle className="w-24 h-24 text-green-500" />
        </motion.div>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold text-slate-800 mt-6"
      >
        Document Generated Successfully!
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-slate-600 mt-2"
      >
        Your SOP document is ready for download
      </motion.p>
    </div>
  );
};

export default SuccessAnimation;