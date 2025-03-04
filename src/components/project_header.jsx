import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPaperclip,
  faMoon,
  faSun,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import useTheme from "../hooks/theme";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <Link to="/" className="navbar_button">
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "10px" }} />
      </Link>
      <button onClick={toggleTheme} className="navbar_button">
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
      </button>
    </header>
  );
};

export default Header;
