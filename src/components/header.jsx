import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Удален MotionLink
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faTimes, faRocket, faBrain, faInfo, faComment, faLightbulb, faPaperclip, faCodeFork } from "@fortawesome/free-solid-svg-icons"; // Добавлены недостающие иконки
import useTheme from "../hooks/theme";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`header ${isScrolled ? "header-scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-content">
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
        <motion.a // Заменен MotionLink на motion.a
          className="navbar_button tooltip-container"
          href="/projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faCodeFork} />
          <span className="tooltip">PROJECTS</span>
        </motion.a>
        <motion.button
          onClick={toggleTheme}
          className="navbar_button tooltip-container"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} /> 
          <span className="tooltip">TOGGLE THEME</span>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
