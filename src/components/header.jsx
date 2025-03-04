import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPaperclip,
  faMoon,
  faSun,
  faCodeFork,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import useTheme from "../hooks/theme";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <motion.a 
        className="navbar_button tooltip-container"
        href="#bio"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FontAwesomeIcon icon={faLightbulb} />
        <span className="tooltip">Bio</span>
      </motion.a>
      <motion.a 
        className="navbar_button tooltip-container"
        href="#links"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FontAwesomeIcon icon={faPaperclip} />
        <span className="tooltip">Links</span>
      </motion.a>
      <MotionLink 
        className="navbar_button tooltip-container"
        to="/projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FontAwesomeIcon icon={faCodeFork} />
        <span className="tooltip">Projects</span>
      </MotionLink>
      <motion.button 
        onClick={toggleTheme} 
        className="navbar_button tooltip-container"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
        <span className="tooltip">Toggle theme</span>
      </motion.button>
    </header>
  );
};

export default Header;
