import { Search, Settings } from "@material-ui/icons";
import React from "react";
import TrendWidget from "../../widgets/TrendWidget";
import "./Announce.css";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";

export default function Announce() {
  return (
    <div>
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
          <TrendWidget title="Sports" topic="Euro2020" tweetAmount="1.75M" />
          <TrendWidget
            title="Trending in Bangladesh"
            topic="Fiverr"
            tweetAmount="22k"
          />
          <TrendWidget
            title="Trending in Bangladesh"
            topic="Fiverr"
            tweetAmount="22k"
          />
        </div>
        <TwitterTweetEmbed tweetId="1412790526198181894" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="arnobmahmud"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}
