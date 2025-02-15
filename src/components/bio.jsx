import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons"
import Info from "./cards";

const Bio = () => {
  return (
    <div className="large_block">
      <div className="bio_content" id="bio">
        <img
          src="/me.png"
          style={{
            width: "50%",
            maxWidth: "300px",
            borderRadius: "30%",
            aspectRatio: "1/1",
            border: "10px solid var(--fg)",
          }}
        />
        <div
          style={{
            alignContent: "left",
            alignContent: "left",
            textAlign: "left",
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "50px",
          }}
        >
          Hello. I am Artem, a backend developer and freelancer.
          <br /><br />
          I am 18 years old, I am in the 11th grade of school and have been at the programming academy for 5 years.
          <br /><br />
          I strive to develop in the field of development and want to work on large projects that can affect people's lives.
          <br /><br />
          You can view all the projects on my github.
          <FontAwesomeIcon
            icon={faRocket}
            className="text_emoji"
            style={{ marginTop: "-80px", marginLeft: "20px" }}
          />
        </div>
        <a href="https://github.com/Nighty3098"><button className="button"><FontAwesomeIcon icon={faGithubAlt} style={{marginRight: "20px"}} /> GITHUB</button></a>
        <br />
      </div>
      <div className="spacer"></div>
      <Info />
    </div>
  );
};

export default Bio;
