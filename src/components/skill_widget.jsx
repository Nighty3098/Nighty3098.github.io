import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillWidget = ({ feature, index }) => {
  const controls = useAnimation();

  return (
    <motion.div
      className="skill_widget"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      viewport={{ margin: "0px 0px -50px 0px", amount: 0.1 }}
      onViewportEnter={() => {
        controls.start({
          opacity: 1,
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

export default SkillWidget;
