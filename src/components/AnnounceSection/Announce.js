import { Search, Settings } from "@material-ui/icons";
import React from "react";
import TrendWidget from "../../widgets/TrendWidget";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";
import styled from "styled-components";

export default function Announce() {
  return (
    <AnnounceArea>
      <div className="announce">
        <div className="search">
          <Search className="search_icon" />
          <input type="text" placeholder="Search Twitter" />
        </div>
        <div className="tweet_container">
          <div className="container_title">
            <h2>Trending for you</h2>
            <Settings />
          </div>
          <TrendWidget
            title="Trending in Bangladesh"
            topic="Fiverr"
            tweetAmount="22k"
          />
          <TrendWidget title="Sports" topic="Euro2020" tweetAmount="1.75M" />{" "}
          <TrendWidget title="Technology" topic="Bitcoin" tweetAmount="215k" />
          <TrendWidget title="Politics" topic="Cuba" tweetAmount="646k" />
          <TrendWidget
            title="Trending in Bangladesh"
            topic="OnlineMarketing"
            tweetAmount="32k"
          />
        </div>
        <TwitterTweetEmbed tweetId="1412790526198181894" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="arnobmahmud"
          options={{ height: 400 }}
        />
      </div>
    </AnnounceArea>
  );
}

const AnnounceArea = styled.div`
  flex: 0.3;
  border-left: 1px solid var(--twitter-background);
  .announce {
    margin-left: 20px;
  }
  .search {
    background: #ddd;
    display: flex;
    align-items: center;
    border-radius: 50px;
    margin-top: 20px;
    padding: 12px 20px;
  }

  .search input {
    background: #ddd;
    border: none;
    outline: none;
    font-size: 18px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .search_icon {
    color: grey;
    margin-right: 5px;
  }

  .tweet_container {
    background-color: var(--twitter-background);
    margin-top: 20px;
    border-radius: 15px;
    padding: 30px;
  }

  .container_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: gray;
  }

  .container_title .MuiSvgIcon-root {
    color: gray;
  }
  .trend {
    margin-top: 10px;
    border-bottom: 1px solid gray;
  }

  .trend h5 {
    margin: 5px 0px;
    font-weight: 500;
    color: gray;
  }
  .trend h3 {
    cursor: pointer;
    color: #0a000a;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
