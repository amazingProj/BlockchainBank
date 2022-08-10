import React, { useState } from "react";
import Money from "./assets/icons/money.jpg";
import Money2 from "./assets/icons/money2.jpg";
import Money3 from "./assets/icons/money3.jpg";
import "./assets/styles/mirror.css";
import arrowBack from "../components/assets/icons/back-arrow-icon.png";
import WithdrawOne from "./withdrawOne";
import WithdrawTwo from "./withdrawTwo";
import WithdrawThree from "./withdrawThree";
import Glow from "./glow";

const Withdraw = () => {
  const [oneFragment, setOneFragment] = useState(false);
  const [twoFragment, setTwoFragment] = useState(false);
  const [threeFragment, setThreeFragment] = useState(false);

  const init = () => {
    console.log("clicked");
    setOneFragment(false);
    setTwoFragment(false);
    setThreeFragment(false);
  };
  const rnd1 = Math.floor(Math.random() * 3) + 1;
  return (
    <div>
      <div>
        <br />
        <br />
        <br />

        <div
          className={
            oneFragment || twoFragment || threeFragment ? "hidden" : ""
          }
        >
          <div className="items-center justify-center h-screen rounded shadow-xl overflow-hidden w-full md:flex">
            <div className="flex w-full md:w-1/2 p-10 bg-gray-100 text-gray-600 items-center">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={Money3} alt="money" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    See Your Loan History
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <button
                    onClick={() => setOneFragment(true)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  >
                    History
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full md:w-1/2 p-10 bg-gray-100 text-gray-600 items-center">
              <div className="w-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="w-full" src={Money2} alt="money" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Request a Loan</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <button
                      onClick={() => setTwoFragment(true)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                    >
                      Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*  <div className="flex w-full md:w-1/2 p-10 bg-gray-100 text-gray-600 items-center">
              <div className="w-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img
                    id="mirror"
                    className="w-full"
                    src={Money3}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Loan to Others</div>
                    <p className="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <button
                      onClick={() => setThreeFragment(true)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Loan
                    </button>
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>

      <div className={oneFragment ? "" : "hidden"}>
        <WithdrawOne />
      </div>

      <div className={twoFragment ? "" : "hidden"}>
        <WithdrawTwo />
      </div>

      <div className={threeFragment ? "" : "hidden"}>
        <WithdrawThree />
      </div>
    </div>
  );
};

export default Withdraw;
