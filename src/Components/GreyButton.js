import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ButtonLoader from "./ButtonLoader";

const useStyles = makeStyles((theme) => ({
  greyContainedBtn: {
    borderRadius: 10,
    fontSize: 12,
    color: "#fff",
    textTransform: "none",
    height: 40,
    backgroundColor: "#3F4752",
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
    "&:hover": {
      backgroundColor: "rgba(63,71,82, 0.9)",
    },
  },
}));

export default function GreyButton(props) {
  const classes = useStyles();
  const {
    size,
    loading,
    customStyle,
    loaderStyle,
    variant = "contained",
    ...restProps
  } = props;
  return (
    <ButtonLoader
      size={size}
      loading={loading}
      customStyle={{ transform: "translate(-30%, -45%)", ...customStyle }}
      loaderStyle={loaderStyle}
    >
      <Button
        variant={variant}
        className={classes.greyContainedBtn}
        {...restProps}
      >
        {props.children}
      </Button>
    </ButtonLoader>
  );
}
