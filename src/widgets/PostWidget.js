import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  FavoriteOutlined,
  KeyboardCapslock,
  Share,
  Transform,
  VerifiedUser,
} from "@material-ui/icons";
import React from "react";

export default function PostWidget({
  displayName,
  userName,
  verified = false,
  timestamp,
  avatar,
  text,
  image,
}) {
  return (
    <div>
      <div className="post">
        <div className="post_header">
          <Avatar src={avatar} />
          <div className="post_header_info">
            <div className="post_header_details">
              <div className="post_header_content">
                <h3>
                  {displayName}
                  <span>
                    {verified ? <VerifiedUser className="blueTick" /> : null}
                  </span>
                </h3>
                <h5>{userName} </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="post_body">
          <div className="body_title">
            <p>{text}</p>
          </div>
          <div className="body_image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="post_option">
          <ChatBubbleOutline />
          <Transform />
          <FavoriteBorder />
          <KeyboardCapslock />
        </div>
      </div>
    </div>
  );
}
