import React from "react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const Admin = () => {
  const loggedInUser = localStorage.getItem("authenticated");
  let json = JSON.parse(loggedInUser);
  const userDetails = json.userDetails;
  let accountDetails = json.accountDetails;
  console.log("account", accountDetails);
  return (
    <div>
      <div className="mb-20">
        <div className=" p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0"></div>
          <div>
            <div className="text-5xl font-medium text-black">
              Welcome to LevCoin Bank
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-slate-500 text-2xl">
            Hello {userDetails.username},
          </p>

          <div className="text-center text-slate-500 text-2xl">
            You received new updates, please check your notifications!
            {/* <BellIcon
              className="mr-5 ml-5 text-center"
              width={30}
              height={30}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
