import React from "react";

const Admin = () => {
  return (
    <div>
      <div className="mb-20">
        <div className=" p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0"></div>
          <div>
            <div className="text-5xl font-medium text-black">
              Welcome to LevCoin Bank
            </div>
            <p className="text-slate-500 text-2xl">
              Hello admin, You have a new updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
