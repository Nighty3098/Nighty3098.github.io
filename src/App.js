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
    <div className="App">
      <Header />
      <WelcomeBlock />
      <Bio />
      <h1>
        <FontAwesomeIcon icon={faCube} className="icon" /> SKILLS
      </h1>
      <Skills />
      <h1>
        <FontAwesomeIcon icon={faComment} className="icon" />
        CONTACTS
      </h1>
      <Contacts />
    </div>
  );
}

export default App;
