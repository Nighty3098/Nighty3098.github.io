import React from "react";
import { infoList } from "./data/info_list";
import InfoWidget from "./info_widget";
import Links from "./links";

const Info = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "30px",
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {infoList.map((item, index) => (
        <InfoWidget key={index} item={item} index={index} />
      ))}
    </div>
  </div>
);

export default Info;
