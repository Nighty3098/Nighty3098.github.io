import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {skillsList} from "./data/skills_list"

const SkillWidget = ({ feature, index }) => {
  const controls = useAnimation();

  return (
    <motion.div
      className="skill_widget"
      initial={{ scale: 0.7 }}
      animate={controls}
      viewport={{ margin: "0px 0px -50px 0px", amount: 0.1 }}
      onViewportEnter={() => {
        controls.start({
          scale: 1,
          transition: {
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100,
          },
        });
      }}
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
};

const Skills = () => (
  <div className="widget_blocks_2">
    {skillsList.map((feature, index) => (
      <SkillWidget key={index} feature={feature} index={index} />
    ))}
  </div>
);

export default Skills;
