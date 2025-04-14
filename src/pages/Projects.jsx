import React from "react";
import Header from "../components/project_header";
import ProjectCard from "../components/project_card";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "DreamCoffee",
      description: "Coffee shop website",
      image: "coffee/main.png",
      githubLink: "https://dreamcoffee.vercel.app/",
    },
    {
      title: "StyleShop",
      description: "Clothing store website",
      image: "styleshop/main.png",
      githubLink: "https://style-shop-nine.vercel.app/",
    },
    {
      title: "THE OWL",
      description:
        "OWL - task and project managment app designed specifically for developers",
      image: "https://owl-gamma.vercel.app/imgs/1.png",
      githubLink: "https://owl-gamma.vercel.app/",
    },
    {
      title: "IPSA",
      description:
        "Telegram is an investment assistant bot with neural network and other functions",
      image:
        "https://github.com/Nighty3098/InvestingAssistant/raw/main/header.png?raw=true",
      githubLink: "https://github.com/Nighty3098/InvestingAssistant",
    },
    {
      title: "LogInsight",
      description:
        "Program for analyzing log files and detecting anomalies in program operation",
      image:
        "https://github.com/Nighty3098/LogInsight/raw/production/imgs/1.png",
      githubLink: "https://github.com/Nighty3098/LogInsight",
    },
    {
      title: "TechSupport",
      description: "N9 GROUP technical support telegram bot ",
      image:
        "https://github.com/Nighty3098/TechSupportBot/blob/main/src/resources/header_2.png?raw=true",
      githubLink: "https://github.com/Nighty3098/TechSupportBot",
    },
    {
      title: "SDash",
      description: " A simple server dashboard for smaller private servers",
      image:
        "https://private-user-images.githubusercontent.com/154594695/371582091-b8953212-cd61-4458-9a53-0f62da7e7456.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ1NjA2NzksIm5iZiI6MTc0NDU2MDM3OSwicGF0aCI6Ii8xNTQ1OTQ2OTUvMzcxNTgyMDkxLWI4OTUzMjEyLWNkNjEtNDQ1OC05YTUzLTBmNjJkYTdlNzQ1Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxM1QxNjA2MTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kODQ3YjI5OTg2MTQ0Y2E3Yzk0OTAwZjI0NjU5MjI2MDhjMjBmMmNjNzE3ZmNjODM4OWRjNmExYzgyMmQ3YmFlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.wBmZ_TOpDAWih77Qj7WQiSDPTgRpGlzGqGyxfu-8n6I",
      githubLink: "https://github.com/Nighty3098/SDash",
    },
    {
      title: "CodeKeeper",
      description: "Project and task manager for developers with Git",
      image:
        "https://github.com/Nighty3098/CodeKeeper/raw/main/imgs/1.png?raw=true",
      githubLink: "https://github.com/Nighty3098/CodeKeeper",
    },
  ];

  return (
    <div className="App">
      <Header />
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="main_block">
          <h1 className="title">Projects</h1>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
