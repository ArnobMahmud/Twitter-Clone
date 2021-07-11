import React from "react";

export default function SideBarMenuWidget({ Icon, title }) {
  return (
    <div>
      <div className="sidebar_menu">
        <Icon />
        {<h4>{title}</h4>}
      </div>
    </div>
  );
}
