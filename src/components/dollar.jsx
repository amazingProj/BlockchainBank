import React from "react";
import fx from "money";

const Dollar = () => {
  const oneDollarToILS = () => {
    fx.base = "USD";
    fx.rates = {
      ILS: 0.745101, // eg. 1 USD === 0.745101 EUR
      GBP: 0.64771, // etc...
      USD: 1, // always include the base rate (1:1)
    };
    const oneDollar = fx(1).from("USD").to("ILS");
    return oneDollar;
  };
  return <div>{oneDollarToILS()}</div>;
};

export default Dollar;
