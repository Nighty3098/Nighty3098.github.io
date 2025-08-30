import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faPaperclip,
  faCodeFork,
  faBars,
  faGhost,
} from "@fortawesome/free-solid-svg-icons";
import useTheme from "../hooks/theme";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 25 },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.header
      className={`header ${isScrolled ? "header-scrolled" : ""}`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0 }}
    >
      <div className="header-content">
        <p style={{ display: "flex", flexDirection: "row", gap: "10px", fontSize: "1rem", marginRight: "50px" }}>
          <FontAwesomeIcon icon={faGhost} /> Nighty3098
        </p>
        <div className="navbar_spacer"></div>
        <motion.a
          className="navbar_button tooltip-container desktop-nav"
          href="#links"
        >
          <FontAwesomeIcon icon={faPaperclip} />
          <p>{t("navbar.links")}</p>
        </motion.a>
        <motion.a
          className="navbar_button tooltip-container desktop-nav"
          href="/projects"
        >
          <FontAwesomeIcon icon={faCodeFork} />
          <p>{t("navbar.projects")}</p>
        </motion.a>
        <div className="navbar_spacer"></div>
        <div className="desktop-nav">
          <LanguageSelector />
        </div>
        <button
          className="navbar_button mobile-burger"
          style={{ display: "none" }}
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <motion.button
        onClick={toggleTheme}
        className="navbar_button tooltip-container"
      >
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
      </motion.button>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            onClick={() => setMobileMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 1200 }}
          >
            <motion.div
              className="mobile-menu"
              onClick={(e) => e.stopPropagation()}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button className="navbar_button">
                <FontAwesomeIcon icon={faPaperclip} />
                <a href="#links" onClick={() => setMobileMenuOpen(false)}>
                  {t("navbar.links")}
                </a>
              </button>
              <button className="navbar_button">
                <FontAwesomeIcon icon={faCodeFork} />
                <a href="/projects" onClick={() => setMobileMenuOpen(false)}>
                  {t("navbar.projects")}
                </a>
              </button>
              <LanguageSelector />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
