import React, { useState, useEffect, useRef } from "react";
import Chart from "../components/chart";
import Axios from "axios";

const HomeComponent = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  const loggedInUser = localStorage.getItem("authenticated");

  let json = JSON.parse(loggedInUser);
  const currentBalance = json.accountDetails.balance;
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

  const data = {
    stockFullName: "SW Limited.",
    stockShortName: "ASX:SFW",
    dateRange: getCurrentDay(),
    price: {
      current: 2.32,
      open: 2.23,
      low: currentBalance - 5,
      high: currentBalance,
      cap: 3.14,
      ratio: 20.1,
      dividend: 1.67,
    },
    chartData: {
      labels: getAllPrevWeek(),
      data: [
        currentBalance - 5,
        currentBalance / 4,
        currentBalance / 3,
        currentBalance / 2,
        currentBalance / 6,
        currentBalance / 3.5,
        currentBalance,
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
      low: currentBalance + 0.3,
      high: currentBalance,
      cap: 3.14,
      ratio: 20.1,
      dividend: 1.67,
    },
    chartData: {
      labels: getAllPrevMonth(),
      data: [
        currentBalance + 0.3,
        currentBalance / 9,
        currentBalance / 55,
        currentBalance / 7,
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
        currentBalance - 5,
        currentBalance / 4,
        currentBalance / 3,
        currentBalance / 2,
        currentBalance / 6,
        currentBalance / 3.5,
        currentBalance,
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
      low: currentBalance + 10,
      high: currentBalance,
      cap: 3.14,
      ratio: 20.1,
      dividend: 1.67,
    },
    chartData: {
      labels: getAllPastYearForGraph(),
      data: [
        currentBalance + 10,
        currentBalance + 1.1,
        currentBalance + 1.2,
        currentBalance + 1.3,
        currentBalance + 1.4,
        currentBalance + 1.3,
        currentBalance + 1.2,
        currentBalance + 1.1,
        currentBalance + 1.2,
        currentBalance + 0.8,
        currentBalance + 0.3,
        currentBalance - 5,
        currentBalance + 5,
      ],
    },
  };

  const [accountInfo, setAccountInfo] = useState(false);

  useEffect(() => {
    let username = localStorage.getItem("authenticated");
    let json = JSON.parse(username);

    Axios.get("http://localhost:4000/users/getUser/" + json.username).then(
      (res) => {
        console.log();
        setCurrentUser(res.data[0]);
      }
    );
  }, []);

  const getData = (data) => {
    setAccountInfo(data);
  };

  const [warning, setWarning] = useState(false);
  const warningClick = () => {
    setWarning(true);
  };

  const warningCancel = () => {
    setWarning(false);
  };

  const handleDeleteAccountClick = () => {
    console.log("to-do-account-click");
    //localStorage.setItem("authenticated", {});
    window.location.replace("/login");
  };

  const email = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const phone = useRef();
  const password = useRef();

  const handleUpdate = () => {
    let newPassword = password.current.value;
  };

  var [dollar, setDollar] = useState();
  var [ILS, setILS] = useState();
  const MINUTE_MS = 60000;
  var firstTime = true;
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Logs every minute");
      Axios({
        method: "POST",
        data: {
          amount: json.accountDetails.balance,
        },
        withCredentials: true,
        url: "http://localhost:4000/routes/account/exchange",
      }).then((res) => {
        console.log(res.data);
        setDollar(res.data.USD);
        setILS(res.data.ILS);
      });
    }, MINUTE_MS);

    if (firstTime) {
      Axios({
        method: "POST",
        data: {
          amount: json.accountDetails.balance,
        },
        withCredentials: true,
        url: "http://localhost:4000/routes/account/exchange",
      }).then((res) => {
        console.log(res.data);
        setDollar(res.data.USD);
        setILS(res.data.ILS);
      });
      firstTime = false;
    }

    return () => clearInterval(interval);
  }, []);

  const handleFirstNameChanged = () => {};

  return (
    <div>
      {accountInfo ? (
        <div>
          <div className={warning ? "" : "hidden"}>
            <div
              id="popup-modal"
              tabIndex={-1}
              className="flex items-center justify-center h-screen overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
            >
              <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    onClick={warningCancel}
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="popup-modal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-6 text-center">
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete this account?
                    </h3>
                    <button
                      onClick={handleDeleteAccountClick}
                      data-modal-toggle="popup-modal"
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                    >
                      Yes, I'm sure
                    </button>
                    <button
                      onClick={warningCancel}
                      data-modal-toggle="popup-modal"
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="py-40 bg-gray-100  bg-opacity-50 h-screen">
            <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
              <div className="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
                <div className="max-w-sm mx-auto md:w-full md:mx-0">
                  <div className="inline-flex items-center space-x-4">
                    {
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        alt=""
                        src={`data:image/svg+xml;base64,${currentUser.avatarImage}`}
                      />
                    }
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
                        ref={email}
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
                        First name
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
                          onChange={handleFirstNameChanged}
                          ref={firstName}
                          type="text"
                          className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                          placeholder={currentUser.firstName}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm text-gray-400">Last name</label>
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
                          ref={lastName}
                          type="text"
                          className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                          placeholder={currentUser.lastName}
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
                          ref={phone}
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
                        ref={password}
                        type="password"
                        className="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                        placeholder="New"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/12 text-center md:pl-6">
                    <button
                      onClick={handleUpdate}
                      className="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                    >
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
                  <button
                    onClick={warningClick}
                    type="button"
                    data-modal-toggle="popup-modal"
                    className="inline-flex items-center focus:outline-none mr-4"
                  >
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
                dollar={dollar}
                ILS={ILS}
                balance={currentBalance}
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
