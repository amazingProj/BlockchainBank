import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import PageNotFound from "./pages/not_found";
import Terms from "./pages/terms";
import HomeOne from "./pages/home_one";
import HomeTwo from "./pages/home_two";
import fullScreen from "./assets/icons/fullscreen.png";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import exitFullScreen from "./assets/icons/exit-full-screen.png";
import { useState } from "react";
import Private from "./assets/routers/private";

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
              <Route path="" element={<Navigate to="home" />} />
              <Route path="login" element={<Login />} />
              <Route path="sign_in" element={<Register full={true} />} />
              <Route path="terms" element={<Terms />} />
              <Route
                path="home"
                element={
                  <Private
                    component={<HomeOne />}
                    anotherComponent={<HomeTwo />}
                  />
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </FullScreen>
    </div>
  );
}

export default App;
