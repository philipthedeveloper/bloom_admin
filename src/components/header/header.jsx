import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header id="header">
      <div className="logo_container">
        <img src="./adaptive_icon.png" id="logo" alt="bl_logo"></img>
        <h1 id="logo_text">Bloom</h1>
      </div>

      <div className="greeting">
        <p>Good evening, Maxwell</p>
      </div>

      <div className="right_section">
        <Link to="notification">
          <i className="fi fi-rr-bell"></i>
        </Link>
        <div className="profile">
          <img src="./avatar.png" id="user_profile_img" alt="profile_img" />
        </div>
      </div>
    </header>
  );
}

export default Header;
