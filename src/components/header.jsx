import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPaperclip,
  faMoon,
  faSun,
  faCodeFork,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import useTheme from "../hooks/theme";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Header = ({ type = "main" }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      {type === "project" ? (
        <Link to="/" className="navbar_button tooltip-container">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span className="tooltip">BACK</span>
        </Link>
      ) : (
        <>
          <motion.a
            className="navbar_button tooltip-container"
            href="#bio"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faLightbulb} />
            <span className="tooltip">BIO</span>
          </motion.a>
          <motion.a
            className="navbar_button tooltip-container"
            href="#links"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faPaperclip} />
            <span className="tooltip">LINKS</span>
          </motion.a>
          <MotionLink
            className="navbar_button tooltip-container"
            to="/projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faCodeFork} />
            <span className="tooltip">PROJECTS</span>
          </MotionLink>
        </>
      )}
      <motion.button
        onClick={toggleTheme}
        className="navbar_button tooltip-container"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
        <span className="tooltip">TOGGLE THEME</span>
      </motion.button>
    </header>
  );
};

export default Header;
