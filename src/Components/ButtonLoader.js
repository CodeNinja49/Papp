import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { cyan } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonProgress: {
    color: cyan[500],
    position: "absolute",
    top: "50%",
    left: "50%",
  },
}));

export default function ButtonLoader({
  size,
  loading,
  children,
  customStyle,
  loaderStyle,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {children}
        {loading && (
          <div
            className={classes.buttonProgress}
            style={{
              height: size,
              width: size,
              transform: "translate(-30%, -30%)",
              ...customStyle,
            }}
          >
            <CircularProgress size={size} style={loaderStyle} />
          </div>
        )}
      </div>
    </div>
  );
}
