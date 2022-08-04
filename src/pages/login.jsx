import React, { useState } from "react";
import Axios from "axios";
import arrowBack from "../components/assets/icons/back-arrow-icon.png";

const Login = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/users/login",
    }).then((res) => {
      console.log(res);
      if (res.data == "Basic user authenticated") {
        console.log("data successfully");
        localStorage.setItem(
          "authenticated",
          JSON.stringify({
            username: loginUsername,
            password: loginPassword,
            role: "User",
          })
        );
        window.location.replace("/home");
      } else if (res.data == "Manager authenticated") {
        localStorage.setItem(
          "authenticated",
          JSON.stringify({
            username: loginUsername,
            password: loginPassword,
            role: "Admin",
          })
        );
        window.location.replace("/home");
      }
    });
  };

  return (
    <div className="bg-white">
      <a
        href="/"
        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
      >
        <img src={arrowBack} alt="arrow_back" width="30" height="30" />
      </a>
      <section className="w-screen h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5 xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div className="flex">
                  <div className="mb-6 text-7xl">LevCoin Bank</div>
                  <div>Ltd.</div>
                </div>

                <div className="mb-6 text-3xl">sign in</div>
                {/* Email input */}
                <div className="mb-6">
                  <input
                    placeholder="username"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="text"
                    onChange={(e) => setLoginUsername(e.target.value)}
                  />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={login}
                  >
                    Login
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="/sign_up"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
