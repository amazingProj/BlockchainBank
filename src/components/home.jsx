import React, { useState, useEffect } from "react";
import Chart from "../components/chart";
import Dollar from "../components/dollar";
import Coin from "../components/coin";
import Graph from "./graph";
import Axios from "axios";

const HomeComponent = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

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
    const monIndex = d.getMonth();
    let monNewIndex;
    let name = month[d.getMonth()];
    let index = 1;
    for (let i = 0; i < month.length; ++i) {
      monNewIndex =
        monIndex - i > 0 ? monIndex - i : monIndex - i + (month.length - 1);
      result[index++] = month[monNewIndex];
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
      result[i + 1] = `${one} ${two} ${three}`;
      now.setDate(now.getDate() - 1);
    }
    return result.reverse();
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
    return result.reverse();
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

  useEffect(() => {
    let username = localStorage.getItem("authenticated");
    console.log(username);
    let json = JSON.parse(username);
    Axios.get("http://localhost:4000/users/getUser/" + json.username).then(
      (res) => {
        setCurrentUser(res.data[0]);
        console.log(res.data);
      }
    );
  }, []);

  return (
    <div className="mb-20 mt-20">
      <div className="mt-20 p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0"></div>
        <div>
          <div className="text-3xl font-medium text-black">
            Welcome to LevCoin Bank{" "}
            {currentUser != undefined && currentUser.firstName}{" "}
            {currentUser != undefined && currentUser.lastName}
          </div>
        </div>
      </div>
      <br />
      <div>
        <div className="text-center mt-4 mb-4">
          <div className="text-3xl mb-5">
            Weekly account analytics and balance
          </div>
          <div className="mb-5 text-xl">The rightest is the current.</div>
        </div>
        <Chart
          info={data}
          month={graphTwoData}
          year={graphThreeData}
          stockFullName="Your Balance."
          stockShortName="Balance."
        />
        <br />
      </div>
    </div>
  );
};

export default HomeComponent;
