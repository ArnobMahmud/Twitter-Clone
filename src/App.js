import "./App.css";
import Announce from "./components/AnnounceSection/Announce";
import Feed from "./components/Feed/Feed";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Feed />
      <Announce />
    </div>
  );
}

export default App;
