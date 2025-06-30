import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

const WelcomeBlock = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const handleViewportEnter = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="welcome-section" style={{ minHeight: "100vh" }}>
      <div
        className="pattern-noisy"
        style={{
          width: "100vw",
          height: "100vh",
          opacity: "40%",
          position: "fixed",
          top: "0px",
          left: "0px",
        }}
      ></div>
      {!imgLoaded && <Skeleton />}
      <div className="welcome-sub">
        <motion.img
          src="/me.png"
          className="user_avatar"
          variants={itemVariants}
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            display: imgLoaded ? "block" : "none",
          }}
          onLoad={() => setImgLoaded(true)}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "flex-start",
            gap: "0px",
          }}
        >
          <p
            style={{
              color: "var(--fg)",
              padding: "0px",
              margin: "0px",
              fontSize: "4rem",
              lineHeight: "6rem",
              fontWeight: "lighter",
              fontFamily: "Rubik",
            }}
          >
            S. Artem
          </p>
          <p
            style={{
              fontFamily: "Roboto Condensed",
              color: "var(--fg)",
              padding: "0px",
              margin: "0px",
              fontWeight: "normal",
              letterSpacing: "0.1rem",
              fontSize: "1rem",
              lineHeight: "2rem",
            }}
          >
            DEVELOPER / FREELANCER / DESIGNER
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBlock;
