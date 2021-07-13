import { Button } from "@material-ui/core";
import { Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { actionTypes } from "../provider/reducer";
import { useStateValue } from "../provider/StateProvider";
import { auth, provider } from "./firebase";
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
      <div className="twitter-icon">
        <Twitter />
      </div>
      <div className="loginSection">
        <h3>Log In Here</h3>
        <Button type="submit" onClick={signIn}>
          Log In
        </Button>
      </div>
    </LoginSection>
  );
}

const LoginSection = styled.div`
  height: 100vh;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  vertical-align: middle;
  align-items: center;
  justify-content: space-around;
  .twitter-icon .MuiSvgIcon-root {
    color: var(--twitter-color);
    font-size: 200px;
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
    padding: 10px 40px;
    color: white;
    border-radius: 10px;
    background-color: var(--twitter-color);
    text-transform: initial;
    font-size: 20px;
  }
`;
