import React from "react";

export default function TrendWidget({ title, topic, tweetAmount }) {
  return (
    <div>
      <div className="trend">
        <h5>{title}</h5>
        <h3>#{topic}</h3>
        <h5>{tweetAmount} Tweets</h5>
      </div>
    </div>
  );
}
