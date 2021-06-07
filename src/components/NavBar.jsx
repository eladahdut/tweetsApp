import React, { useState, useEffect } from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  NavLink,
  useLocation,
} from "react-router-dom";

export default function NavBar() {
  const [home, setHome] = useState(false);
  const [profile, setProfile] = useState(false);

  let location = useLocation();
  useEffect(() => {
    if (location.pathname.toLowerCase() === "/") {
      setHome(true);
      setProfile(false);
    } else if (location.pathname.toLowerCase() === "/profile") {
      setHome(false);
      setProfile(true);
    }
  }, [location]);

  return (
    <div className="nav-container">
      <NavLink
        className={home ? "nav-link-active" : "nav-link"}
        exact={true}
        to="/">
        Home
      </NavLink>
      <NavLink
        className={profile ? "nav-link-active" : "nav-link"}
        exact={true}
        to="/profile">
        Profile
      </NavLink>
    </div>
  );
}
