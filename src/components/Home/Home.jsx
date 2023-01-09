import React from "react";
import "./Home.css";
import homeBg from "../../Assets/ILLUSTRATION.png"

function Home() {
  return (
    <div className="home">
      <input
        type="search"
        className="search-bar"
        placeholder="serach a term | Topic"
      />

      <span className="quote">Claim a Free Quote</span>
      <div className="title">
        <u>Get started</u> on fulfilling your dubai or uae dream
      </div>
      <img src={homeBg} alt="home" className="home-img" />
      <span className="info">Uae & offshore company</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tempore
        recusandae totam autem asperiorta natus ducimus impedit dicta.
      </p>
      <div className="btns">
        <button>Start a company</button>
        <button>Renew a company</button>
      </div>
    </div>
  );
}

export default Home;
