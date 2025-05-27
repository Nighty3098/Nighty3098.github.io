import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faMoon,
  faSun,
  faArrowLeft,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import useTheme from "../../hooks/theme";

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
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>BACK</p>
      </motion.a>
      <motion.a to="https://github.com/Nighty3098" className="navbar_button">
        <FontAwesomeIcon icon={faCodeBranch} />
        <p>OPEN GIT</p>
      </motion.a>
      <motion.button onClick={toggleTheme} className="navbar_button">
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
      </motion.button>
    </motion.div>
  );
};

export default Header;
