import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import Skills from "./skills";
import GitHubStats from "./git_stats"

const Bio = () => {
  const controls = useAnimation();

  return (
    <motion.div className="large_block" style={{ gap: "50px" }}>
      <motion.div className="main_block" id="bio">
        <motion.img
          src="/me.png"
          className="user_avatar"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          viewport={{ margin: "0px 0px -50px 0px", amount: 0.1 }}
          onViewportEnter={() => {
            controls.start({
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              },
            });
          }}
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
              style={{ marginTop: "-80px", marginLeft: "0px" }}
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
              style={{ marginBottom: "30px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              viewport={{ margin: "0px 0px -50px 0px", amount: 0.1 }}
              onViewportEnter={() => {
                controls.start({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  },
                });
              }}
            >
              {text}
            </motion.div>
          ))}
        </motion.div>
        <Skills />
        <GitHubStats />
      </motion.div>
    </motion.div>
  );
};

export default Bio;
