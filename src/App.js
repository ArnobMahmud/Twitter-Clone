import "./App.css";
import Login from "./auth/Login";
import Announce from "./components/AnnounceSection/Announce";
import Feed from "./components/Feed/Feed";
import SideBar from "./components/SideBar/SideBar";
import { useStateValue } from "./provider/StateProvider";
import styled from "styled-components";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <>
      <AppDesign>
        <div className="App">
          {!user ? (
            <Login />
          ) : (
          <>
            <div className="components-junction">
              <div className="container flex text-align jutify-content">
                <SideBar />
                <Feed />
                <Announce />
              </div>
            </div>
          </>
          )}
        </div>
      </AppDesign>
    </>
  );
}

export default App;

const AppDesign = styled.div`
  .components-junction {
  }
  .container {
    width: 1200px;
    margin: auto;
  }
  .flex {
    display: flex;
    flex: 0 0 auto;
  }
  .align-items {
    align-items: center;
  }
  .justify-content {
    justify-content: space-between;
  }
  @media (max-width: 767px) {
    .container {
      width: 600px;
    }
  }
  @media (max-width: 599px) {
    .container {
      width: 450px;
    }
  }
`;
