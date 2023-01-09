import React from "react";
import "./Footer.css";
import fb from "../../Assets/Vector-5.png";
import ig from "../../Assets/Vector-6.png";
import yt from "../../Assets/Vector-7.png";
import ln from "../../Assets/Vector-8.png";
import search from "../../Assets/Group-34.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <ul className="services">
          <label htmlFor="services">Services</label>
          <li>Products</li>
          <li>solutions</li>
          <li>Assurance</li>
          <li>FAQ</li>
          <li> Working at varal-singhania</li>
        </ul>
        <ul className="policies">
          <label htmlFor="policies">Policies</label>
          <li>Privacy policy</li>
          <li>Terms and condition</li>
        </ul>

        <ul className="abouts">
          <label htmlFor="abouts">About</label>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <ul className="address">
          <label htmlFor="address">Adresss</label>

          <p>
            608 one lake plaza, cluster T,al sarayt street Lake towers Dubai
            United arab Emirates
          </p>
        </ul>

        <div className="subscribe">
          <label htmlFor="subscribe">Subscribe to our newsletter </label>
          <div className="search">
            <input type="email" placeholder="Enter email  " />
            <img src={search} alt="" />
          </div>
        </div>

        <ul className="social">
          <li>
            <img src={fb} alt="" />
          </li>
          <li>
            <img src={ig} alt="" />
          </li>
          <li>
            <img src={yt} alt="" />
          </li>
          <li>
            <img src={ln} alt="" />
          </li>
        </ul>
      </div>
    
    </>
  );
}

export default Footer;
