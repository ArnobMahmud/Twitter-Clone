import React from "react";

export default function SideBarMenuWidget({ Icon, title, styleClass }) {
  return (
    <div>
      <div className="sidebar_menu">
        <Icon />
        {<h4 classNmae="menu-title">{title}</h4> }
      </div>
    </div>
  );
}
