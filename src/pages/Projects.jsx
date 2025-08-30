import Header from "../components/projects/project_header";
import { ProjectCard } from "../components/projects/projects_list";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle } from "@fortawesome/free-solid-svg-icons";

const projectsData = [
  {
    key: "owl",
    title: "THE OWL",
    image: "https://owl-gamma.vercel.app/imgs/1.png",
    githubLink: "https://owl-gamma.vercel.app/",
    description: "OWL - task and project managment app designed specifically for developers"
  },
  {
    key: "ipsa",
    title: "IPSA",
    image:
      "https://github.com/Nighty3098/InvestingAssistant/raw/main/header.png?raw=true",
    githubLink: "https://github.com/Nighty3098/InvestingAssistant",
    description: "Telegram is an investment assistant bot with exchange rate forecasting and stock analysis using AI"
  },
  {
    key: "Thunder",
    title: "Thunder",
    image: "https://github.com/He4vyL0v3/Thunder/raw/main/data/2.png",
    githubLink: "https://github.com/He4vyL0v3/Thunder",
    description: "Thunder is a multi-threaded HTTP HTTPS load testing tool designed for stress-testing web services"
  },
  {
    key: "IStealU",
    title: "IStealU",
    image: "https://github.com/He4vyL0v3/IStealU/raw/main/resources/1.png",
    githubLink: "https://github.com/He4vyL0v3/IStealU",
    description: "IStealU is a spyware program for Windows designed to intercept and log user keystrokes, as well as send logs to Telegram via the Telegram API"
  },
  {
    key: "ProxySniffer",
    title: "ProxySniffer",
    image: "https://github.com/He4vyL0v3/ProxySniffer/raw/main/imgs/1.png",
    githubLink: "https://github.com/He4vyL0v3/ProxySniffer",
    description: "ProxySniffer [ HTTP - HTTPS - SOCKS4 - SOCKS5 ]"
  },
  {
    key: "GhostlyGrabber",
    title: "GhostlyGrabber",
    image:
      "https://github.com/He4vyL0v3/GhostlyGrabber/raw/main/data/screen.png",
    githubLink: "A utility for automatically downloading media files from Telegram channels and chats with convenient storage and organization of content",
    description: ""
  },
  {
    key: "PrettyBanner",
    title: "Pretty Banner",
    image:
      "https://pretty-profile.vercel.app/api/github-stats?username=Nighty3098&theme=ancient&langs=true",
    githubLink: "https://github.com/Nighty3098/pretty-profile",
    description: "Generate a pretty art style profile card from your GitHub data"
  },
  {
    key: "loginsight",
    title: "LogInsight",
    image: "https://github.com/Nighty3098/LogInsight/raw/production/imgs/1.png",
    githubLink: "https://github.com/Nighty3098/LogInsight",
    description: "Program for analyzing log files and detecting anomalies in program operation"
  },
  {
    key: "cv_creator",
    title: "CV Creator bot [Vercel]",
    image: "/assets/other/image.png",
    githubLink: "https://t.me/creating_cv_bot",
    description: "A telegram bot that helps a user choose a resume creation service"
  },
  {
    key: "codekeeper",
    title: "CodeKeeper",
    image:
      "https://raw.githubusercontent.com/Nighty3098/CodeKeeper/refs/heads/main/imgs/1.png",
    githubLink: "https://github.com/Nighty3098/CodeKeeper",
    description: "Project and task manager for developers with Git"
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="App" style={{ width: "100%", maxWidth: "1500px"}}>
      <Header />
      <div
        className="welcome-section"
        style={{ height: "100vh", width: "100%", maxWidth: "100%" }}
      >
        <h1 className="projects_page_title">PROJECTS</h1>
        <FontAwesomeIcon className="bg_icon" icon={faSpaceShuttle} />
      </div>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
