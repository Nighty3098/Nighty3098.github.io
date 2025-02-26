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
      <Info />
      <GitHubStats username={"Nighty3098"} />
      <Contacts />
    </div>
  );
}

export default App;
