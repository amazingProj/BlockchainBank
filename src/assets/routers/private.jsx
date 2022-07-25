import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Axios from "axios";

const Private = ({ component: Component, anotherComponent }) => {
  var [isAuth, setIsAuth] = useState(true);
  var [isAdminAuth, setIsAdminAuth] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!isAuth) {
      const loggedInUser = localStorage.getItem("authenticated");
      let json = JSON.parse(loggedInUser);
      Axios({
        method: "POST",
        data: json,
        withCredentials: true,
        url: "http://localhost:4000/users/login",
      }).then((res) => {
        console.log(res.data);
        if (res.data == "Successfully Authenticated") {
        }
      });
    }
  }, [isAuth]);

  return isAuth ? (
    isAdminAuth ? (
      anotherComponent
    ) : (
      Component
    )
  ) : (
    <Navigate to={location.pathname.replace("home", "login")} />
  );
};

export default Private;
