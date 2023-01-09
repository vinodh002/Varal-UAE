import React from "react";
import "./About.css";
import blog from "../../Assets/Vector-4.png";
import user from "../../Assets/Vector-3.png";

function About() {
  return (
    <div className="about">
      <div className="blogs">
        <div className="blog-title">
          Read about our blogs for Offshoreinformation on our process
        </div>
        <div className="blog-detail">
          <img src={blog} alt="" />
          <div className="blog-section">
            <div className="que">How to start a company formation in dubai</div>
            <span>5 minutes</span>
          </div>
        </div>
        <div className="blog-detail">
          <img src={blog} alt="" />
          <div className="blog-section">
            <div className="que">How to start a company formation in dubai</div>
            <span>5 minutes</span>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="tm-title">
          Read about our blogs for Offshoreinformation on our process
        </div>
        <div className="tm-detail">
          <img src={user} alt="" />
          <div className="tmd">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicin temporibus
              dolores delectus voluptatum aliquid fugiat eligendi doloremque.
            </p>
            <span>Muhib Abrar</span>
          </div>
        </div>

        <div className="tm-detail">
          <img src={user} alt="" />
          <div className="tmd">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicin temporibus
              dolores delectus voluptatum aliquid fugiat eligendi doloremque.
            </p>
            <span>Muhib Abrar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
