import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faLightbulb,
  faPaperclip,
  faMoon,
  faSun,
  faArrowLeft,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import useTheme from "../hooks/theme";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
    className={`header ${isScrolled ? "header-scrolled" : ""}`}
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0 }}
    >
      <motion.a href="/" className="navbar_button">
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "10px" }} />
        <span className="tooltip">BIO</span>
      </motion.a>
      <motion.a to="https://github.com/Nighty3098" className="navbar_button">
        <FontAwesomeIcon icon={faCodeBranch} style={{ marginRight: "10px" }} />
        <span className="tooltip">BIO</span>
      </motion.a>
      <motion.button onClick={toggleTheme} className="navbar_button">
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
        <span className="tooltip">BIO</span>
      </motion.button>
    </motion.div>
  );
};

export default Header;
