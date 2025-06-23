import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Skills from "./skills";
import { useTranslation } from "react-i18next";

const Skeleton = ({ height = 300, width = 300 }) => (
  <div
    style={{
      width,
      height,
      background: "linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%)",
      backgroundSize: "200% 100%",
      animation: "skeleton-shimmer 1.2s infinite linear",
      borderRadius: "30%",
      margin: "0 auto 50px auto",
    }}
    className="skeleton"
  />
);

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
    <motion.div className="large_block" style={{ gap: "50px" }}>
      <motion.div className="main_block" id="bio">
        <motion.div
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          onViewportEnter={handleViewportEnter}
          viewport={{ margin: "0px 0px -50px 0px", amount: 0.1, once: true }}
          variants={containerVariants}
          style={{
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          {!imgLoaded && <Skeleton />}
          <motion.img
            src="/me.png"
            className="user_avatar"
            variants={itemVariants}
            style={{ marginTop: "50px", marginBottom: "50px", display: imgLoaded ? "block" : "none" }}
            onLoad={() => setImgLoaded(true)}
          />
          <motion.div
            whileHover="hover"
            variants={itemVariants}
            style={{
              width: "100%",
              alignItems: "left",
              textAlign: "left",
              alignContent: "left",
            }}
          >
            <FontAwesomeIcon
              icon={faRocket}
              className="text_emoji"
              style={{ marginTop: "-100px" }}
            />
          </motion.div>
          {[
            t('bio.line1'),
            t('bio.line2'),
            t('bio.line3'),
            t('bio.line4'),
          ].map((text, index) => (
            <motion.div
              key={index}
              style={{ marginBottom: "30px", width: "100%", textAlign: "left" }}
              variants={itemVariants}
            >
              {text}
            </motion.div>
          ))}
        </motion.div>
        <Skills />
      </motion.div>
    </motion.div>
  );
};

export default Bio;

// CSS для shimmer-эффекта
// @keyframes skeleton-shimmer {
//   0% { background-position: -200% 0; }
//   100% { background-position: 200% 0; }
// }
