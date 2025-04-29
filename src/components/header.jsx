import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faTimes, faRocket, faBrain, faInfo, faComment, faLightbulb, faPaperclip, faCodeFork } from "@fortawesome/free-solid-svg-icons"; // Добавлены недостающие иконки
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
    <motion.header 
      className={`header ${isScrolled ? "header-scrolled" : ""}`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 }}
    >
      <div className="header-content">
        <motion.a
          className="navbar_button tooltip-container"
          href="#links"
        >
          <FontAwesomeIcon icon={faPaperclip} />
          <p>LINKS</p>
          <span className="tooltip">LINKS</span>
        </motion.a>
        <motion.a
          className="navbar_button tooltip-container"
          href="/projects"
        >
          <FontAwesomeIcon icon={faCodeFork} />
          <p>PROJECTS</p>
          <span className="tooltip">PROJECTS</span>
        </motion.a>
        <motion.button
          onClick={toggleTheme}
          className="navbar_button tooltip-container"
        >
          <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} /> 
          <span className="tooltip">TOGGLE THEME</span>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
