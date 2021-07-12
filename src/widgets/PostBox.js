import React from "react";
import { Avatar, Button } from "@material-ui/core";
import {
  CalendarTodayOutlined,
  EmojiEmotionsOutlined,
  GifOutlined,
  PhotoAlbum,
  PollOutlined,
} from "@material-ui/icons";

export default function PostBox() {
  return (
    <div>
      <div className="post_container">
        <div className="top_option">
          <Avatar src="https://scontent.fdac8-1.fna.fbcdn.net/v/t1.6435-9/171027468_103552885200148_6721370629770645453_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XI5MFsIOX9YAX9Xexgr&_nc_ht=scontent.fdac8-1.fna&oh=3f38e2d9e185a5b5f8732901cdde288f&oe=60F168BA" />
          <form>
            <input type="text" placeholder="What's happening?" />
          </form>
        </div>
        <div className="more_option">
          <div className="more_options_icons">
            <PhotoAlbum className="more_option_icons" />
            <GifOutlined className="more_option_icons" />
            <PollOutlined className="more_option_icons" />
            <EmojiEmotionsOutlined className="more_option_icons" />
            <CalendarTodayOutlined className="more_option_icons" />
          </div>
          <Button variant="outlined" className="tweet-btn">
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
}
