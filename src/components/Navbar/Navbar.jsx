import React from "react";
import "./Navbar.css";
import logo from "../../Assets/Group-114.png";
import menu from "../../Assets/menu.png"


function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu"><img src={menu} alt="" /></div>
      <div className="nav-ul">
        <li>Home</li>
        <li>Service</li>
        <li>Pricing</li>
        <li>About Us</li>
        <button>Start a company</button>
      </div>
    </div>
  );
}

export default Navbar;
