import React from "react";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";

const GreyRadio = withStyles({
  root: {
    color: "#3f4752",
    "&$checked": {
      color: "#3f4752",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default GreyRadio;
