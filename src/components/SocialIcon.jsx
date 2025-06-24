import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 14,
      duration: 0.7,
      delay: 0.1,
    },
  },
};

const SocialIcon = ({ social, index }) => {
  return (
    <motion.a
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={iconVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.18 }}
      whileTap={{ scale: 0.92 }}
      style={{ display: "inline-block", transition: "box-shadow 0.2s" }}
    >
      <div className="contact_button">
        <i>
          <FontAwesomeIcon icon={social.icon} className="social-icon" />
        </i>
      </div>
    </motion.a>
  );
};

export default SocialIcon;
