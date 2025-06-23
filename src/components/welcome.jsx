import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WelcomeBlock = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="welcome-section">
      <div className="welcome-bg">
        <motion.h1
          className="welcome-title"
          style={{
            transform: `translateY(${offsetY * 0.2}px) scale(${1 + Math.min(offsetY, 100) / 1000})`,
            filter: `blur(${Math.min(offsetY, 40) / 40}px)`
          }}
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          DEVELOPER
        </motion.h1>
      </div>
    </section>
  );
};

export default WelcomeBlock;
