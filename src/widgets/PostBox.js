import { React, useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import {
  CalendarTodayOutlined,
  EmojiEmotionsOutlined,
  GifOutlined,
  PhotoLibrary,
  PollOutlined,
} from "@material-ui/icons";
import db from "../auth/firebase";
import firebase from "firebase";
import { useStateValue } from "../provider/StateProvider";

export default function PostBox() {
  const [{ user }, dispatch] = useStateValue();
  const [tweet, setTweet] = useState([]);
  const [tweetImage, setTweetImage] = useState([]);

  const tweetPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: user.displayName,
      userName: user.displayName,
      verified: true,
      text: tweet,
      image: tweetImage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      avatar: user.photoURL,
    });
    setTweet("");
    setTweetImage("");
  };
  return (
    <div>
      <div className="post_container">
        <div className="top_option">
          <Avatar src={user.photoURL} />
          <form>
            <input
              type="text"
              onChange={(e) => setTweet(e.target.value)}
              value={tweet}
              placeholder={`What's happening, ${user.displayName}?`}
            />{" "}
          </form>
        </div>
        <form className="imagePost">
          <input
            type="text"
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
            placeholder="Paste a link of image here!"
          />
        </form>
        <div className="more_option">
          <div className="more_options_icons">
            <PhotoLibrary className="more_option_icons" />
            <GifOutlined className="more_option_icons" />
            <PollOutlined className="more_option_icons" />
            <EmojiEmotionsOutlined className="more_option_icons" />
            <CalendarTodayOutlined className="more_option_icons" />
          </div>
          <Button
            type="submit"
            onClick={tweetPost}
            variant="outlined"
            className="tweet-btn"
          >
            Tweet
          </Button>
        </div>
      </div>
    </div>
  );
}
