import { NewReleasesOutlined } from "@material-ui/icons";
import React from "react";
import PostBox from "../../widgets/PostBox";
import styled from "styled-components";
import { useState, useEffect } from "react";
import db from "../../auth/firebase";
import PostWidget from "../../widgets/PostWidget";

export default function Feed() {
  const [posts, setsPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) => {
        setsPosts(
          snapShot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
           })
          )
        );
      });
  }, []);
  return (
    <FeedSection>
      <div className="feed_section">
        <div className="feed_nav">
          <h2>Home</h2>
          <NewReleasesOutlined />
        </div>
        <PostBox />
        <div className="feed_posts">
          {posts.map((post) => (
            <PostWidget
              key={post.id}
              avatar={post.data.avatar}
              displayName={post.data.displayName}
              timestamp={post.data.timestamp}
              userName={post.data.userName}
              verified={post.data.verified}
              text={post.data.text}
              image={post.data.image}
            />
          ))}
        </div>
      </div>
    </FeedSection>
  );
}

const FeedSection = styled.div`
  width: 600px;

  .feed_nav {
    position: sticky;
    top: 0;
    background-color: white;
    border-bottom: 1px solid var(--twitter-background);
    z-index: 100;
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
    /* box-shadow: 1px 1px 4px 2px #f3efef; */
  }

  .feed_nav .MuiSvgIcon-root {
    color: var(--twitter-color);
    font-size: 30px;
    border-radius: 30px;
    cursor: pointer;
  }

  .feed_nav .MuiSvgIcon-root:hover {
    background-color: var(--twitter-background);
  }
  .feed_section::-webkit-scrollbar {
    display: none;
  }

  .feed_section {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .post_container {
    border-bottom: 5px solid var(--twitter-background);
  }

  .top_option {
    display: flex;
    flex: 1;
    padding: 20px 10px;
    align-items: center;
  }

  .top_option > form > input::placeholder {
    font-size: 16px;
    line-break: anywhere;
  }
  .imagePost input {
    margin-left: 20px;
    font-size: 16px;
    border: none;
    outline: none;
  }

  .top_option > form > input {
    border: none;
    outline: none;
    margin-left: 20px;
    font-size: 24px;
  }

  .more_option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5%;
  }
  .more_options_icons > .MuiSvgIcon-root {
    cursor: pointer;
    margin: 5px;
    color: var(--twitter-color);
  }

  .more_options_icons > .MuiSvgIcon-root:hover {
    background-color: var(--twitter-background);
    border-radius: 50%;
  }

  .more_option .tweet-btn {
    background-color: var(--twitter-color) !important;
    border: none !important;
    color: white !important;
    height: 40 !important;
    border-radius: 30px !important;
    height: 40px !important;
    font-weight: 500 !important;
    text-transform: inherit !important;
    font-size: 18px !important;
    padding: 10px 30px !important;
    margin-bottom: 20px;
    margin-right: 10px;
  }

  .post_header_content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: 5px;
  }
  .post_header_flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .post_header_info {
    margin-left: 5px;
  }

  .postTime {
    margin: 5px 0px;
    font-size: 14px;
  }

  .post_header {
    display: flex;
    align-items: center;
    padding: 15px;
  }

  .post_header_content h3 {
    align-items: center;
    margin: 0px 5px;
  }

  .post_header_content h3 span .blueTick {
    margin-left: 5px;
    font-size: 18px;
  }

  .blueTick {
    color: var(--twitter-color);
  }

  .post_header_content h5 {
    color: gray;
  }

  .post_body {
    padding: 5px 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .body_title p {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 400;
    line-break: anywhere;
  }

  .body_image {
    margin-bottom: 10px;
  }
  .body_image img {
    border-radius: 10px;
    max-width: 100%;
  }

  .post_option > .MuiSvgIcon-root {
    font-size: 18px;
    cursor: pointer;
  }

  .post_option > .MuiSvgIcon-root:hover {
    background-color: var(--twitter-background);
  }

  .post_option {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }

  .post {
    margin: 10px 5px;
    border-radius: 10px;
    border: 1px solid rgba(189, 179, 179, 0.397);
    box-shadow: 3px 3px 7px 0px #d3cfcf6b;
  }
  @media (max-width: 991px) {
    width: auto;
    border-right: 1px solid var(--twitter-background);
    .feed_nav .MuiSvgIcon-root {
      font-size: 30px;
    }
  }
  @media (max-width: 767px) {
    .post_body {
      padding: 5px 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
`;
