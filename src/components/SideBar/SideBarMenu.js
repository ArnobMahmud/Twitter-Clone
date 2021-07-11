import { Button } from "@material-ui/core";
import {
  BookmarkBorder,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
} from "@material-ui/icons";
import React from "react";
import SideBarMenuWidget from "../../widgets/SideBarMenuWidget";

export default function SideBarMenu() {
  return (
    <div>
      <SideBarMenuWidget Icon={Home} title="Home" className="menu_active"/>
      <SideBarMenuWidget Icon={Search} title="Explore" />
      <SideBarMenuWidget Icon={NotificationsNone} title="Notification" />
      <SideBarMenuWidget Icon={MailOutline} title="Message" />
      <SideBarMenuWidget Icon={BookmarkBorder} title="Bookmark" />
      <SideBarMenuWidget Icon={ListAlt} title="Lists" />
      <SideBarMenuWidget Icon={PermIdentity} title="Profile" />
      <SideBarMenuWidget Icon={MoreHoriz} title="More" />

      <Button variant="outlined" className="tweet-btn">
        Tweet
      </Button>
    </div>
  );
}
