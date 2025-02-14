import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughWink } from "@fortawesome/free-solid-svg-icons";
import FloatWidget from "./decoration";

const WelcomeBlock = () => {
  return (
    <div className="main_block" id="main">
      <FloatWidget />
      <h1 className="title">
        <FontAwesomeIcon icon={faFaceLaughWink} />
        <br />
        I'm Nighty
      </h1>
    </div>
  );
};

export default WelcomeBlock;
