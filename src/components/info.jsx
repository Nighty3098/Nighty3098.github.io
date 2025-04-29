import React from "react";
import { infoList } from "./data/info_list";
import {motion, useAnimation} from "framer-motion"

const InfoWidget = ({ item, index }) => {
  const controls = useAnimation();

  return (
    <motion.div
      className="info_widget"
      initial={{ scale: 0.8 }}
      animate={controls}
      viewport={{ margin: "0px 0px -50px 0px", amount: 0.1 }}
      onViewportEnter={() => {
        controls.start({
          scale: 1,
          transition: {
            duration: 0.6,
            delay: index * 0.05,
            ease: "easeOut",
          },
        });
      }}
    >
      <h1>{item.title}</h1>
      <h2>{item.subtitle}</h2>
    </motion.div>
  );
};
const Info = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "auto auto",
      gap: "30px",
      alignContent: "center",
      justifyContent: "center",
      width: "100%",
      marginBottom: "30px",
    }}
  >
    {infoList.map((item, index) => (
      <InfoWidget key={index} item={item} index={index} />
    ))}
  </div>
);

export default Info;
