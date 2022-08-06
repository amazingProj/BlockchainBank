import React from "react";
import "./assets/styles/glow.css";

function Glow() {
  return (
    <div>
      <div id="back" className=" animation-container">
        <div className="lightning-container">
          <div className="lightning white" />
          <div className="lightning red" />
        </div>
        <div className="boom-container">
          <div className="shape circle big white" />
          <div className="shape circle white" />
          <div className="shape triangle big yellow" />
          <div className="shape disc white" />
          <div className="shape triangle blue" />
        </div>
        <div className="boom-container second">
          <div className="shape circle big white" />
          <div className="shape circle white" />
          <div className="shape disc white" />
          <div className="shape triangle blue" />
        </div>
      </div>
    </div>
  );
}

export default Glow;
