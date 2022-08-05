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

const buildData = ({ chartData }) => ({
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

const Chart = ({ info, month, year, stockFullName, stockShortName }) => {
  const data = buildData(info);
  const monthData = buildData(month);
  const yearData = buildData(year);

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
    <>
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
                {numberToFix(info.price.current, 3) + "$"}
              </span>
              <span className="block leading-5 text-sm ml-4 text-green-500">
                {`${info.price.high - info.price.low < 0 ? "▼" : "▲"} ${(
                  info.price.high - info.price.low
                ).toFixed(3)} (${(
                  (info.price.high / info.price.low) * 100 -
                  100
                ).toFixed(3)}%)`}
              </span>
            </div>
            <div className="block leading-none text-xl text-gray-800 mb-4">
              {numberToFix(info.price.current * 3, 3) + " ILS"}
            </div>
            <div className="block leading-none text-xl text-gray-800 mb-4">
              {1.13 + " LevCoin"}
            </div>
            <div className="flex w-full text-xs">
              <div className="flex w-5/12">
                <div className="flex-1 pr-3 text-left font-semibold">
                  LevCoin
                </div>
                <div className="flex-1 px-3 text-right">
                  {info.price.open.toFixed(3) + " ILS"}
                </div>
              </div>
              <div className="flex w-7/12">
                <div className="flex-1 px-3 text-left font-semibold">
                  Dollar
                </div>
                <div className="flex-1 pl-3 text-right">
                  {formatter(info.price.cap) + " ILS"}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
