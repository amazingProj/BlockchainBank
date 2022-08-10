import React, { useState, useEffect } from "react";
import Axios from "axios";

function WithdrawThree() {
  const [table, setTable] = useState([]);

  const MINUTE_MS = 60000;
  var firstTime = true;

  const handleAccept = (row) => {
    console.log(row);
  };

  useEffect(() => {
    Axios.get("http://localhost:4000/routes/loan/getAll").then((res) => {
      console.log(res.data + "-----------------");
      setTable(res.data);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Logs every minute");
      Axios.get("http://localhost:4000/routes/loan/getAll").then((res) => {
        console.log(res.data + "-----------------");
        setTable(res.data);
      });
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

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
                Destination account
              </th>
              <th scope="col" className="py-3 px-6">
                Recipient account
              </th>
              <th scope="col" className="py-3 px-6 bg-blue-500">
                Duration
              </th>
              <th scope="col" className="py-3 px-6">
                Amount
              </th>
              <th scope="col" className="py-3 px-6 bg-blue-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {table.map((row) => (
              <tr className="bg-blue-600 border-b border-blue-400">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-blue-50 whitespace-nowrap bg-blue-500 dark:text-blue-100"
                >
                  {"ID: "} {row.srcAccountId}
                </th>
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6 bg-blue-500">
                  {row.duration}
                  {" Months"}
                </td>
                <td className="py-4 px-6">
                  {" "}
                  {row.amount} {" Lev Coin"}
                </td>
                <td
                  className="py-4 px-6 bg-blue-500"
                  onClick={() => handleAccept(row)}
                >
                  <div className="font-medium text-white hover:underline">
                    Approve
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WithdrawThree;
