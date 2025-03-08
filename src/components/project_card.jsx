import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useGithubStats from "../hooks/useGithubStats";

const ProjectCard = ({ title, description, image, githubLink }) => {
  const { stars, loading, error } = useGithubStats(githubLink);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-content">
        <div
          className="project-header"
          style={{ width: "80%", justifyContent: "space-between" }}
        >
          <h3>{title}</h3>
          {!loading && !error && stars !== null ? (
            <span className="stars-count" aria-label={`${stars} STARS ON GIT`}>
              <FontAwesomeIcon icon={faStar} /> {stars}
            </span>
          ) : error ? (
            <span className="stars-count" aria-label="STARS ERROR">
              <FontAwesomeIcon icon={faStar} /> -
            </span>
          ) : (
            <span className="stars-count" aria-label="LOADING">
              <FontAwesomeIcon icon={faStar} /> ...
            </span>
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
            aria-label={`VIEW ${title} ON GIT`}
          >
            <FontAwesomeIcon icon={faGithub} /> VIEW ON GIT
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
