import React from "react";
import { ToastContainer, Slide } from "react-toastify";
import { useSelector } from "react-redux";
import { Router } from "react-router-dom";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "react-image-lightbox/style.css";
import getRoute from "./route/route";
import history from "./utils/history";

function App() {
  const userObj = useSelector((state) => state.user.user);
  const routes = getRoute(userObj);
  return (
    <Router history={history}>
      <div className="App">
        {routes}
        <ToastContainer transition={Slide} className="Root_ToastContainer" />
      </div>
    </Router>
  );
}

export default App;
