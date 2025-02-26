import "./index.css";
import Header from "./components/header";
import WelcomeBlock from "./components/welcome";
import Bio from "./components/bio";
import Contacts from "./components/contacts";
import Info from "./components/info";
import GitHubStats from "./components/git_stats";

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
      <div className="main_block">
        <Info />
        <GitHubStats username={"Nighty3098"} />
      </div>
      <Contacts />
    </div>
  );
}

export default App;
