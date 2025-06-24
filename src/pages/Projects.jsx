import Header from "../components/projects/project_header";
import { ProjectCard } from "../components/projects/projects_list";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const projectsData = [
  {
    key: "owl",
    title: "THE OWL",
    image: "https://owl-gamma.vercel.app/imgs/1.png",
    githubLink: "https://owl-gamma.vercel.app/",
  },
  {
    key: "ipsa",
    title: "IPSA",
    image:
      "https://github.com/Nighty3098/InvestingAssistant/raw/main/header.png?raw=true",
    githubLink: "https://github.com/Nighty3098/InvestingAssistant",
  },
  {
    key: "ipsa_model",
    title: "IPSA AI MODEL",
    image:
      "https://github.com/Nighty3098/InvestingAssistant/raw/main/header.png?raw=true",
    githubLink: "https://github.com/Nighty3098/IPSA_MODEL",
  },
  {
    key: "dreamcoffee",
    title: "DreamCoffee",
    image: "coffee/main.png",
    githubLink: "https://dreamcoffee.vercel.app/",
  },
  {
    key: "styleshop",
    title: "StyleShop",
    image: "styleshop/main.png",
    githubLink: "https://style-shop-nine.vercel.app/",
  },
  {
    key: "loginsight",
    title: "LogInsight",
    image: "https://github.com/Nighty3098/LogInsight/raw/production/imgs/1.png",
    githubLink: "https://github.com/Nighty3098/LogInsight",
  },
  {
    key: "mfetch",
    title: "mFetch",
    image:
      "https://raw.githubusercontent.com/Nighty3098/mfetch/refs/heads/main/images/1.png",
    githubLink: "https://github.com/Nighty3098/mfetch",
  },
  {
    key: "cv_creator",
    title: "CV Creator bot [Vercel]",
    image: "/other/image.png",
    githubLink: "https://github.com/Nighty3098/CV_CREATOR_BOT",
  },
  {
    key: "walkannouncer",
    title: "WalkAnnouncerBot [Vercel]",
    image: "/other/image2.png",
    githubLink: "https://github.com/Nighty3098/WalkAnnouncerBot",
  },
  {
    key: "codekeeper",
    title: "CodeKeeper",
    image:
      "https://raw.githubusercontent.com/Nighty3098/CodeKeeper/refs/heads/main/imgs/1.png",
    githubLink: "https://github.com/Nighty3098/CodeKeeper",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Header />
      <motion.div
        style={{ width: "100%" }}
        initial={{ opacity: 0, x: 500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="welcome-bg">
          <div className="welcome-section">
            <h1 className="welcome-title">PROJECTS</h1>
          </div>
        </div>
      </motion.div>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            description={t(`projects_data.${project.key}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
