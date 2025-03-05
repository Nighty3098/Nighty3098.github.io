import React from "react";
import Header from "../components/project_header";
import ProjectCard from "../components/project_card";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "OWL",
      description:
        "OWL - task and project managment app designed specifically for developers",
      image: "https://owl-gamma.vercel.app/imgs/app_1.png",
      githubLink: "https://github.com/Nighty3098/OWL_APP",
    },
    {
      title: "IPSA",
      description:
        "Telegram is an investment assistant bot with neural network and other functions",
      image:
        "https://github.com/Nighty3098/InvestingAssistant/raw/main/header.png",
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
        "https://private-user-images.githubusercontent.com/154594695/418331037-d13b978c-9f0a-40db-af93-fb6295776305.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDA5MTQ2NDcsIm5iZiI6MTc0MDkxNDM0NywicGF0aCI6Ii8xNTQ1OTQ2OTUvNDE4MzMxMDM3LWQxM2I5NzhjLTlmMGEtNDBkYi1hZjkzLWZiNjI5NTc3NjMwNS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMwMlQxMTE5MDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMzYzNWQzNGQzOGNiODRkZDQ5OTM1MDVlODYzNDJlMmQ5NTBmMzVjOGVjYWRmMDYwYjNlNmNiY2YwNTEyZjJlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Fp2N9fF4KSAIDuYJrAlKSCp6hnca0Pd8Ti0Hzg8taC4",
      githubLink: "https://github.com/Nighty3098/TechSupportBot",
    },
    {
      title: "SDash",
      description: " A simple server dashboard for smaller private servers",
      image:
        "https://private-user-images.githubusercontent.com/154594695/371582091-b8953212-cd61-4458-9a53-0f62da7e7456.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDA5MTQ1NzksIm5iZiI6MTc0MDkxNDI3OSwicGF0aCI6Ii8xNTQ1OTQ2OTUvMzcxNTgyMDkxLWI4OTUzMjEyLWNkNjEtNDQ1OC05YTUzLTBmNjJkYTdlNzQ1Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMwMlQxMTE3NTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jODQ1NDBlM2ZmNjQ4Yzk4NzE1YzU5YWVmMWUyMTBlZWZmNDM4NTkzY2FiMWE0Njc3YmFmODVhYWY0NTIzZGVlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.pc80SZop1GSCUEjN88QYrS-mmrr9rOB2AYk5vlenfhk",
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
      initial={{ opacity: 0, x: 500 }}    whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
        <div className="spacer" />
        <motion.h1>
          Projects
        </motion.h1>
        <div className="spacer" />
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
