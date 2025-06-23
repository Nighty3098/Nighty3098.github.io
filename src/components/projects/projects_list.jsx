import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useGithubStats from "./../../hooks/useGithubStats";
import { useTranslation } from "react-i18next";

const Skeleton = ({ height = 300, width = "100%" }) => (
  <div
    style={{
      width,
      height,
      background: "linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%)",
      backgroundSize: "200% 100%",
      animation: "skeleton-shimmer 1.2s infinite linear",
      borderRadius: "10px",
      marginBottom: "1rem",
    }}
    className="skeleton"
  />
);

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ProjectCard = ({ title, description, image, githubLink }) => {
  const { stars, loading, error } = useGithubStats(githubLink);
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const { t } = useTranslation();

  return (
    <motion.div
      className="project-card"
      variants={cardItemVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        transition: { type: "spring", stiffness: 200, damping: 15 },
      }}
      style={{ cursor: "pointer" }}
    >
      <div className="project-content">
        {!imgError ? (
          <>
            {!imgLoaded && <Skeleton />}
            <img
              src={image}
              alt={title}
              className="project-image"
              style={{ display: imgLoaded ? "block" : "none" }}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
            />
          </>
        ) : (
          <div
            className="project-image fallback"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#f0f0f0",
              fontSize: "2rem",
              height: "200px",
              width: "100%",
              color: "#666",
            }}
            aria-label="ERROR"
          >
            ?
          </div>
        )}
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
            style={{
              height: "20px",
              textAlign: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
            aria-label={`VIEW ${title} ON GIT`}
          >
            {t('open_project')}
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectsList = ({ projects }) => (
  <motion.div
    variants={cardContainerVariants}
    initial="hidden"
    animate="visible"
    style={{ width: "100%" }}
  >
    {projects && projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </motion.div>
);

export default ProjectsList;

// CSS для shimmer-эффекта
// @keyframes skeleton-shimmer {
//   0% { background-position: -200% 0; }
//   100% { background-position: 200% 0; }
// }
