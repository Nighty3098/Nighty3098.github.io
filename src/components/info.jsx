import { infoList } from "./data/info_list";
import {motion, useAnimation} from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const InfoWidget = ({ item }) => (
  <motion.div
    className="info_widget"
    variants={itemVariants}
    initial="hidden"
    animate="visible"
    whileHover={{ scale: 1.05, boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
  >
    <h1>{item.title}</h1>
    <h2>{item.subtitle}</h2>
  </motion.div>
);

const Info = () => (
  <motion.div
    style={{
      display: "grid",
      gridTemplateColumns: "auto auto",
      gap: "30px",
      alignContent: "center",
      justifyContent: "center",
      width: "100%",
      marginBottom: "30px",
    }}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {infoList.map((item, index) => (
      <InfoWidget key={index} item={item} />
    ))}
  </motion.div>
);

export default Info;
