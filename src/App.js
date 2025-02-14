import logo from "./logo.png";
import "./index.css";
import Header from "./components/header";
import WelcomeBlock from "./components/welcome";
import Bio from "./components/bio";
import Info, { Skills } from "./components/cards";
import Contacts from "./components/contacts";

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
      <div style={{ backgroundColor: "transparent", height: "20px" }}></div>
      <Skills />
      <div className="spacer"></div>
      <Contacts />
      <div className="spacer"></div>
    </div>
  );
}

export default App;
