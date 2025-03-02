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

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <a className="navbar_button" href="#bio">
        <FontAwesomeIcon icon={faLightbulb} style={{ marginRight: "10px" }} />
        BIO
      </a>
      <a className="navbar_button" href="#links">
        <FontAwesomeIcon icon={faPaperclip} style={{ marginRight: "10px" }} />
        LINKS
      </a>
      <Link className="navbar_button" to="/projects">
        <FontAwesomeIcon icon={faCodeFork} style={{ marginRight: "10px" }} />
        PROJECTS
      </Link>
      <button onClick={toggleTheme} className="navbar_button">
        <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
      </button>
    </header>
  );
};

export default Header;
