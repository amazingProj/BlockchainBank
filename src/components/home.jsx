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

  const [accountInfo, setAccountInfo] = useState(false);

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

  const getData = (data) => {
    setAccountInfo(data);
  };

  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(true);
  };

  return (
    <div>
      {accountInfo ? (
        !editMode ? (
          <div>
            <section className="py-40 bg-gray-100  bg-opacity-50 h-screen">
              <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
                <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
                  <div className="max-w-sm mx-auto md:w-full md:mx-0">
                    <div className="inline-flex items-center space-x-4">
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        alt=""
                        src={`data:image/svg+xml;base64,${currentUser.avatarImage}`}
                      />
                      <h1 className="text-gray-600">{currentUser.username}</h1>
                    </div>
                  </div>
                </div>
                <div className="bg-white space-y-6">
                  <div className="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                    <h2 className="md:w-1/3 max-w-sm mx-auto">Account</h2>
                    <div className="md:w-2/3 max-w-sm mx-auto">
                      <label className="text-sm text-gray-400">Email</label>
                      <div className="w-full inline-flex border">
                        <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                          <svg
                            fill="none"
                            className="w-6 text-gray-400 mx-auto"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <input
                          type="email"
                          className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                          placeholder={currentUser.email}
                          disabled=""
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
                    <h2 className="md:w-1/3 mx-auto max-w-sm">Personal info</h2>
                    <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                      <div>
                        <label className="text-sm text-gray-400">
                          Full name
                        </label>
                        <div className="w-full inline-flex border">
                          <div className="w-1/12 pt-2 bg-gray-100">
                            <svg
                              fill="none"
                              className="w-6 text-gray-400 mx-auto"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                          <input
                            type="text"
                            className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                            placeholder={
                              currentUser.firstName + " " + currentUser.lastName
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">
                          Phone number
                        </label>
                        <div className="w-full inline-flex border">
                          <div className="pt-2 w-1/12 bg-gray-100">
                            <svg
                              fill="none"
                              className="w-6 text-gray-400 mx-auto"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <input
                            type="text"
                            className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                            placeholder={currentUser.phone}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
                    <h2 className="md:w-4/12 max-w-sm mx-auto">
                      Change password
                    </h2>
                    <div className="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                      <div className="w-full inline-flex border-b">
                        <div className="w-1/12 pt-2">
                          <svg
                            fill="none"
                            className="w-6 text-gray-400 mx-auto"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <input
                          type="password"
                          className="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                          placeholder="New"
                        />
                      </div>
                    </div>
                    <div className="md:w-3/12 text-center md:pl-6">
                      <button className="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right">
                        <svg
                          fill="none"
                          className="w-4 text-white mr-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        Update
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="w-full p-4 text-right text-gray-500">
                    <button className="inline-flex items-center focus:outline-none mr-4">
                      <svg
                        fill="none"
                        className="w-4 mr-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      Delete account
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div>
            <div className="relative z-0">
              <input
                type="text"
                id="floating_standard"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder={currentUser.username}
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Username
              </label>
            </div>
          </div>
        )
      ) : (
        <div class={accountInfo ? "hidden" : ""}>
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
                accountInfo={getData}
                info={data}
                month={graphTwoData}
                year={graphThreeData}
                stockFullName="Your Balance."
                stockShortName="Balance."
              />
              <br />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeComponent;
