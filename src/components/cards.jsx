import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faC,
  faBrain,
  faQ,
  faScrewdriverWrench,
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
  return (
    <div className="widget_blocks_2">
      <div className="info_widget" style={{ transform: "rotate(6deg)" }}>
        <h1>15 +</h1>
        <h2>COMPLETED PROJECTS</h2>
      </div>
      <div className="info_widget" style={{ transform: "rotate(-15deg)" }}>
        <h1>50 +</h1>
        <h2>FOLLOWERS ON GIT</h2>
      </div>
      <div className="info_widget" style={{ transform: "rotate(5deg)" }}>
        <h1>5 +</h1>
        <h2>YEARS OF EXPERIENCE</h2>
      </div>
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
