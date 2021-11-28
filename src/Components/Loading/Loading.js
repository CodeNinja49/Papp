import React from "react";
import loading from "./loading.svg";

if (process.browser) {
  require("./loading.scss");
}

const Loading = () => (
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
