import React from "react";

const Coin = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <div className="flex">
        <p>{props.value}</p>
        <p>ILS</p>
      </div>

      <div>or</div>
      <div className="flex">
        0.34
        <p>Dollars</p>
      </div>
    </div>
  );
};

export default Coin;
