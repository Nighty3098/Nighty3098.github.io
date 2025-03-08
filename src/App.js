import React, { lazy, Suspense } from "react";
import "./index.css";
import Header from "./components/header";
import WelcomeBlock from "./components/welcome";
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

const Bio = lazy(() => import("./components/bio"));
const Contacts = lazy(() => import("./components/contacts"));
const Info = lazy(() => import("./components/info"));
const GitHubStats = lazy(() => import("./components/git_stats"));
const Projects = lazy(() => import("./pages/Projects"));

const Loading = () => (
  <div style={{ 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    height: "100vh",
    color: "var(--fg)",
    fontSize: "2rem"
  }}>
    Loading
  </div>
);

function Home() {
  return (
    <div className="App" style={{ padding: "0px", margin: "0px" }}>
      <Header />
      <WelcomeBlock />
      <Suspense fallback={<Loading />}>
        <Bio />
        <div className="main_block">
          <Info />
          <GitHubStats username={"Nighty3098"} />
        </div>
        <Contacts />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={
        <Suspense fallback={<Loading />}>
          <Projects />
        </Suspense>
      } />
    </Routes>
  );
}

export default App;
