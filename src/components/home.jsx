import React from "react";
import Chart from "../components/chart";
import Dollar from "../components/dollar";
import Coin from "../components/coin";
import Graph from "./graph";

const HomeComponent = () => {
  const name = "Assaf Hillel";

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  }

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const getAllPastYearForGraph = () => {
    let result = [];
    const d = new Date();
    let monIndex = d.getMonth();
    let name = month[d.getMonth()];
    let index = 0;
    for (let i = month.length; i > 0; --i) {
      monIndex = Math.abs(monIndex - i);
      result[index] = month[monIndex];
      ++index;
    }
    return result;
  };

  const getCurrentDay = () => {
    let result = "valid up to date:\t";
    result += formatDate(new Date());
    return result;
  };

  const getAllPrevWeek = () => {
    let result = [];
    let Week = 7;
    let now = new Date();
    let one, two, three;
    let tempArray;
    for (let i = 0; i < Week; ++i) {
      tempArray = now.toDateString().split(" ").slice(0, 3);
      one = tempArray[0];
      two = tempArray[1];
      three = tempArray[2];
      result[i] = `${one} ${two} ${three}`;
      now.setDate(now.getDate() - 1);
    }
    return result;
  };

  const getAllPrevMonth = () => {
    let result = [];
    let Month = 30;
    let now = new Date();
    let two, three;
    let tempArray;
    for (let i = 0; i < Month; ++i) {
      if (i % 5 === 0) {
        tempArray = now.toDateString().split(" ").slice(0, 3);
        two = tempArray[1];
        three = tempArray[2];
        result[i] = `${three} in ${two}`;
      } else {
        result[i] = "";
      }
      now.setDate(now.getDate() - 1);
    }
    return result;
  };

  console.log(getAllPrevWeek());

  const currentBalance = 2.23;
  const data = {
    stockFullName: "SW Limited.",
    stockShortName: "ASX:SFW",
    dateRange: getCurrentDay(),
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
      labels: getAllPrevWeek(),
      data: [
        currentBalance,
        2.215,
        2.22,
        2.25,
        2.245,
        2.27,
        2.28,
        2.29,
        2.3,
        2.29,
        2.325,
        2.325,
        2.32,
      ],
    },
  };

  const graphTwoData = {
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
      labels: getAllPrevMonth(),
      data: [
        currentBalance,
        2.215,
        2.22,
        2.25,
        2.245,
        2.27,
        2.28,
        2.29,
        2.3,
        2.29,
        2.325,
        2.325,
        2.32,
        3.1,
        4.1,
        1.1,
        2.2,
        2.3,
        2.4,
        2.2,
        2.3,
        2.4,
        3.1,
        4.1,
        1.1,
        2.2,
        2.245,
        2.27,
        2.28,
        2.29,
        2.3,
        2.29,
        2.325,
        2.325,
      ],
    },
  };

  const graphThreeData = {
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
      labels: getAllPastYearForGraph(),
      data: [
        currentBalance,
        2.215,
        2.22,
        2.25,
        2.245,
        2.27,
        2.28,
        2.29,
        2.3,
        2.29,
        2.325,
        2.325,
        2.32,
      ],
    },
  };
  return (
    <div className="mb-60 mt-20">
      <div className="text-center text-5xl font-medium text-black mt-2 mb-4">
        😎😁🤑🤮LevCoin Bank👽👾🤖👻
      </div>
      <div className="mt-60 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0"></div>
        <div>
          <div className="text-xl font-medium text-black">
            Welcome to LevCoin Bank
          </div>
          <p className="text-slate-500">{name}, You have a new updates!</p>
        </div>
      </div>
      <br />
      <div>
        <div className="text-center mt-4 mb-4">
          <div className="text-3xl">Weekly account analytics and balance</div>
          <div className="text-xl">The most left is current day.</div>
        </div>
        <Chart
          info={data}
          stockFullName="Your Balance."
          stockShortName="Balance."
        />
        <br />
        <div className="mt-10 mb-20">
          <div className="text-center mt-4 mb-4">
            <div className="text-3xl">Monthly account analytics</div>
            <div className="text-xl">The most left is current date.</div>
          </div>

          <Graph info={graphTwoData} />
        </div>

        <div className="mt-5 mb-5">
          <div className="text-center mt-4 mb-4">
            <div className="text-3xl">Annually account analytics</div>
            <div className="text-xl">The most left is current month.</div>
          </div>

          <Graph info={graphThreeData} />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
