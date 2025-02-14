import React from "react";
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

const Info = () => {
  const items = [
    {
      title: "15 +",
      subtitle: "COMPLETED PROJECTS",
      rotate: 10,
      icon: faCodeFork,
    },
    {
      title: "50 +",
      subtitle: "FOLLOWERS ON GIT",
      rotate: -5,
      icon: faUserPlus,
    },
    {
      title: "5 +",
      subtitle: "YEARS OF EXPERIENCE",
      rotate: 5,
      icon: faBrain,
    },
    {
      title: "12 +",
      subtitle: "satisfied customers",
      rotate: -10,
      icon: faUsers,
    },
  ];

  return (
    <div className="widget_blocks_2">
      {items.map((item, index) => (
        <div
          key={index}
          className="info_widget"
          style={{ transform: `rotate(${item.rotate}deg)` }}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="widget-icon"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              opacity: 1,
            }}
          />
          <h1>{item.title}</h1>
          <h2>{item.subtitle}</h2>
        </div>
      ))}
    </div>
  );
};

export const Skills = () => (
  <div className="widget_blocks">
    {skills_list.map((feature, index) => (
      <div key={index} className="square_block">
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
      </div>
    ))}
  </div>
);

export default Info;
