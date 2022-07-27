import React, { useState } from "react";
import Loan from "./assets/icons/loan.jpg";

const Loans = () => {
  const allLoans = () => {
    setSize(loansListSize);
  };
  const loansList = [
    {
      type: "Loan",
      date: "24/6/2022",
      money: "5$",
      perM: "0.21$",
      range: "2 years",
      total: "5.04$",
      remainsCharged: "4.83$",
    },
  ];
  var [size, setSize] = useState(5);
  const loansListSize = loansList.length;
  return (
    <div class="grid h-auto place-items-center">
      <div className="mt-10">
        <div>
          {" "}
          <div>
            <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Latest Loans
                </h5>
                <div className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  View all
                </div>
              </div>
              <div className="flow-root">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  {loansList.slice(0, size).map((loan) => (
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
                            src={Loan}
                            alt="Loan"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Every month charge {loan.perM} for{"\n"}
                            {loan.range}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            total is {loan.total} remains to charge{" "}
                            {loan.remainsCharged}
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {loan.money}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;
