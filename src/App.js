import "./index.css";
import Header from "./components/header";
import WelcomeBlock from "./components/welcome";
import Bio from "./components/bio";
import Contacts from "./components/contacts";
import Info from "./components/info";
import GitHubStats from "./components/git_stats";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";

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
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
