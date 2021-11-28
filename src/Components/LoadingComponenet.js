import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function LoadingComponenet() {
  return (
    <div
      style={{
        height: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="primary" size={50} />
    </div>
  );
}
