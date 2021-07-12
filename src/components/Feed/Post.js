import React from "react";
import PostWidget from "../../widgets/PostWidget";
import "./Post.css";
export default function Post() {
  return (
    <div>
      <PostWidget
        avatar="https://scontent.fdac8-1.fna.fbcdn.net/v/t1.6435-9/171027468_103552885200148_6721370629770645453_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XI5MFsIOX9YAX9Xexgr&_nc_ht=scontent.fdac8-1.fna&oh=3f38e2d9e185a5b5f8732901cdde288f&oe=60F168BA"
        displayName="Arnob Mahmud"
        userName="@arnob__mahmud"
        verified={true}
        text="Lets clone twitter!!! 🎉"
      />{" "}
      <PostWidget
        avatar="https://scontent.fdac8-1.fna.fbcdn.net/v/t1.6435-9/171027468_103552885200148_6721370629770645453_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XI5MFsIOX9YAX9Xexgr&_nc_ht=scontent.fdac8-1.fna&oh=3f38e2d9e185a5b5f8732901cdde288f&oe=60F168BA"
        displayName="Arnob Mahmud"
        userName="@arnob__mahmud"
        verified={true}
        text="Fourteen years after the final episode of James Gandolfini's son will take over the role of Tony Soprano in a new movie about the mob boss' backstory."
      />
    </div>
  );
}
