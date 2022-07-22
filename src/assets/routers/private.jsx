import React, { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ component: Component, anotherComponent }) => {
  const [isAuth, setIsAuth] = useState(true);
  const [isAdminAuth, setIsAdminAuth] = useState(false);
  const location = useLocation();
  const MINUTE_MS = 60000;

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Logs every minute");
      // api - username, password
      let res = "";
      if (res == "admin authenticated") {
        setIsAuth(true);
      } else if (res == "client authenticated") {
        setIsAuth(true);
      } else if (res == "not authenticated") {
        setIsAuth(false);
      } else if (res == "timeout") {
        setIsAuth(false);
      }
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

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
