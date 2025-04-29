import React from "react";
import Textra from "./text_area";

const WelcomeBlock = () => {
  return (
    <div className="main_block" id="main">
      <h1 className="title">
        <Textra
          data={["DEVELOPER", "FREELANCER", "DESIGNER", "STUDENT"]}
          className="title"
          effect="topDown"
        />
      </h1>
    </div>
  );
};

export default WelcomeBlock;
