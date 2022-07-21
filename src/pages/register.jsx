import React from "react";
import { useEffect, useRef, useState } from "react";
import arrowBack from "../components/assets/icons/back-arrow-icon.png";
import axios from "axios";

const Register = (props) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmedPassword = useRef();
  const [terms, setTerms] = useState();

  const termsClicked = () => {
    setTerms(!terms);
  };

  const createAccount = () => {
    let passwordVAR = password.current.value;
    console.log(passwordVAR);
    if (passwordVAR == confirmedPassword.current.value && terms) {
      let user = {};
      user["username"] = email.current.value;
      user["password"] = passwordVAR;
      user["firstName"] = firstName.current.firstName;
      user["lastName"] = lastName.current.firstName;

      axios.post("http://localhost:4000/users/register", user).then((res) => {
        console.log(res.data);
      });
    }
  };

  return (
    <div className="bg-white">
      <a
        href="/login"
        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
      >
        <img src={arrowBack} alt="arrow_back" width="30" height="30" />
      </a>

      <section className="h-screen">
        <div className="px-6 h-full text-gray-800 ">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <form>
              <div className="mb-8 text-7xl">Create a new account</div>
              <div className="mb-6 text-3xl">LevCoin Bank</div>
              <div className="mb-6">
                <input
                  ref={firstName}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-6">
                <input
                  ref={lastName}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Last Name"
                />
              </div>
              {/* Email input */}
              <div className="mb-6">
                <input
                  ref={email}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
              </div>
              {/* Password input */}
              <div className="mb-6">
                <input
                  ref={password}
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
              </div>

              <div className="mb-6">
                <input
                  ref={confirmedPassword}
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Confirm Password"
                />
              </div>

              <div class="mb-6 flex items-center">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onClick={termsClicked}
                />
                <label
                  for="link-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <a
                    href="/terms"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
              <div className="text-center lg:text-left">
                <button
                  type="button"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={createAccount}
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
