import { useEffect } from "react";
import TweetItem from "./tweetItem/TweetItem";
import "../App.css";

const TweetsList = (props) => {
  useEffect(() => {}, [props.tweets]);

  return (
    <div className="container">
      {props.tweets.map((tweet, index) => {
        return <TweetItem tweet={tweet} key={index} />;
      })}
    </div>
  );
};
export default TweetsList;
