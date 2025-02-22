import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import Info from "./cards";
import GitHubStats from "./git_cards";

const Bio = () => {
  const controls = useAnimation();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.div
      className="large_block"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      style={{ gap: "50px" }}
      viewport={{ margin: "0px 0px -100px 0px", amount: 0.2 }}
    >
      <motion.div className="bio_content" id="bio">
        <motion.img
          src="/me.png"
          className="user_avatar"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        <motion.div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          <motion.div whileHover="hover">
            <FontAwesomeIcon
              icon={faRocket}
              className="text_emoji"
              style={{ marginTop: "-80px", marginLeft: "-30px" }}
            />
          </motion.div>
          {[
            "Hello. I am Artem, a backend developer and freelancer.",
            "I am 18 years old, I am in the 11th grade of school and have been at the programming academy for 5 years.",
            "I strive to develop in the field of development and want to work on large projects that can affect people's lives.",
            "You can view all the projects on my github.",
          ].map((text, index) => (
            <motion.div
              key={index}
              style={{ marginBottom: "30px" }}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {text}
            </motion.div>
          ))}
          <motion.div></motion.div>
        </motion.div>
        <motion.a
          href="https://github.com/Nighty3098"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.0, width: "350px" }}
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
      </motion.div>
      <Info />
      <GitHubStats username={"Nighty3098"} />
    </motion.div>
  );
};

export default Bio;
