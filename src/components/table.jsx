import React, { useState, useEffect } from "react";
import Axios from "axios";

function Table() {
  useEffect(() => {
    Axios.get("http://localhost:4000/users/").then((res) => {
      setTable(res.data);
      console.log(res.data + "-----------------");
    });
  }, []);
  const [table, setTable] = useState([]);
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
  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name of user
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">
                  Date of birth
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 w-3 h-3"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">
                  Email
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 w-3 h-3"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">
                  Balance
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 w-3 h-3"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Approve</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {table.map((row) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {row.firstName} {row.lastName}
                </th>
                <td className="py-4 px-6">{row.birthday}</td>
                <td className="py-4 px-6">{row.email}</td>
                <td className="py-4 px-6">{row.phone}</td>
                <td className="py-4 px-6 text-right"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
