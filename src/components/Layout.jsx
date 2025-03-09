import React from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{
        type: "spring",
        stiffness: 90,
        duration: 0.3
      }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
