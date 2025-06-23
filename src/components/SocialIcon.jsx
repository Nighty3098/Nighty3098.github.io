import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = ({ social, index }) => {
  const controls = useAnimation();

  return (
    <motion.a
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      viewport={{ margin: "0px 0px -100px 0px", amount: 0.1 }}
      onViewportEnter={() => {
        controls.start({
          opacity: 1,
          y: 0,
          rotate: 0,
          transition: {
            type: "spring",
            stiffness: 120,
            delay: index * 0.15,
          },
        });
      }}
      whileTap={{ scale: 0.9 }}
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
