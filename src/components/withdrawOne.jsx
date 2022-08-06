import React, { useState, useEffect } from "react";
import Glow from "./glow";
import Money from "./assets/icons/money.jpg";
import Money2 from "./assets/icons/money2.jpg";
import Money3 from "./assets/icons/money3.jpg";

const WithdrawOne = () => {
  const [loading, setLoading] = useState(false);

  const allWithdraws = () => {
    setSize(withdrawsListSize);
  };
  const withdrawsList = [
    { date: "01/07/2022", sentEmail: "asafdav@g.jct.ac.l", money: "2$" },
    { date: "01/06/2022", sentEmail: "safdav@g.jct.ac.l", money: "3$" },
    { date: "01/05/2022", sentEmail: "aafdav@g.jct.ac.l", money: "1$" },
    { date: "01/04/2022", sentEmail: "asfdav@g.jct.ac.l", money: "1$" },
    { date: "01/03/2022", sentEmail: "afdav@g.jct.ac.l", money: "2$" },
    { date: "11/02/2022", sentEmail: "dav@g.jct.ac.l", money: "1$" },
    { date: "10/02/2022", sentEmail: "asafv@jct.ac.l", money: "2.1$" },
    { date: "09/02/2022", sentEmail: "asav@g.jct.ac.l", money: "1$" },
    { date: "08/02/2022", sentEmail: "asv@l.c", money: "1.2$" },
  ];

  const rnd1 = Math.floor(Math.random() * 3) + 1;

  var [size, setSize] = useState(5);
  const withdrawsListSize = withdrawsList.length;

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  const [counter, setCounter] = useState(0);

  return (
    <div>
      {loading ? (
        <div>
          <Glow />
        </div>
      ) : (
        <div class="grid h-auto place-items-center">
          <div className="mt-10">
            <div className="text-5xl text-center mt-10 mb-2">
              Withdraws history
            </div>
            <div className="text-xl text-center mt-10 mb-10">
              Follow all withdraws
            </div>
            <div>
              <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Latest Withdraws
                  </h5>
                  <div
                    onClick={allWithdraws}
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
                    {withdrawsList.slice(0, size).map((withdraw) => (
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={
                                Math.floor(Math.random() * 3) + 1 == 1
                                  ? Money
                                  : rnd1 == 2
                                  ? Money2
                                  : Money3
                              }
                              alt="money image"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {withdraw.date}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                              {withdraw.sentEmail}
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            {withdraw.money}
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
      )}
    </div>
  );
};

export default WithdrawOne;
