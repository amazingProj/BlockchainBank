import React, { useState, useRef, useEffect } from "react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
import { host } from "../components/chat/assets/utils/APIRoutes";
import NotificationBadge, { Effect } from "react-notification-badge";
import Axios from "axios";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const socket = useRef();
  var [notification, setNotification] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    socket.current = io(host);
  }, []);

  const [dialogClick, setDialogClick] = useState(false);

  const handleDialogClick = () => {
    setDialogClick(true);
  };

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    let username = localStorage.getItem("authenticated");
    let json = JSON.parse(username);

    Axios.get("http://localhost:4000/users/getUser/" + json.username).then(
      (res) => {
        setCurrentUser(res.data[0]);
        console.log(res.data[0]);
        console.log(currentUser);
        socket.current.emit("notify-user", res.data[0]._id);
      }
    );
  }, []);

  useEffect(() => {
    /*if (socket.current) {
      socket.current.on("zero", (userDetails) => {
        console.log(userDetails);
        setNotification((prev) => [...prev, userDetails]);
      });
    }*/
    const loggedInUser = localStorage.getItem("authenticated");

    let json = JSON.parse(loggedInUser);
    let notifications = json.notify;
    console.log(notifications);
    /*if (notification) {
      if (notifications.length > 0) {
        setNotification([...notifications]);
        console.log(notification);
      }
    }*/

    // console.log(notification);
  }, []);

  const handleClick = () => setNav(!nav);

  const logout = () => {
    localStorage.setItem("authenticated", {});
    window.location.replace("/login");
  };

  const handleClickNotify = (notify) => {
    console.log(notify);
    localStorage.setItem("notify", notify);
  };
  return (
    <div>
      <div className="w-full h-[60px] z-10 bg-zinc-200 fixed drop-shadow-lg">
        <div className="flex">
          <div className="hidden md:block mb-6 text-5xl text-blue-700 mr-5">
            LevCoin
          </div>
          <div class="relative h-32 w-32 ...">
            <div class="absolute inset-x-0 top-0 h-16 ...">
              <div className="w-full h-[60px] z-10 bg-zinc-200 fixed drop-shadow-lg px-8">
                <div className="px-2 flex justify-between items-center w-full h-full">
                  <div className="flex items-center">
                    {props.isManager && (
                      <ul className="hidden md:flex text-xl">
                        <li className="hover:bg-zinc-300 mt-2 mr-5">
                          <a href="#home">Home</a>
                        </li>

                        <Menu>
                          <MenuButton p={1}>
                            <li className="hover:bg-zinc-300">
                              <div className="mr-2">
                                {console.log(notification.length)}
                                <NotificationBadge
                                  count={notification.length}
                                  effect={Effect.SCALE}
                                />
                                <BellIcon
                                  className="mr-5 ml-5"
                                  width={30}
                                  height={30}
                                />
                              </div>
                            </li>
                          </MenuButton>
                          <MenuList pl={2}>
                            {
                              <div>
                                <div className={" mr-4 mt-text-sm"}>
                                  {notification.length > 0 ? "" : ""}

                                  <ul>
                                    {notification.map((notify) =>
                                      true ? (
                                        <MenuItem>
                                          {" "}
                                          <a href="#new">
                                            <li
                                              onClick={handleClickNotify(
                                                notify
                                              )}
                                            >
                                              {notify.firstName}{" "}
                                              {notify.lastName}{" "}
                                              {"request a new account"}
                                            </li>
                                          </a>
                                        </MenuItem>
                                      ) : (
                                        <li></li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            }
                          </MenuList>
                        </Menu>

                        <li className="hover:bg-zinc-300 mt-2 mr-10">
                          <a href="#users">All Users</a>
                        </li>
                        <li className="hover:bg-zinc-300 mt-2 mr-10">
                          <a href="chat">Chat</a>
                        </li>
                        <li
                          className="hover:bg-zinc-300 mt-2 mr-10"
                          onClick={logout}
                        >
                          <a href="/login">Logout</a>
                        </li>
                      </ul>
                    )}

                    {!props.isManager && (
                      <ul className="hidden md:flex text-xl">
                        <li className="hover:bg-zinc-300 mt-2 mr-5">
                          {" "}
                          <a href="#home">Home</a>
                        </li>

                        {/* <Menu>
                          <MenuButton p={1}>
                            <li className="hover:bg-zinc-300">
                              <div className="mr-2">
                                {console.log(notification.length)}
                                <NotificationBadge
                                  count={notification.length}
                                  effect={Effect.SCALE}
                                />
                                <BellIcon
                                  className="mr-5 ml-5"
                                  width={30}
                                  height={30}
                                />
                              </div>
                            </li>
                          </MenuButton>
                          <MenuList pl={2}>
                            {
                              <div>
                                <div className={" mr-4 mt-text-sm"}>
                                  {notification.length > 0 ? "" : ""}

                                  <ul>
                                    {notification.map((notify) =>
                                      true ? (
                                        <MenuItem>
                                          {" "}
                                          <a href="#new">
                                            <li></li>
                                          </a>
                                        </MenuItem>
                                      ) : (
                                        <li></li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            }
                          </MenuList>
                        </Menu>*/}

                        <li className="hover:bg-zinc-300 ml-3 mt-2 mr-10">
                          <a href="#loan">Loans</a>
                        </li>
                        <li className="hover:bg-zinc-300 mt-2 mr-10">
                          <a href="#transfer">Transfer</a>
                        </li>

                        <li className="hover:bg-zinc-300 mt-2 mr-10">
                          <a href="chat">Chat</a>
                        </li>
                        <li
                          className="hover:bg-zinc-300 mt-2 mr-10"
                          onClick={logout}
                        >
                          Logout
                        </li>
                      </ul>
                    )}

                    <div
                      className="text-left md:hidden mr-4"
                      onClick={handleClick}
                    >
                      {!nav ? (
                        <MenuIcon className="w-5" />
                      ) : (
                        <XIcon className="w-5" />
                      )}
                    </div>

                    <div>
                      <div className={visible ? " mr-4 mt-text-sm" : "hidden"}>
                        {notification.length > 0 ? "" : ""}
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <ul>
                          {notification.map((notify) =>
                            true ? (
                              <a href="#new">
                                <li>Approve user </li>
                              </a>
                            ) : (
                              <li></li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {props.isManager ? (
            <ul
              className={
                !nav ? "hidden" : "absolute mt-20 bg-zinc-200 w-full px-8 mb-5"
              }
            >
              <a href="#home">
                <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
                  Home
                </li>
              </a>

              <a href="#accounts">
                <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
                  Account requests
                </li>
              </a>
              <a href="#loans">
                <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
                  Loan
                </li>
              </a>

              <a href="chat">
                <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
                  Chat
                </li>
              </a>

              <li
                className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full"
                onClick={logout}
              >
                Logout
              </li>
            </ul>
          ) : (
            <ul
              className={
                !nav ? "hidden" : "absolute mt-20 bg-zinc-200 w-full px-8 mb-5"
              }
            >
              <a href="#home">
                <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
                  Home
                </li>
              </a>

              <a href="#loan">
                <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
                  Loan
                </li>
              </a>
              <a href="#transfer">
                <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
                  Transfer
                </li>
              </a>

              <a href="chat">
                <li className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full">
                  Chat
                </li>
              </a>

              <li
                className="hover:bg-zinc-300 border-b-2 border-zinc-300 w-full"
                onClick={logout}
              >
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
