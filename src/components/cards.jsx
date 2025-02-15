import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faC,
  faBrain,
  faQ,
  faCodeFork,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPython,
  faSquareJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const skills_list = [
  { icon: faPython, text: "PYTHON" },
  { icon: faC, text: "C / C++" },
  { icon: faSquareJs, text: "JS / TS" },
  { icon: faReact, text: "React JS" },
  { icon: faBrain, text: "AI DEV" },
  { icon: faQ, text: "QT" },
];

const InfoWidget = ({ item, index }) => {
  const controls = useAnimation();
  const [randomRotate] = useState(() => Math.random() * 25 - 15);

  console.debug("Generated: ", randomRotate)

  return (
    <motion.div
      className="info_widget"
      initial={{ opacity: 0, y: 50, rotate: randomRotate }}
      animate={controls}
      viewport={{ margin: "0px 0px -50px 0px", amount: 0.1 }}
      onViewportEnter={() => {
        controls.start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.05,
            ease: "easeOut",
            rotate: randomRotate
          },
        });
      }}
      onViewportLeave={() => {
        controls.start({
          opacity: 0,
        });
      }}
    >
      <h1>{item.title}</h1>
      <h2>{item.subtitle}</h2>
    </motion.div>
  );
};

const SkillWidget = ({ feature, index }) => {
  const controls = useAnimation();

  return (
    <motion.div
      className="skill_widget"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      viewport={{ margin: "0px 0px -50px 0px", amount: 0.1 }}
      onViewportEnter={() => {
        controls.start({
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100,
          },
        });
      }}
      onViewportLeave={() => {
        controls.start({
          opacity: 0,
        });
      }}
    >
      <span className="emoji">
        <FontAwesomeIcon icon={feature.icon} />
      </span>
      <h1>
        {feature.text.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h1>
    </motion.div>
  );
};

const Info = () => {
  const items = [
    {
      title: "15 +",
      subtitle: "COMPLETED PROJECTS",
      icon: faCodeFork,
    },
    {
      title: "50 +",
      subtitle: "FOLLOWERS ON GIT",
      icon: faUserPlus,
    },
    {
      title: "5 +",
      subtitle: "YEARS OF EXPERIENCE",
      icon: faBrain,
    },
    {
      title: "12 +",
      subtitle: "satisfied customers",
      icon: faUsers,
    },
  ];

  return (
    <div className="widget_blocks_2">
      {items.map((item, index) => (
        <InfoWidget key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export const Skills = () => (
  <div className="widget_blocks">
    {skills_list.map((feature, index) => (
      <SkillWidget key={index} feature={feature} index={index} />
    ))}
  </div>
);

export default Info;
