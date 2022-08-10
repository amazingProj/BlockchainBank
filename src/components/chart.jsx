import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

import React, { useState, useRef } from "react";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);
const formatter = (number) =>
  number > 999999 ? (number / 1000000).toFixed(1) + "M" : number;

const buildData = ({ chartData, balance }) => ({
  labels: chartData.labels,
  datasets: [
    {
      label: "",
      data: chartData.data,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderColor: "rgba(255, 255, 255, 1)",
      pointBackgroundColor: "rgba(255, 255, 255, 1)",
      fill: "start",
      tension: 0.4,
    },
  ],
});

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    yAxes: {
      ticks: {
        color: "rgba(255, 255, 255, 1)",
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },

    xAxes: {
      ticks: {
        color: "rgba(255, 255, 255, 1)",
      },
      grid: {
        circular: true,
        borderColor: "rgba(255, 255, 255, .2)",
        color: "rgba(255, 255, 255, .2)",
        borderDash: [5, 5],
      },
    },
  },
  layout: {
    padding: {
      right: 10,
    },
  },
};

const numberToFix = (number, fix) => (number || 0).toFixed(fix);

const Chart = ({
  info,
  accountInfo,
  month,
  year,
  stockFullName,
  stockShortName,
  balance,
  dollar,
  ILS,
}) => {
  const data = buildData(info);
  const monthData = buildData(month);
  const yearData = buildData(year);

  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden(true);
    accountInfo(true);
  };

  const [radio, setRadio] = useState(0);

  const handleChangeWeek = (e) => {
    setRadio(0);
  };

  const handleChangeMonth = (e) => {
    setRadio(1);
  };

  const handleChangeYear = (e) => {
    setRadio(2);
  };

  const weekRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  return (
    <div className={hidden ? "hidden" : ""}>
      <div className="rounded shadow-xl overflow-hidden w-full md:flex">
        <div className="flex w-full md:w-1/2 px-5 pb-4 pt-8 bg-indigo-500 text-white items-center">
          {radio == 0 ? (
            <Line type="line" data={data} options={options} />
          ) : radio == 1 ? (
            <Line type="line" data={monthData} options={options} />
          ) : (
            <Line type="line" data={yearData} options={options} />
          )}
        </div>
        <div className="flex w-full md:w-1/2 p-10 bg-gray-100 text-gray-600 items-center">
          <div className="w-full">
            <h3 className="text-lg font-semibold leading-tight text-gray-800">
              {!stockFullName ? info.stockFullName : stockFullName}
            </h3>
            <h6 className="text-sm leading-tight mb-2">
              <span>
                {!stockShortName ? info.stockShortName : stockShortName}
              </span>
              &nbsp;&nbsp;-&nbsp;&nbsp;{info.dateRange}
            </h6>
            <div className="flex w-full items-end mb-2">
              <span className="block leading-none text-3xl text-gray-800">
                {numberToFix(balance, 3) + " Lev Coin"}
              </span>

              {radio == 0 ? (
                <span
                  className={
                    info.price.high - info.price.low < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  <span className="block leading-5 text-sm ml-4 ">
                    {`${info.price.high - info.price.low < 0 ? "▼" : "▲"} ${(
                      info.price.high - info.price.low
                    ).toFixed(3)} (${(
                      (info.price.high / info.price.low) * 100 -
                      100
                    ).toFixed(3)}%)`}
                  </span>
                </span>
              ) : radio == 1 ? (
                <span
                  className={
                    month.price.high - month.price.low < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  <span className="block leading-5 text-sm ml-4 ">
                    {`${month.price.high - month.price.low < 0 ? "▼" : "▲"} ${(
                      month.price.high - month.price.low
                    ).toFixed(3)} (${(
                      (month.price.high / month.price.low) * 100 -
                      100
                    ).toFixed(3)}%)`}
                  </span>
                </span>
              ) : (
                <span
                  className={
                    year.price.high - year.price.low < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }
                >
                  <span className="block leading-5 text-sm ml-4 ">
                    {`${year.price.high - year.price.low < 0 ? "▼" : "▲"} ${(
                      year.price.high - year.price.low
                    ).toFixed(3)} (${(
                      (year.price.high / year.price.low) * 100 -
                      100
                    ).toFixed(3)}%)`}
                  </span>
                </span>
              )}
            </div>
            <div className="block leading-none text-xl text-gray-800 mb-2">
              {numberToFix(ILS, 3) + " ILS"}
            </div>
            <div className="block leading-none text-xl text-gray-800 mb-4">
              {numberToFix(dollar, 3) + " Dollars"}
            </div>
            <div className="flex w-full text-xs">
              <div className="flex w-5/12">
                <div className="flex-1 pr-3 text-left font-semibold">
                  LevCoin
                </div>
                <div className="flex-1 px-3 text-right">
                  {numberToFix(ILS / balance, 3) + " ILS"}
                </div>
              </div>
              <div className="flex w-7/12">
                <div className="flex-1 px-3 text-left font-semibold">
                  Dollar
                </div>
                <div className="flex-1 pl-3 text-right">
                  {numberToFix(ILS / dollar, 3) + " ILS"}
                </div>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="flex items-center mr-4">
                <input
                  ref={weekRef}
                  id="week"
                  type="radio"
                  defaultValue={true}
                  name="inline-radio-group"
                  onChange={handleChangeWeek}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="week"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Weekly
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  ref={monthRef}
                  id="month"
                  type="radio"
                  defaultValue={false}
                  onChange={handleChangeMonth}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="month"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Monthly
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  ref={yearRef}
                  defaultChecked={false}
                  onChange={handleChangeYear}
                  id="year"
                  type="radio"
                  defaultValue=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="year"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Annually
                </label>
              </div>
            </div>
            <button
              onClick={handleClick}
              class="mt-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Account info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
