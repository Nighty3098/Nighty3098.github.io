import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCodePullRequest } from "@fortawesome/free-solid-svg-icons";
import {
  faPython,
  faSquareJs,
  faReact,
  faBitcoin,
  faGithubAlt,
  faDocker
} from "@fortawesome/free-brands-svg-icons";

const FloatWidget = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        zIndex: -1,
        position: "absolute",
      }}
    >
      <div className="float_widget" style={{ top: "5%", left: "10%", transform: "rotate(10deg)" }}>
        <FontAwesomeIcon icon={faCode} />
      </div>
      <div className="float_widget" style={{ bottom: "10%", left: "7%" , transform: "rotate(-10deg)"}}>
        <FontAwesomeIcon icon={faCodePullRequest} />
      </div>
      <div className="float_widget" style={{ bottom: "30%", right: "20%", transform: "rotate(-10deg)" }}>
        <FontAwesomeIcon icon={faPython} />
      </div>
      <div className="float_widget" style={{ top: "15%", right: "15%", transform: "rotate(13deg)" }}>
        <FontAwesomeIcon icon={faReact} />
      </div>
      <div className="float_widget" style={{ top: "40%", left: "20%", transform: "rotate(5deg)" }}>
        <FontAwesomeIcon icon={faSquareJs} />
      </div>
      <div className="float_widget" style={{ bottom: "10%", right: "10%", transform: "rotate(-10deg)" }}>
        <FontAwesomeIcon icon={faBitcoin} />
      </div>
      <div className="float_widget" style={{ bottom: "20%", left: "40%", transform: "rotate(-15deg)" }}>
        <FontAwesomeIcon icon={faGithubAlt} />
      </div>
      <div className="float_widget" style={{ top: "21%", right: "40%", transform: "rotate(-15deg)" }}>
      <FontAwesomeIcon icon={faDocker} />
      </div>
    </div>
  );
};

export default FloatWidget;
