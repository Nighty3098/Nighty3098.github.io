import React from "react";
import { infoList } from "./data/info_list";
import InfoWidget from "./info_widget";

const Info = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
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
