import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStylesFacebook = (props) =>
  makeStyles((theme) => ({
    root: {
      position: "relative",
      height: 70,
    },
    bottom: {
      color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    top: {
      color: props.progressColor,
      animationDuration: "550ms",
      position: "absolute",
      left: 0,
    },
    circle: {
      strokeLinecap: "round",
    },
    labelStyle: {
      position: "absolute",
      left: "27%",
      top: "18%",
      fontSize: 25,
      fontWeight: "bold",
      color: props.progressColor,
    },
  }));

function CircularProgresss(props) {
  const classes = useStylesFacebook(props)();
  const { value = "" } = props;
  const count = (value + "").length === 1 ? "0" + value : value;
  return (
    <div className={classes.root}>
      <CircularProgress
        variant="static"
        disableShrink
        className={classes.bottom}
        size={70}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="static"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={70}
        thickness={4}
        {...props}
      />
      <label className={classes.labelStyle}>{count}</label>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomizedProgressBars(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgresss {...props} />
    </div>
  );
}
