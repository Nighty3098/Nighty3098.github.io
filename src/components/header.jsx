import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faPaperclip,
  faCodeFork,
} from "@fortawesome/free-solid-svg-icons";
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
        <motion.a className="navbar_button tooltip-container" href="#links">
          <FontAwesomeIcon icon={faPaperclip} />
          <p>LINKS</p>
        </motion.a>
        <motion.a className="navbar_button tooltip-container" href="/projects">
          <FontAwesomeIcon icon={faCodeFork} />
          <p>PROJECTS</p>
        </motion.a>
      </div>
      <motion.button
        onClick={toggleTheme}
        className="navbar_button tooltip-container"
      >
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
      </motion.button>
    </motion.header>
  );
};

export default Header;
