import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";

const GreyCheckBox = withStyles({
  root: {
    color: "#3f4752",
    "&$checked": {
      color: "#3f4752",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default GreyCheckBox;
