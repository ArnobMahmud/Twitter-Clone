import { NewReleasesOutlined } from "@material-ui/icons";
import React from "react";
import PostBox from "../../widgets/PostBox";
import "./Feed.css";
import Post from "./Post";
export default function Feed() {
  return (
    <div>
      <div className="feed_section">
        <div className="feed_nav">
          <h2>Home</h2>
          <NewReleasesOutlined />
        </div>
        <PostBox />
        <div className="feed_posts">
          <Post /> <Post /> <Post />
        </div>
      </div>
    </div>
  );
}
