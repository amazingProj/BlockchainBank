import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "./assets/icons/robot.gif";
import Loader from "./assets/icons/loader.gif";

export default function Welcome() {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    let json = JSON.parse(loggedInUser);
    setUserName(json.role);
  }, [userName]);

  return (
    <Container>
      {loading ? (
        <div>
          <img src={Loader} alt="" />
        </div>
      ) : (
        <div>
          <img src={Robot} alt="" />
          <h1>
            Welcome, <span>{userName}!</span>
          </h1>
          <h3>Please select a chat to Start messaging.</h3>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
