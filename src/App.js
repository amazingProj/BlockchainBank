import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./pages/login";
import Register from "./pages/register";
import PageNotFound from "./pages/not_found";
import ForgotPassword from "./pages/forgotPassword";
import Terms from "./pages/terms";
import Home from "./pages/home";
import fullScreen from "./assets/icons/fullscreen.png";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import exitFullScreen from "./assets/icons/exit-full-screen.png";
import { useState } from "react";

function App() {
  const handle = useFullScreenHandle();
  const [handleClicked, setHandleClicked] = useState(false);

  const clicked = () => {
    if (handleClicked) {
      handle.exit();
      setHandleClicked(false);
    } else {
      handle.enter();
      setHandleClicked(true);
    }
  };

  return (
    <div>
      <button className="mt-3 mr-1 absolute top-0 right-0 " onClick={clicked}>
        {" "}
        <img src={fullScreen} alt="full_screen" width="30" height="30" />
      </button>

      <FullScreen handle={handle} className="fullscreen-enabled full-screen">
        {handleClicked ? (
          <button
            className="mt-3 mr-1 absolute top-0 right-0 "
            onClick={clicked}
          >
            {" "}
            <img
              src={exitFullScreen}
              alt="exit_full_screen"
              width="30"
              height="30"
            />
          </button>
        ) : (
          <></>
        )}

        <BrowserRouter>
          <div>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="sign_in" element={<Register full={true} />} />
              <Route path="terms" element={<Terms />} />
              <PrivateRoute path="home" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </FullScreen>
    </div>
  );
}

export default App;
