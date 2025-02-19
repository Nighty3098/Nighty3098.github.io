import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import Info from "./cards";

const Bio = () => {
  // Варианты анимаций
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.1, staggerDirection: -1 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 120, damping: 10 }
    },
    exit: { opacity: 0, scale: 0.7, rotate: 15 }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { opacity: 0, y: -20 }
  };

  const rocketVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", delay: 0.8, stiffness: 100 }
    },
    exit: { opacity: 0, x: 50 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", delay: 1.0, stiffness: 150 }
    },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <motion.div 
      className="large_block"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ margin: "0px 0px -100px 0px", amount: 0.2 }}
    >
      <motion.div 
        className="bio_content" 
        id="bio"
        variants={containerVariants}
      >
        {/* Анимированное изображение */}
        <motion.img
          src="/me.png"
          className="user_avatar"
          variants={imageVariants}
        />
        <div style={{ height: "50px" }} />
        <motion.div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          <FontAwesomeIcon icon={faRocket} className="text_emoji" style={{ marginTop: "-80px", marginLeft: "-30px" }} />
          {[
            "Hello. I am Artem, a backend developer and freelancer.",
            "I am 18 years old, I am in the 11th grade of school and have been at the programming academy for 5 years.",
            "I strive to develop in the field of development and want to work on large projects that can affect people's lives.",
            "You can view all the projects on my github."
          ].map((text, index) => (
            <motion.div
              key={index}
              variants={textVariants}
              style={{ marginBottom: "30px" }}
            >
              {text}
              <div style={{ height: "30px" }} />
            </motion.div>
          ))}
          <motion.div
            variants={rocketVariants}
          >
          </motion.div>
        </motion.div>
        <motion.a 
          href="https://github.com/Nighty3098"
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="button" id="git_button">
            <FontAwesomeIcon
              icon={faGithubAlt}
              style={{ marginRight: "20px" }}
            />
            GITHUB
          </button>
        </motion.a>
        <div style={{ height: "50px" }} />
      </motion.div>
      <Info />
    </motion.div>
  );
};

export default Bio;
