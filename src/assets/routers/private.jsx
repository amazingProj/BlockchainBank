import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Axios from "axios";
import Loading from "../../components/loading";
import NotValidAccount from "../../pages/notValidAccount";
import HomeOne from "../../pages/home_one";
import HomeTwo from "../../pages/home_two";

const Private = () => {
  var [isAuth, setIsAuth] = useState(false);
  var [isPending, setIsPending] = useState(false);
  var [isAdminAuth, setIsAdminAuth] = useState(false);
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    console.log(isAuth);
  }, []);

  useEffect(() => {
    console.log(isAuth);
  }, [isAuth]);

  useEffect(() => {
    if (!isAuth) {
      const loggedInUser = localStorage.getItem("authenticated");
      if (loggedInUser == {}) return;

      let json = JSON.parse(loggedInUser);
      Axios({
        method: "POST",
        data: json,
        withCredentials: true,
        url: "http://localhost:4000/users/login",
      }).then((res) => {
        if (res.data == "Basic user authenticated") {
          console.log(res.data);
          setIsAuth(true);
          setIsAdminAuth(false);
          setIsPending(false);
          console.log(isAdminAuth);
        } else if (res.data == "Manager authenticated") {
          setIsAuth(true);
          setIsAdminAuth(true);
          setIsPending(false);
        } else {
          setIsAuth(true);
          setIsAdminAuth(false);
          setIsPending(true);
        }
      });
    }
  }, [isAuth]);

  return loading ? (
    <div>
      <Loading />
    </div>
  ) : isAuth ? (
    isPending ? (
      <NotValidAccount />
    ) : isAdminAuth ? (
      <HomeTwo />
    ) : (
      <HomeOne />
    )
  ) : (
    <Navigate to={location.pathname.replace("home", "login")} />
  );
};

export default Private;
