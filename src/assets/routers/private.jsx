import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ component: Component }) => {
  const auth = true;
  const location = useLocation();
  return auth ? (
    Component
  ) : (
    <Navigate to={location.pathname.replace("home", "login")} />
  );
};

export default Private;
