import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "./assets/utils/APIRoutes";
import ChatContainer from "./ChatContainer";
import Contacts from "./Contacts";
import Welcome from "./Welcome";

export default function Chat(props) {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  const contactsList = [
    { _id: "dfkdshdsfh", username: "Asaf H" },
    { _id: "dfkdshgfdsfh", username: "Ariel S" },
    { _id: "dhdsfh", username: "El Kof" },
  ];

  const managerList = [
    { _id: "dfkhdsfh", username: "Asaf" },
    { _id: "dshgfdsfh", username: "Ariel" },
  ];

  const chatList = [{}];

  const validUser = {
    username: "Asaf",
    email: "asss@gmail.com",
    password: "12121212",
    isAvatarImageSet: false,
    avatarImage: "",
    _id: "62ebd5aaf41154bf6e0e9c4d",
    __v: 0,
  };

  /*useEffect(() => {
    async function fetch() {
      setCurrentUser(await JSON.parse(localStorage.getItem("some key")));
    }

    fetch();
  }, []);*/

  useEffect(() => {
    if (validUser) {
      socket.current = io(host);
      socket.current.emit("add-user", validUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    async function fetch() {
      if (validUser) {
        if (validUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${validUser._id}`);
          setContacts(data.data);
        } else {
          navigate("/setAvatar");
        }
      }
    }
    fetch();
  }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <Container>
      <div className="container">
        <Contacts
          contacts={props.user ? managerList : contacts}
          changeChat={handleChatChange}
        />
        {currentChat === undefined ? (
          <Welcome />
        ) : (
          <ChatContainer currentChat={currentChat} socket={socket} />
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
