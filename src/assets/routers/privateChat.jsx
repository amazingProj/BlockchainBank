import React, { useState, useEffect } from "react";
import Axios from "axios";
import Loading from "../../components/loading";
import { Navigate, useLocation } from "react-router-dom";
import Chat from "../../components/chat/chat";

function PrivateChat(props) {
  var [isAuth, setIsAuth] = useState(false);
  var [isPending, setIsPending] = useState(false);
  var [isAdminAuth, setIsAdminAuth] = useState(false);
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

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
          setIsAuth(true);
          setIsAdminAuth(false);
          setIsPending(false);
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
      <div></div>
    ) : isAdminAuth ? (
      <div>
        <Chat user={false} />
      </div>
    ) : (
      <div>
        <Chat user={true} />
      </div>
    )
  ) : (
    <Navigate to={location.pathname.replace("chat", "login")} />
  );
}

export default PrivateChat;
