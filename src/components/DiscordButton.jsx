import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      duration: 0.7,
      delay: 0.2,
    },
  },
};

const DiscordButton = () => {
  const controls = useAnimation();

  return (
    <motion.a
      href="https://discord.gg/tnHSEc2cZv"
      className="btn-slide"
      style={{ marginTop: "30px" }}
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.08, y: -4, boxShadow: "0 4px 24px rgba(0,0,0,0.16)" }}
      whileTap={{ scale: 0.95, y: 0 }}
    >
      <span className="circle">
        <FontAwesomeIcon icon={faDiscord} />
      </span>
      <span className="title">DS SERVER</span>
      <span className="title-hover">CLICK</span>
    </motion.a>
  );
};

export default DiscordButton; 
