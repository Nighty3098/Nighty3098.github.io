import Header from "../components/projects/project_header";
import { ProjectCard } from "../components/projects/projects_list";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
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
      title: "IPSA AI MODEL",
      description: "Neural network model for IPSA",
      image:
        "https://github.com/Nighty3098/InvestingAssistant/raw/main/header.png?raw=true",
      githubLink: "https://github.com/Nighty3098/IPSA_MODEL",
    },
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
      title: "LogInsight",
      description:
        "Program for analyzing log files and detecting anomalies in program operation",
      image:
        "https://github.com/Nighty3098/LogInsight/raw/production/imgs/1.png",
      githubLink: "https://github.com/Nighty3098/LogInsight",
    },
    {
      title: "mFetch",
      description: "A simple fetch tool for Linux written in bash ",
      image:
        "https://raw.githubusercontent.com/Nighty3098/mfetch/refs/heads/main/images/1.png",
      githubLink: "https://github.com/Nighty3098/mfetch",
    },
    {
      title: "TechSupport",
      description: "N9 GROUP technical support telegram bot ",
      image:
        "https://github.com/Nighty3098/TechSupportBot/blob/main/src/resources/header_2.png?raw=true",
      githubLink: "https://github.com/Nighty3098/TechSupportBot",
    },
    {
      title: "CodeKeeper",
      description: "Project and task manager for developers with Git",
      image:
        "https://raw.githubusercontent.com/Nighty3098/CodeKeeper/refs/heads/main/imgs/1.png",
      githubLink: "https://github.com/Nighty3098/CodeKeeper",
    },
  ];

  return (
    <div className="App">
      <Header />
      <motion.div
        style={{ width: "100%" }}
        initial={{ opacity: 0, x: 500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="welcome-section">
          <h1 className="welcome-title"><p>Projects</p></h1>
        </div>
      </motion.div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
