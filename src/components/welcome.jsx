import { motion } from "framer-motion";

const WelcomeBlock = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-bg">
        <motion.h1
          className="welcome-title"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          DEVELOPER
        </motion.h1>
      </div>
    </section>
  );
};

export default WelcomeBlock;
