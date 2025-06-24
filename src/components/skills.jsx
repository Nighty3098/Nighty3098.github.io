import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skillsList } from "./data/skills_list";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
};

const SkillWidget = ({ feature }) => (
  <motion.div
    className="skill_widget"
    variants={itemVariants}
    initial="hidden"
    animate="visible"
    whileHover={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
  >
    <span className="emoji">
      <FontAwesomeIcon icon={feature.icon} />
    </span>
    <h1>
      {feature.text.split("\n").map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </h1>
  </motion.div>
);

const Skills = () => (
  <motion.div
    className="widget_blocks_2"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {skillsList.map((feature, index) => (
      <SkillWidget key={index} feature={feature} />
    ))}
  </motion.div>
);

export default Skills;
