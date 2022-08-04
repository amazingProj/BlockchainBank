import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const logout = () => {
    localStorage.setItem("authenticated", {});
    window.location.replace("/login");
  };

  return (
    <div className="w-full h-[60px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="flex">
        <div className="hidden md:block mb-6 text-5xl text-blue-700 mr-5">
          LevCoin
        </div>
        <div class="relative h-32 w-32 ...">
          <div class="absolute inset-x-0 top-0 h-16 ...">
            <div className="w-full h-[60px] z-10 bg-zinc-200 fixed drop-shadow-lg px-8">
              <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                  {props.isManager && (
                    <ul className="hidden md:flex text-xl">
                      <li className="hover:bg-zinc-300 mt-2 mr-10">
                        <a href="#home">Home</a>
                      </li>

                      <li className="hover:bg-zinc-300 mt-2 mr-10">
                        <a href="#accounts">Manage Accounts</a>
                      </li>
                      <li className="hover:bg-zinc-300 mt-2 mr-10">
                        <a href="#users">All Users</a>
                      </li>
                      <li className="hover:bg-zinc-300 mt-2 mr-10">
                        <a href="chat">Chat</a>
                      </li>
                      <li
                        className="hover:bg-zinc-300 mt-2 mr-10"
                        onClick={logout}
                      >
                        <a href="/login">Logout</a>
                      </li>
                    </ul>
                  )}

                  {!props.isManager && (
                    <ul className="hidden md:flex text-xl">
                      <li className="hover:bg-zinc-300 mt-2 mr-10">
                        {" "}
                        <a href="#home">Home</a>
                      </li>
                      <li className="hover:bg-zinc-300 mt-2 mr-10">
                        <a href="#withdraws">Withdraws</a>
                      </li>
                      <li className="hover:bg-zinc-300 mt-2 mr-10">
                        <a href="#new_account">New Account</a>
                      </li>
                      <li className="hover:bg-zinc-300 mt-2 mr-10">
                        <a href="#transactions">Transactions</a>
                      </li>
                      <li className="hover:bg-zinc-300 mt-2 mr-10">
                        <a href="#transfer">Transfer</a>
                      </li>
                      <li className="hover:bg-zinc-300 mt-2 mr-10">
                        <a href="#my_loans">My loans</a>
                      </li>

                      <li className="hover:bg-zinc-300 mt-2 mr-10">
                        <a href="chat">Chat</a>
                      </li>
                      <li
                        className="hover:bg-zinc-300 mt-2 mr-10"
                        onClick={logout}
                      >
                        Logout
                      </li>
                    </ul>
                  )}

                  <div className="md:hidden mr-4" onClick={handleClick}>
                    {!nav ? (
                      <MenuIcon className="w-5" />
                    ) : (
                      <XIcon className="w-5" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {props.isManager ? (
          <ul
            className={
              !nav ? "hidden" : "absolute mt-20 bg-zinc-200 w-full px-8 mb-5"
            }
          >
            <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
              <a href="#home">Home</a>
            </li>
            <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
              <a href="#accounts">Manage Accounts</a>
            </li>
            <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
              <a href="#users">All Users</a>
            </li>

            <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
              <a href="chat">Chat</a>
            </li>

            <li
              className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full"
              onClick={logout}
            >
              Logout
            </li>
          </ul>
        ) : (
          <ul
            className={
              !nav ? "hidden" : "absolute mt-20 bg-zinc-200 w-full px-8 mb-5"
            }
          >
            <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
              <a href="#home">Home</a>
            </li>
            <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
              <a href="#withdraws">Withdraws</a>
            </li>
            <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
              <a href="#new_account">New Account</a>
            </li>
            <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
              <a href="#transactions">Transactions</a>
            </li>
            <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
              <a href="#transfer">Transfer</a>
            </li>

            <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
              <a href="#my_loans">My loans</a>
            </li>

            <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
              <a href="chat">Chat</a>
            </li>

            <li
              className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full"
              onClick={logout}
            >
              Logout
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
