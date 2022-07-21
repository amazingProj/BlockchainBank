import React from "react";
import fx from "money";

const Dollar = () => {
  const oneDollarToILS = () => {
    fx.base = "USD";
    fx.rates = {
      ILS: 3.14,
      GBP: 0.64771,
      USD: 1,
    };
    const oneDollar = fx(1).from("USD").to("ILS");
    return oneDollar;
  };
  return (
    <div>
      <h2>Dollar is </h2>
      <div className="flex">
        {oneDollarToILS()}
        <p>ILS</p>
      </div>
    </div>
  );
};

export default Dollar;
