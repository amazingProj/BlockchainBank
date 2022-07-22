import React from "react";
import fx from "money";

const Dollar = () => {
  const oneDollarToILS = () => {
    fx.base = "ILS";
    fx.rates = {
      ILS: 1,
      GBP: 2,
      USD: 3.14,
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
