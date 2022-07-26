import React from "react";
import "./assets/styles/loading.css";

const Loading = () => {
  return (
    <div class="grid h-screen place-items-center">
      <div>
        <div className="spinner">
          Loading
          <div className="spinner-sector spinner-sector-red" />
          <div className="spinner-sector spinner-sector-blue" />
          <div className="spinner-sector spinner-sector-green" />
        </div>
        <br />
        <br />
        <div className="spinner-2">Loading</div>
      </div>
    </div>
  );
};

export default Loading;
