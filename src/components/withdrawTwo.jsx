import React, { useState, useRef } from "react";
import DatePicker from "./birthdayPicker";

function WithdrawTwo() {
  const [dropdown, setDropdown] = useState(false);

  const amount = useRef();
  const duration = useRef();

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const handleSubmit = () => {};
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
            ref={amount}
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
            ref={amount}
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
          Submit
        </button>
      </div>
    </div>
  );
}

export default WithdrawTwo;
