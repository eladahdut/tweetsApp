import { useState } from "react";
import { apiConst } from "../../api.const";
import "../tweetForm/TweetForm.css";

function NewTweetForm(props) {
  const [usersTweet, setTweet] = useState("");
  const [tweetsArr, setArr] = useState([]);

  const handleTweet = (value) => {
    setTweet(value);
  };

  const handleArr = async (e) => {
    e.preventDefault();
    const tweet = {
      content: usersTweet,
      userName: props.userName,
      date: new Date().toISOString(),
    };
    try {
      const response = await fetch(apiConst.apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tweet),
      });
      props.onSubmitTweet(tweet);
      setTweet("");
      //   throw new Error("messege blabla");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="parentDiv">
        <form onSubmit={(e) => handleArr(e)}>
          <textarea
            autoFocus={true}
            value={usersTweet}
            onChange={(event) => handleTweet(event.target.value)}
            maxLength="140"
            placeholder="What you have in mind..."
            cols="90"
            rows="6.5"></textarea>
          <button
            className="tweetBtn"
            disabled={usersTweet.length === 140 || usersTweet.length === 0}>
            Tweet
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewTweetForm;
