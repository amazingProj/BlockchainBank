import React from "react";
import { useEffect, useRef, useState } from "react";
import arrowBack from "../components/assets/icons/back-arrow-icon.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BirthdayPicker from "../components/birthdayPicker";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const phone = useRef();
  const confirmedPassword = useRef();
  const message = useRef();
  const birthday = useRef();
  const [terms, setTerms] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    } else if (!terms) {
      toast.error("You must agree to our terms.", toastOptions);
      return false;
    }

    return true;
  };

  const termsClicked = () => {
    setTerms(!terms);
  };

  const createAccount = () => {
    if (!handleValidation()) return;
    let passwordVAR = password.current.value;
    console.log(passwordVAR);
    if (passwordVAR == confirmedPassword.current.value && terms) {
      let user = {};
      user["username"] = username.current.value;
      user["password"] = passwordVAR;
      user["firstName"] = firstName.current.value;
      user["lastName"] = lastName.current.value;
      user["birthday"] = birthday.current.value;
      user["phone"] = phone.current.value;
      console.log(message.current.value);
      user["email"] = email.current.value;
      user["message"] = message.current.value;

      axios.post("http://localhost:4000/users/register", user).then((res) => {
        console.log(res.data);
        if (res.data == "User created") {
          toast("Your user successfully created.");
        } else if (res.data == "User already exists") {
          toast.error("User already exists.", toastOptions);
        }
      });
    }
  };

  const navigate = useNavigate();

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
            <form className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5">
              <div className="mb-8 text-7xl">Request a new account</div>
              <div className="mb-6 text-3xl">LevCoin Bank</div>
              <div className="mb-6">
                <label
                  htmlFor="country"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Owner' first name and last name
                </label>
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
              {/* Username input */}
              <div className="mb-6">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Enter a username
                </label>
                <input
                  ref={username}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Username"
                  name="username"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Enter birthday
                </label>
                <BirthdayPicker reference={birthday} />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="country"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <input
                  ref={phone}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Phone"
                />
              </div>

              {/* Email input */}
              <div className="mb-6">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Valid email
                </label>
                <input
                  ref={email}
                  type="text"
                  name="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {/* Password input */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Enter password
                </label>
                <input
                  ref={password}
                  type="password"
                  name="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="mb-6">
                <input
                  ref={confirmedPassword}
                  type="password"
                  name="confirmPassword"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Confirm Password"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Leave a message to manager
              </label>
              <textarea
                ref={message}
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a request message..."
              ></textarea>

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
                  Send email to manager
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Register;
