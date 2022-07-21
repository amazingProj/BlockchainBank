import React from "react";
import Chart from "../components/chart";
import Dollar from "../components/dollar";
import Coin from "../components/coin";

const HomeComponent = () => {
  const name = "Assaf Hillel";
  const data = {
    stockFullName: "SW Limited.",
    stockShortName: "ASX:SFW",
    price: {
      current: 2.32,
      open: 2.23,
      low: 2.215,
      high: 2.325,
      cap: 93765011,
      ratio: 20.1,
      dividend: 1.67,
    },
    chartData: {
      labels: [
        "10:00",
        "",
        "",
        "",
        "12:00",
        "",
        "",
        "",
        "2:00",
        "",
        "",
        "",
        "4:00",
      ],
      data: [
        2.23, 2.215, 2.22, 2.25, 2.245, 2.27, 2.28, 2.29, 2.3, 2.29, 2.325,
        2.325, 2.32,
      ],
    },
  };
  return (
    <div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0"></div>
        <div>
          <div className="text-xl font-medium text-black">
            Welcome to LevCoin Bank
          </div>
          <p className="text-slate-500">{name}, You have a new updates!</p>
        </div>
      </div>
      <p>Your balance 15 LevCoins</p>
      <p>equals to 0.97 dollars and 3.02 ILS</p>
      <p>LevCoin worth raised up since yesterday in 0.001 % </p>
      <Chart
        info={data}
        stockFullName="Your Balance."
        stockShortName="Balance."
      />
      <Coin info={data} name="Lev Coin" value="1.2212" />
      <Dollar />
      <Chart info={data} />
    </div>
  );
};

export default HomeComponent;
