import "./index.css";
import Header from "./components/header";
import WelcomeBlock from "./components/welcome";
import Bio from "./components/bio";
import Contacts from "./components/contacts";
import Info from "./components/info";
import GitHubStats from "./components/git_stats";
import Projects from "./pages/Projects";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";

/*
●▬▬▬▬▬▬▬๑۩۩๑▬▬▬▬▬▬▬●
Made by ~
Nighty3098 ❥
●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●
──────▄▀▄─────▄▀▄
─────▄█░░▀▀▀▀▀░░█▄
─▄▄──█░░░░░░░░░░░█──▄▄
█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█
*/

function Home() {
  return (
    <Layout>
      <div className="App" style={{ padding: "0px", margin: "0px" }}>
        <Header />
        <WelcomeBlock />
        <Bio />
        <div className="main_block">
          <Info />
          <GitHubStats username={"Nighty3098"} />
        </div>
        <Contacts />
      </div>
    </Layout>
  );
}

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={
            <Layout>
              <Projects />
            </Layout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
