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
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useTranslation();

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
          <p>{t('navbar.links')}</p>
        </motion.a>
        <motion.a className="navbar_button tooltip-container" href="/projects">
          <FontAwesomeIcon icon={faCodeFork} />
          <p>{t('navbar.projects')}</p>
        </motion.a>
        <LanguageSelector />
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
