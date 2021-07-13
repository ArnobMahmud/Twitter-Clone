import "./App.css";
import Login from "./auth/Login";
import Announce from "./components/AnnounceSection/Announce";
import Feed from "./components/Feed/Feed";
import SideBar from "./components/SideBar/SideBar";
import { useStateValue } from "./provider/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <SideBar />
          <Feed />
          <Announce />
        </>
      )}
    </div>
  );
}

export default App;
