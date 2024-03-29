import React, { useEffect, useState } from "react";
import Image from "./assets/icons/profile.jpg";
import Image2 from "./assets/icons/profile2.jpg";
import Axios from "axios";

function UsersTable() {
  
  const tableList = [
    { name: "Assaf Hillel", age: "21", balance: "18$", email: "jsd@gmail.com" },
    {
      name: " Hillel Assaf",
      age: "21",
      balance: "18$",
      email: "djksd@gmail.com",
    },
    { name: "Ariel", age: "24", balance: "1008$", email: "js23d@gmail.com" },
    {
      name: "Elya",
      age: "29",
      balance: "1128$",
      email: "js4s32123d@gmail.com",
    },
  ];

  var count = 0;

  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="flex justify-center items-center pb-4 bg-white dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Position
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tableList.map((row) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="hidden"> {count++}</div>

                  <img
                    className="w-10 h-10 rounded-full"
                    src={count % 2 == 0 ? Image : Image2}
                    alt="image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">{row.name}</div>
                    <div className="font-normal text-gray-500">{row.email}</div>
                  </div>
                </th>
                <td className="py-4 px-6">
                  {"balance is: "} {row.balance} {" age: "} {row.age}{" "}
                </td>
                {Math.floor(Math.random() * 3) + 1 == 1 ? (
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" />{" "}
                      Online
                    </div>
                  </td>
                ) : (
                  <td class="py-4 px-6">
                    <div class="flex items-center">
                      <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                      Offline
                    </div>
                  </td>
                )}

                <td className="py-4 px-6">
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Disapprove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTable;
