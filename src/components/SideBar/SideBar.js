import { Twitter } from "@material-ui/icons";
import React from "react";
import SideBarMenu from "./SideBarMenu";
import styled from "styled-components";

export default function SideBar() {
  return (
    <SideArea>
      <div className="sidebar">
        <Twitter className="twitter_icon" />
        <div>
          <SideBarMenu />
        </div>
      </div>
    </SideArea>
  );
}

const SideArea = styled.div`
  flex: 0.3;
  border-right: 1px solid var(--twitter-background);
  .twitter_icon {
    color: var(--twitter-color);
    font-size: 70px !important;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .sidebar_menu {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px 10px;
    border-radius: 20px;
  }

  .sidebar_menu > .MuiSvgIcon-root {
    margin-right: 20px;
    font-weight: 800;
    font-size: 30px;
    transition: all linear 0.3s;
  }
  .sidebar_menu > h4 {
    font-size: 18px;
    transition: all linear 0.3s;
  }
  .sidebar_menu:hover {
    background-color: #e8f5fe;
    color: var(--twitter-color);
  }
  .sidebar_menu .menu_active {
    color: var(--twitter-color);
  }
  .tweet-btn {
    display: block;
    background-color: var(--twitter-color) !important;
    padding: 10px 30% !important;
    border: none !important;
    color: white !important;
    border-radius: 30px !important;
    height: 50px !important;
    margin-top: 20px !important;
    font-weight: 600 !important;
    text-transform: inherit !important;
    font-size: 20px !important;
  }
`;
