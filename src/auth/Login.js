import { Button } from "@material-ui/core";
import { Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { actionTypes } from "../provider/reducer";
import { useStateValue } from "../provider/StateProvider";
import { auth, provider } from "./firebase";
import { FcGoogle } from "react-icons/fc";
export default function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <LoginSection>
      <div className="container">
        <div className="content flex align-items justify-content">
          <div className="twitter-icon">
            <Twitter />
          </div>
          <div className="loginSection">
            <Button type="submit" onClick={signIn}>
              <FcGoogle fontSize="30" /> &nbsp; Log in with Google
            </Button>
          </div>
        </div>
      </div>
    </LoginSection>
  );
}

const LoginSection = styled.div`
  .container {
    width: 1200px;
    margin: auto;
  }
  .content {
    height: 100vh;
  }
  .flex {
    display: flex;
    flex: 0 0 auto;
    flex-wrap: wrap;
  }
  .align-items {
    align-items: center;
  }
  .justify-content {
    justify-content: space-around !important;
  }
  .twitter-icon .MuiSvgIcon-root {
    color: var(--twitter-color);
    font-size: 400px;
  }
  .loginSection {
    align-items: center;
    vertical-align: middle;
  }
  .loginSection h3 {
    color: brown;
    font-size: 30px;
  }
  .loginSection Button {
    margin-top: 40px;
    padding: 10px 50px;
    color: var(--twitter-color);
    border-radius: 50px;
    background-color: var(--twitter-background);
    text-transform: initial;
    border: 1px solid var(--twitter-color);
    font-size: 20px;
  }
  @media (max-width: 767px) {
    .container {
      width: 550px;
    }
    .twitter-icon .MuiSvgIcon-root {
      color: var(--twitter-color);
      font-size: 300px;
    }
  }
  @media (max-width: 599px) {
    .container {
      width: 450px;
    }
    .twitter-icon .MuiSvgIcon-root {
      color: var(--twitter-color);
      font-size: 240px;
    }
  }
`;
