import React from "react";
import "./Service.css";
import play from "../../Assets/Group-117.png";
import first from "../../Assets/dungeon.png";
import second from "../../Assets/Vector-1.png";
import third from "../../Assets/Vector-2.png";

import scard from "../../Assets/first.png";
import scard2 from "../../Assets/second.png";

function Service() {
  return (
    <div className="service">
      <div className="heading">
        Watch the video about UAE or Offshore Company Registration
        <img src={play} alt="" />
      </div>

      <article>
        <div className="a-title">
          <u>Dedicated</u>
          <br />
          to our mission we are
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio
          recusandae ipsum adipisci. Vel dolorem corporis velit! Eligendi,
        </p>
      </article>
      <div className="cards">
        <div className="card">
          <img src={first} alt="" />

          <div className="c-title">UAE Free Zone Company</div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          </p>
          <a href="#">Get Started</a>
        </div>
        <div className="card">
          <img src={second} alt="" />

          <div className="c-title">Dubai Local Companies</div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          </p>
          <a href="#">Get Started</a>
        </div>
        <div className="card">
          <img src={third} alt="" />

          <div className="c-title">Offshore Companies</div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          </p>
          <a href="#">Get Started</a>
        </div>
      </div>




      <div className="service-container">
        <div className="service-quotes">
          Learn the ways in which you can be benefit Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ab, ut?
          <h5>Claim a free quote</h5>
        </div>
        <div className="service-card card1">
          <img src={scard} alt="" />
          <div className="desc">
            <div className="service-title">Advice & Guidance</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              vitae totam cupiditate architecto aliquid expedita maiores,
              tempore excepturi, molestiae, ipsam autem hic distinctio
              dignissimos labore provident quisquam ex et mollitia.
            </p>
            <span>Learn More</span>
          </div>
        </div>
        <div className="service-card card2">
          <img src={scard2} alt="" />
          <div className="desc">
            <div className="service-title">Bank account and setup</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              vitae totam cupiditate architecto aliquid expedita maiores,
              tempore excepturi, molestiae, ipsam autem hic distinctio
              dignissimos labore provident quisquam ex et mollitia.
            </p>
            <span>Learn More</span>
          </div>
        </div>
        <div className="service-card desktop card3">
          <img src={scard2} alt="" />
          <div className="desc">
            <div className="service-title">Bank account and setup</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              vitae totam cupiditate architecto aliquid expedita maiores,
              tempore excepturi, molestiae, ipsam autem hic distinctio
              dignissimos labore provident quisquam ex et mollitia.
            </p>
            <span>Learn More</span>
          </div>
        </div>
        <div className="service-card desktop card4">
          <img src={scard2} alt="" />
          <div className="desc">
            <div className="service-title">Bank account and setup</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              vitae totam cupiditate architecto aliquid expedita maiores,
              tempore excepturi, molestiae, ipsam autem hic distinctio
              dignissimos labore provident quisquam ex et mollitia.
            </p>
            <span>Learn More</span>
          </div>
        </div>
        <div className="service-quotes que2 ">
          Learn the ways in which you can be benefit Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ab, ut?
          <h5>Claim a free quote</h5>
        </div>
      </div>
    </div>
  );
}

export default Service;
