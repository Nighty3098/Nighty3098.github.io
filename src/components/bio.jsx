import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Skills from "./skills";

const Bio = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  const handleViewportEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <motion.div className="large_block" style={{ gap: "50px" }}>
      <motion.div className="main_block" id="bio">
        <motion.div
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          onViewportEnter={handleViewportEnter}
          viewport={{ margin: "0px 0px -50px 0px", amount: 0.1, once: true }}
          variants={containerVariants}
          style={{
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          <motion.img
            src="/me.png"
            className="user_avatar"
            variants={itemVariants}
            style={{ marginTop: "50px", marginBottom: "50px" }}
          />
          
          <motion.div
            whileHover="hover"
            style={{
              width: "100%",
              alignItems: "left",
              textAlign: "left",
              alignContent: "left",
            }}
          >
            <FontAwesomeIcon
              icon={faRocket}
              className="text_emoji"
              style={{ marginTop: "-100px" }}
            />
          </motion.div>
          
          {[
            "Hello. I am Artem, a full-stack / ML developer and freelancer.",
            "I am 18 years old, I am in the 11th grade of school and have been at the programming academy for 4 years.",
            "I strive to develop in the field of development and want to work on large projects that can affect people's lives.",
            "You can view all the projects on my github.",
          ].map((text, index) => (
            <motion.div
              key={index}
              style={{ marginBottom: "30px", width: "100%", textAlign: "left" }}
              variants={itemVariants}
            >
              {text}
            </motion.div>
          ))}
        </motion.div>
        <Skills />
      </motion.div>
    </motion.div>
  );
};

export default Bio;
