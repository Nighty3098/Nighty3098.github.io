import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useGithubStats from "../hooks/useGithubStats";

const ProjectCard = ({ title, description, image, githubLink }) => {
  const { stars, loading } = useGithubStats(githubLink);

  return (
    <motion.div
      className="project-card"
    >
      {/*<img src={image} alt={title} className="project-image" />*/}
      <div className="project-content">
        <div
          className="project-header"
          style={{ width: "80%", justifyContent: "space-between" }}
        >
          <h3>{title}</h3>
          {!loading && stars !== null && (
            <a className="stars-count">
              <FontAwesomeIcon icon={faStar} /> {stars}
            </a>
          )}
        </div>
        <p style={{ width: "80%" }}>{description}</p>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            id="git_btn"
            style={{ height: "20px" }}
          >
            <FontAwesomeIcon icon={faGithub} /> View on GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
