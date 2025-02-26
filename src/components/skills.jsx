import React from "react";
import { skillsList } from "./data/skills_list";
import SkillWidget from "./skill_widget";

const Skills = () => (
  <div className="widget_blocks_2">
    {skillsList.map((feature, index) => (
      <SkillWidget key={index} feature={feature} index={index} />
    ))}
  </div>
);

export default Skills;
