import React from "react";
import Grid from "@material-ui/core/Grid";
import SvgLoader from "../../utils/SvgLoader";

if (process.browser) {
  require("./toastWrapperComponent.scss");
}

const toastWrapperComponent = (props) => {
  return (
    <div className="ToastWrapper">
      <Grid container spacing={2}>
        <Grid xs={2} style={{ alignSelf: "center" }}>
          <SvgLoader xlinkHref={props.toastIcon} />
        </Grid>
        <Grid xs={10} className="ToastWrapper_ToastMessage">
          {props.toastMessage}
        </Grid>
      </Grid>
    </div>
  );
};

export default toastWrapperComponent;
