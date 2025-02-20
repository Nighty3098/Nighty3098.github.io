import logo from "./logo.png";
import "./index.css";
import Header from "./components/header";
import WelcomeBlock from "./components/welcome";
import Bio from "./components/bio";
import Info, { Skills } from "./components/cards";
import Contacts from "./components/contacts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube, faComment } from "@fortawesome/free-solid-svg-icons";

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

function App() {
  return (
    <div className="App" style={{ padding: "0px", margin: "0px" }}>
      <Header />
      <WelcomeBlock />
      <Bio />
      <Skills />
      <div className="spacer"></div>
      <Contacts />
      <div className="spacer"></div>
    </div>
  );
}

export default App;
