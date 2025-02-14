import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faLightbulb, faPaperclip, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import useTheme from "../hooks/theme";

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <header className="header">
        <a className="navbar_button" href="#main_block">
            <FontAwesomeIcon icon={faRocket} style={{ marginRight: "10px" }} /> MAIN
        </a>
        <a className="navbar_button" href="#user_bio">
            <FontAwesomeIcon icon={faLightbulb} style={{ marginRight: "10px" }} /> BIO
        </a>
        <a className="navbar_button" href="#bio_links">
            <FontAwesomeIcon icon={faPaperclip} style={{ marginRight: "10px" }} /> LINKS
        </a>
        <a onClick={toggleTheme} className="navbar_button">
            <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
        </a>
        </header>
    )
}

export default Header
