import React from "react";

function WithdrawThree() {
  return (
    <div>
      <div className="text-center text-3xl mb-10">
        See all of the loans requests
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
            <tr>
              <th scope="col" className="py-3 px-6 bg-blue-500">
                Full name
              </th>
              <th scope="col" className="py-3 px-6">
                Amount
              </th>
              <th scope="col" className="py-3 px-6 bg-blue-500">
                Period
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6 bg-blue-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-600 border-b border-blue-400">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap bg-blue-500 dark:text-blue-100"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6 bg-blue-500">Laptop</td>
              <td className="py-4 px-6">$2999</td>
              <td className="py-4 px-6 bg-blue-500">
                <a href="#" className="font-medium text-white hover:underline">
                  Approve
                </a>
              </td>
            </tr>
            <tr className="bg-blue-600 border-b border-blue-400">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap bg-blue-500 dark:text-blue-100"
              >
                Microsoft Surface Pro
              </th>
              <td className="py-4 px-6">White</td>
              <td className="py-4 px-6 bg-blue-500">Laptop PC</td>
              <td className="py-4 px-6">$1999</td>
              <td className="py-4 px-6 bg-blue-500">
                <a href="#" className="font-medium text-white hover:underline">
                  Approve
                </a>
              </td>
            </tr>
            <tr className="bg-blue-600 border-b border-blue-400">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap bg-blue-500 dark:text-blue-100"
              >
                Magic Mouse 2
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6 bg-blue-500">Accessories</td>
              <td className="py-4 px-6">$99</td>
              <td className="py-4 px-6 bg-blue-500">
                <a href="#" className="font-medium text-white hover:underline">
                  Approve
                </a>
              </td>
            </tr>
            <tr className="bg-blue-600 border-b border-blue-400">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap bg-blue-500 dark:text-blue-100"
              >
                Google Pixel Phone
              </th>
              <td className="py-4 px-6">Gray</td>
              <td className="py-4 px-6 bg-blue-500">Phone</td>
              <td className="py-4 px-6">$799</td>
              <td className="py-4 px-6 bg-blue-500">
                <a href="#" className="font-medium text-white hover:underline">
                  Approve
                </a>
              </td>
            </tr>
            <tr className="bg-blue-600 border-blue-40">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap bg-blue-500 dark:text-blue-100"
              >
                Apple Watch 5
              </th>
              <td className="py-4 px-6">Red</td>
              <td className="py-4 px-6 bg-blue-500">Wearables</td>
              <td className="py-4 px-6">$999</td>
              <td className="py-4 px-6 bg-blue-500">
                <a href="#" className="font-medium text-white hover:underline">
                  Approve
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WithdrawThree;
