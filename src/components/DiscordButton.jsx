import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const DiscordButton = () => {
  const controls = useAnimation();

  return (
    <motion.a
      href="https://discord.gg/tnHSEc2cZv"
      className="btn-slide"
      style={{ marginTop: "30px" }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      viewport={{ margin: "0px 0px -100px 0px" }}
      onViewportEnter={() => {
        controls.start({
          opacity: 1,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            delay: 0.8,
          },
        });
      }}
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
