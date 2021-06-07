import React from "react";
import "../tweetItem/TweetItem.css";

const TweetItem = (props) => {
  return (
    <div className="tweetItem">
      <div className="topOfItem">
        <div>{props.tweet.userName}</div>
        <div>tweeted at: {props.tweet.date}</div>
      </div>
      <div>{props.tweet.content}</div>
    </div>
  );
};

export default TweetItem;
