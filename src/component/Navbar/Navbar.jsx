import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <div className="right-content">
        <div className="website">
          <img src="./public/website.png" alt="" width={32} height={32} />
          <select className="language">
            <option value="English">English</option>
            <option value="English">Tamil</option>
            <option value="English">French</option>
            <option value="English">Spanish</option>
          </select>
        </div>
        <button className="button">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
