import React from "react";
import { motion } from "framer-motion";
import FloatWidget from "./decoration";
import Textra from "./text_area";

const WelcomeBlock = () => {
  const titleVariants = {
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
        <Textra
          data={["DEVELOPER", "FREELANCER", "STUDENT"]}
          className="title"
          effect="topDown"
        />
      </motion.h1>
    </div>
  );
};

export default WelcomeBlock;
