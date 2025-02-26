import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const Links = () => {
  const controls = useAnimation();

  const containerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "15px",
  };

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: controls,
    viewport: { margin: "0px 0px -50px 0px", amount: 0.1 },
    onViewportEnter: () => {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        },
      });
    },
  };

  return (
    <div style={containerStyle}>
      <motion.a href="owl-gamma.vercel.app/" {...animationProps}>
        <button className="button" id="projects_btn">
          TRY MY PROJECT MANAGER <FontAwesomeIcon icon={faCodeBranch} />
        </button>
      </motion.a>
      <motion.a href="https://github.com/Nighty3098" {...animationProps}>
        <button className="button" id="git_btn">
          MY GITHUB <FontAwesomeIcon icon={faGithubAlt} />
        </button>
      </motion.a>
    </div>
  );
};

export default Links;
