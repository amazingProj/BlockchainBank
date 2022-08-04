import React from "react";
import LandingPage from "./landingPage";
import { Navigate } from "react-router-dom";

function ValidPage() {
  return (
    <div>
      {localStorage.getItem("authenticated") == {} ? (
        <LandingPage />
      ) : JSON.parse(localStorage.getItem("authenticated")).username ===
        undefined ? (
        <LandingPage />
      ) : (
        <Navigate to="home" />
      )}
    </div>
  );
}

export default ValidPage;
