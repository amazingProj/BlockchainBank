import React from "react";
import Chart from "../components/chart";
import Dollar from "../components/dollar";
import Coin from "../components/coin";
import Graph from "./graph";

const HomeComponent = () => {
  const name = "Assaf Hillel";
  const data = {
    stockFullName: "SW Limited.",
    stockShortName: "ASX:SFW",
    dateRange: "Aug 2nd 4:10pm AEST",
    price: {
      current: 2.32,
      open: 2.23,
      low: 2.215,
      high: 2.325,
      cap: 3.14,
      ratio: 20.1,
      dividend: 1.67,
    },
    chartData: {
      labels: [
        "21/7",
        "",
        "",
        "",
        "25/7",
        "",
        "",
        "",
        "28/7",
        "",
        "",
        "",
        "4/8",
      ],
      data: [
        2.23, 2.215, 2.22, 2.25, 2.245, 2.27, 2.28, 2.29, 2.3, 2.29, 2.325,
        2.325, 2.32,
      ],
    },
  };
  return (
    <div class="grid h-screen place-items-center">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0"></div>
        <div>
          <div className="text-xl font-medium text-black">
            Welcome to LevCoin Bank
          </div>
          <p className="text-slate-500">{name}, You have a new updates!</p>
        </div>
      </div>
      <div>
        <Chart
          info={data}
          stockFullName="Your Balance."
          stockShortName="Balance."
        />
        <br />
        <br />
        <br />
        <br />
        <Graph info={data} />
      </div>
    </div>
  );
};

export default HomeComponent;
