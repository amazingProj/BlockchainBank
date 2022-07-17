import React, { useState, useEffect, useRef } from "react";
import "./assets/styles/ghost.css";

const GeometriesAnimation = () => {
  return (
    <div>
      <>
        <div className="words">
          <div className="one">BOO!</div>
          <div className="two">I am Loading....</div>
        </div>
        <div className="shoe-1">
          <div className="back-1" />
          <div className="front-1" />
        </div>
        <div className="shoe-2">
          <div className="back-2" />
          <div className="front-2" />
        </div>
        <div className="shoe-3">
          <div className="back-3" />
          <div className="front-3" />
        </div>
        <div className="shoe-4">
          <div className="back-4" />
          <div className="front-4" />
        </div>
        <div className="shoe-5">
          <div className="back-5" />
          <div className="front-5" />
        </div>
        <div className="shoe-6">
          <div className="back-6" />
          <div className="front-6" />
        </div>
        <div className="ghost">
          <div className="body" />
          <div className="base-1" />
          <div className="eye-l" />
          <div className="eye-r" />
          <div className="mouth" />
          <div className="shadow" />
        </div>
      </>
    </div>
  );
};

export default GeometriesAnimation;
