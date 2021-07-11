import { Twitter } from "@material-ui/icons";
import React from "react";
import "./SideBar.css";
import SideBarMenu from "./SideBarMenu";
export default function SideBar() {
  return (
    <div>
      <div className="sidebar">
        <Twitter className="twitter_icon" />
        <div>
          <SideBarMenu />
        </div>
      </div>
    </div>
  );
}
