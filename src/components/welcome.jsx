import React from "react";
import { motion } from "framer-motion";
import FloatWidget from "./decoration";

const WelcomeBlock = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="main_block" id="main">
      <FloatWidget />
      <motion.h1
        className="title"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        I'm
        <br />
        Nighty
      </motion.h1>
    </div>
  );
};

export default WelcomeBlock;
