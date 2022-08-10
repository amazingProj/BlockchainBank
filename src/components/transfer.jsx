import React, { useRef } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Transfer = () => {
  const firstName = useRef();
  const lastName = useRef();
  const targetAccountID = useRef();
  const amount = useRef();

  const handleSubmit = () => {
    let firstNameVar = firstName.current.value;
    let lastNameVar = lastName.current.value;
    let targetAccountIDVar = targetAccountID.current.value;
    let amountVar = amount.current.value;

    console.log(firstNameVar, lastNameVar, targetAccountIDVar, amountVar);
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser == {}) return;

    let json = JSON.parse(loggedInUser);
    let userDetails = json.userDetails;
    let accountDetails = json.accountDetails;
    Axios({
      method: "POST",
      data: {
        srcAccountId: accountDetails._id,
        destAccountId: targetAccountIDVar,
        amount: amountVar,
      },
      withCredentials: true,
      url: "http://localhost:4000/routes/transaction/create",
    }).then((res) => {
      toast("Successfully");
    });
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Person's First Name
            </label>
            <input
              ref={firstName}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Person's Last Name
            </label>
            <input
              ref={lastName}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="-mx-3 mb-2">
          <div className="w-full md:w-3/4 px-3 mb-10 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Person's Account ID
            </label>
            <input
              ref={targetAccountID}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="32489432y48382gbdhvgdshgvehjt732"
            />
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 mt-6 md:mb-0">
            <label className="mt-6 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Amount
            </label>
            <input
              ref={amount}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              placeholder={0}
              min="0"
            />
          </div>
        </div>
        <div className="mt-6 text-center lg:text-left items-center justify-center">
          <button
            type="button"
            className="items-center justify-center inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handleSubmit}
          >
            Transfer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transfer;
