import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Home = (props) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="bg-white h-screen">
      <div className="flex">
        <div className="mb-6 text-5xl text-blue-700 mr-5">LevCoin</div>
        <div class="relative h-32 w-32 ...">
          <div class="absolute inset-x-0 top-0 h-16 ...">
            <div className="w-3/4 h-[60px] z-10 bg-zinc-200 fixed drop-shadow-lg px-8">
              <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                  <ul className="hidden md:flex text-xl">
                    {props.isManager && (
                      <li className="hover:bg-zinc-300 mt-2">Withdraws</li>
                    )}

                    <li className="hover:bg-zinc-300 mt-2 mr-10">
                      {" "}
                      <a href="#home">Home</a>
                    </li>
                    <li className="hover:bg-zinc-300 mt-2 mr-10">Withdraws</li>
                    <li className="hover:bg-zinc-300 mt-2 mr-10">
                      New Account
                    </li>
                    <li className="hover:bg-zinc-300 mt-2 mr-10">
                      Transactions
                    </li>
                    <li className="hover:bg-zinc-300 mt-2 mr-10">Transfer</li>
                    <li className="hover:bg-zinc-300 mt-2 mr-10">My loans</li>
                  </ul>
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
          <div></div>
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full"></li>
        <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full"></li>
        <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full"></li>
      </ul>

      <hr id="home" />

      <p>Home</p>
      <hr id="withdraws" />

      <p>Withdraws</p>

      <hr id="new_account" />

      <p>New account</p>

      <hr id="transactions" />

      <p>Transactions</p>

      <hr id="transfer" />

      <p>Transfer</p>

      <hr id="my_loans" />

      <p>My loans</p>
    </div>
  );
};

export default Home;
