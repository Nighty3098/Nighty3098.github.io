import "./index.css";
import Header from "./components/header";
import WelcomeBlock from "./components/welcome";
import Bio from "./components/bio";
import Contacts from "./components/contacts";
import Info from "./components/info";
import Projects from "./pages/Projects";
import ReviewsSlider from "./components/ReviewsSlider";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
    <div>
      <div className="App" style={{ padding: "0px", margin: "0px", gap: "var(--spacing-xxl)" }}>
        <Header />
        <WelcomeBlock />
        <Bio />
        <Contacts />
        <ReviewsSlider />
      </div>
    </div>
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
            <div>
              <Projects />
            </div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
