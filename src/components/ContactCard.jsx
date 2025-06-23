import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const ContactCard = () => {
  const controls = useAnimation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      viewport={{ margin: "0px 0px -50px 0px", amount: 0.1 }}
      onViewportEnter={() => {
        controls.start({
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          },
        });
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="float_widget_s"
          style={{ transform: "rotate(-15deg)", right: "-30px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              gap: "0px",
            }}
          >
            <h2>Let's work</h2>
            <h2>together</h2>
          </div>
        </div>
        <div
          className="float_widget_s"
          style={{
            position: "relative",
            zIndex: "-1",
            left: "-30px",
            opacity: "0.8",
            transform: "rotate(20deg)",
          }}
        >
          <h2>
            <FontAwesomeIcon icon={faUsers} />
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard; 
