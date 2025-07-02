import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import Skills from "./skills";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
    },
  },
};

const Bio = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const { t } = useTranslation();

  const handleViewportEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <motion.div className="main_block" id="bio">
      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        onViewportEnter={handleViewportEnter}
        viewport={{ margin: "0px 0px -50px 0px", amount: 0.1, once: true }}
        variants={containerVariants}
        style={{
          width: "100%",
          textAlign: "center",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "0px",
          padding: "0px",
          margin: "0px",
        }}
      >
        <h1 style={{ width: "100%", textAlign: "left" }}> // BIO</h1>
        <motion.div
          whileHover="hover"
          variants={itemVariants}
          style={{
            width: "100%",
            alignItems: "left",
            textAlign: "left",
            alignContent: "left",
            justifyContent: "left",
          }}
        >
          <FontAwesomeIcon
            icon={faRocket}
            className="text_emoji"
            style={{ marginTop: "-100px" }}
          />
        </motion.div>
        {[
          t("bio.line1"),
          t("bio.line2"),
          t("bio.line3"),
          t("bio.line4"),
          t("bio.line5"),
        ].map((text, index) => (
          <motion.div
            key={index}
            style={{
              marginBottom: "30px",
              width: "100%",
              textAlign: "left",
            }}
            variants={itemVariants}
          >
            {text}
          </motion.div>
        ))}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="https://docs.google.com/document/d/1F56DLD5cfGlKVzTzlpU5TD-zoJlGTi2LhfMb9mejHe8/edit?usp=sharing"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "100%",
              maxWidth: "450px",
              height: "30px",
              boxShadow: "none",
              gap: "15px",
            }}
          >
            <FontAwesomeIcon icon={faFileArrowDown} /> {t("cv")}
          </a>
        </div>
      </motion.div>
      <Skills />
    </motion.div>
  );
};

export default Bio;
