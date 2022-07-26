import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Axios from "axios";

const Private = ({ component, anotherComponent, notFound }) => {
  var [isAuth, setIsAuth] = useState(true);
  var [isPending, setIsPending] = useState(false);
  var [isAdminAuth, setIsAdminAuth] = useState(true);
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
        if (res.data == "Admin Authenticated") {
          console.log(res.data);
          setIsAuth(true);
          setIsPending(false);
          setIsAdminAuth(true);
          console.log(isAuth);
        }
      });
    }
  }, [isAuth]);

  return isAuth ? (
    isPending ? (
      notFound
    ) : isAdminAuth ? (
      anotherComponent
    ) : (
      component
    )
  ) : (
    <Navigate to={location.pathname.replace("home", "login")} />
  );
};

export default Private;
