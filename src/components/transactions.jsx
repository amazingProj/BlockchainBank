import React, { useState } from "react";

const Transactions = () => {
  const allTransactions = () => {
    setSize(transactionsListSize);
  };
  const transactionsList = [
    { type: "Withdraw", date: "01/07/2022", money: "-2$" },
    {
      type: "Loan",
      date: "24/6/2022",
      money: "+5$",
      perM: "0.21$",
      range: "2 years",
    },
    { type: "Transfer", date: "20/6/2022", money: "-1$" },
    { type: "Received", date: "19/6/2022", money: "1.2$" },
  ];
  var [size, setSize] = useState(5);
  const transactionsListSize = transactionsList.length;
  return (
    <div class="grid h-auto place-items-center">
      {" "}
      <div className="mt-10">
        {" "}
        <div>
          <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Latest Transactions
              </h5>
              <div
                onClick={allTransactions}
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                View all
              </div>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {transactionsList.slice(0, size).map((transaction) =>
                  transaction.type == "Withdraw" ? (
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">{transaction.type}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                            {transaction.date}
                            {"\t"}
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {transaction.money}
                        </div>
                      </div>
                    </li>
                  ) : transaction.type == "Loan" ? (
                    <div>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            {transaction.type}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {transaction.date}
                              {"\t"}
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              Every month charge {transaction.perM} for{"\n"}
                              {transaction.range}
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            {transaction.money}
                          </div>
                        </div>
                      </li>
                    </div>
                  ) : transaction.type == "Transfer" ? (
                    <div>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            {transaction.type}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                              {transaction.date}
                              {"\t"}
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            {transaction.money}
                          </div>
                        </div>
                      </li>
                    </div>
                  ) : (
                    <div>
                      {" "}
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            {transaction.type}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xl font-medium text-gray-900 truncate dark:text-white">
                              {transaction.date}
                              {"\t"}
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            {transaction.money}
                          </div>
                        </div>
                      </li>
                    </div>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
