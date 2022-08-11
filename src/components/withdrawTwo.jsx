import React, { useState, useRef, useEffect } from "react";
import DatePicker from "./birthdayPicker";
import Axios from "axios";

function WithdrawTwo() {
  const [dropdown, setDropdown] = useState(false);
  var LevCoinToILS = "2.21";
  var LevCoinToDollar = "0.89";

  useEffect(() => {}, []);
  const amount = useRef();
  const duration = useRef();
  const dollar = useRef();
  const ILS = useRef();

  const handleDataChanged = () => {
    let json = {};
    json["amount"] = amount.current.value;
    Axios({
      method: "POST",
      data: {
        amount: amount.current.value,
      },
      withCredentials: true,
      url: "http://localhost:4000/routes/account/exchange",
    }).then((res) => {
      console.log(res.data);
      dollar.current.value = res.data.USD;
      ILS.current.value = res.data.ILS;
    });
  };

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const handleSubmit = () => {
    let loanAmount = Number(amount.current.value);
    console.log(typeof loanAmount);
    let loanDuration = duration.current.value;
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser == {}) return;

    let json = JSON.parse(loggedInUser);

    let userDetails = json.userDetails;
    let accountDetails = json.accountDetails;
    console.log(userDetails);
    console.log(accountDetails);
    console.log(loanAmount);
    console.log(loanDuration);

    Axios({
      method: "POST",
      data: {
        srcAccountId: accountDetails._id,
        destAccountId: "",
        amount: loanAmount,
        duration: loanDuration,
      },
      withCredentials: true,
      url: "http://localhost:4000/routes/loan/create",
    }).then((res) => {});
  };
  return (
    <div>
      <div className="text-3xl mt-2 mb-6 text-center">Request a Loan</div>

      <div className="flex items-center justify-center mt-10">
        <div class="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Specify amount in Lev Coin
          </label>

          <input
            min="1"
            ref={amount}
            type="number"
            id="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1"
            required
            onChange={() => handleDataChanged()}
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <div class="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Amount in Dollars
          </label>

          <input
            readOnly
            min="1"
            ref={dollar}
            type="number"
            id="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1"
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <div class="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Amount in ILS
          </label>

          <input
            readonly
            min="1"
            ref={ILS}
            type="number"
            id="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1"
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-3">
        <div class="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Duration in Months
          </label>

          <input
            min="1"
            max="12"
            ref={duration}
            type="number"
            id="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1"
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <button
          onClick={handleSubmit}
          type="submit"
          className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Make request
        </button>
      </div>
    </div>
  );
}

export default WithdrawTwo;
