import React, { useState, useEffect } from 'react';
import { apiConst } from './api.const';
import './App.css';
import Loader from './components/Loader';
import NewTweetForm from './components/tweetForm/NewTweetForm';
import TweetsList from './components/TweetsList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALOzVflm5L05T0rb7QF-8wsRreGU01bTE",
  authDomain: "tweetster-942f0.firebaseapp.com",
  projectId: "tweetster-942f0",
  storageBucket: "tweetster-942f0.appspot.com",
  messagingSenderId: "1094511508214",
  appId: "1:1094511508214:web:8270cbbd8bc49ebe300ad7"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const [ userName, setUser ] = useState("Elad");
  const [ tweets, setTweets ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

useEffect(() => {
  const unsubscribe =  firebase.firestore()
  .collection("tweets")
  .orderBy('date', 'desc')
  .onSnapshot((snap) => {
    const tweets = snap.docs.map(doc => ({
      ...doc.data(), id: doc.id
    }))
    setTweets(tweets)
  })
  return () => unsubscribe();
},[])

  async function onSubmitTweet(tweetText) {
    await firebase.firestore()
    .collection('tweets')
    .add(tweetText)
  }
  function upadteUsername(newUserName) {
    setUser(newUserName);
  }

  return (
    <div className="container">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <><NewTweetForm userName={userName} onSubmitTweet={onSubmitTweet} /><TweetsList tweets={tweets} /></>} />
          <Route path="/profile" render={() => <Profile upadteUsername={upadteUsername} />} />
        </Switch>
      </Router>
      {
        isLoading ? <Loader /> : <></>
      }
    </div>
  );
}

export default App;
