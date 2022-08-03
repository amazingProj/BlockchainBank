import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "./assets/icons/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  
  return (
    <div>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </div>
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
