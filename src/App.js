import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import PageNotFound from "./pages/not_found";
import ForgotPassword from "./pages/forgotPassword";
import Terms from "./pages/terms";
import Home from "./pages/home";
import fullScreen from "./assets/icons/fullscreen.png";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {
  const handle = useFullScreenHandle();

  return (
    <div>
      <button
        className="mt-3 mr-1 absolute top-0 right-0 "
        onClick={handle.enter}
      >
        {" "}
        <img src={fullScreen} alt="arrow_back" width="30" height="30" />
      </button>

      <FullScreen handle={handle} className="fullscreen-enabled full-screen">
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="sign_in" element={<Register full={true} />} />
              <Route path="terms" element={<Terms />} />
              <Route path="forgot_password" element={<ForgotPassword />} />
              <Route path="home" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </FullScreen>
    </div>
  );
}

export default App;
