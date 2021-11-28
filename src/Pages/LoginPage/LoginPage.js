import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Field, reduxForm } from "redux-form";
import { renderCssTextField } from "../../Components/materialUiCustom";
import logo from "../../assets/img/logo.png";
import { requestUserInfo } from "../../reducer/User/UserActions";
import Loading from "../../Components/Loading/Loading";
import "./LoginPage.scss";
import history from "../../utils/history";
import { requestLogin, setLoginRequest } from "../../reducer/Login/LoginAction";
import AlertBox from "../../Components/AlertBox";
import {
  continueMsg,
  checkUserLoggedIn,
  getLoginError,
} from "../../utils/commonUtils";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Powered by Ltd.
    </Typography>
  );
}

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
  ) {
    errors.username = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(0, "12%"),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "30%",
    alignSelf: "center",
    height: 40,
    borderRadius: 14,
    backgroundColor: "#3F4752",
    "&:hover": {
      backgroundColor: "rgb(66, 76, 91)",
    },
  },
}));

function SignInSide(props) {
  const { handleSubmit, pristine, submitting } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(true);
  const [openAlert, setAlert] = React.useState(false);
  const userInfo = useSelector((state) => state.user.user);
  const { loginError, loginRequestObj } = useSelector((state) => state.login);
  // const [loginObj, setLoginObj] = React.useState(null);
  const submit = (values, dispatch) => {
    var data = {
      email: values.username,
      password: values.password,
      continue: 0,
      app_id: 1,
    };
    dispatch(setLoginRequest(data));
    dispatch(requestLogin(data));
  };
  useEffect(() => {
    dispatch(requestUserInfo());
  }, [dispatch]);

  useEffect(() => {
    if (loginError) {
      setShowLoading(false);
      if (!checkUserLoggedIn(loginError) && loginRequestObj) {
        setAlert(true);
      }
      return;
    }
    if (userInfo.user_name) {
      history.push("/home");
    }
  }, [userInfo.user_name, loginError, loginRequestObj]);
  const handleClose = () => {
    setAlert(false);
  };
  const loginUser = () => {
    var data = {
      ...loginRequestObj,
      continue: 1,
    };
    dispatch(requestLogin(data));
  };
  return false ? (
    <Loading />
  ) : (
    <Grid container component="main" className="LoginPage">
      <CssBaseline />
      <AlertBox
        title=""
        body={continueMsg}
        btnText1="Cancel"
        btnText2="Ok"
        handleBtn1={handleClose}
        handleBtn2={loginUser}
        open={openAlert}
        handleClose={handleClose}
      />
      <Hidden xsDown>
        <Grid item xs={false} sm={4} md={6} className="LoginPage_Left">
          <div className="LoginPage_LeftGrid">
            <img src={logo} alt="logo" className="LoginPage_LeftGrid_img" />
            <span className="LoginPage_Title">
              Customized Patent Search Tool
            </span>
            <div className="LoginPage_LeftGrid_body">
              <span>
                Filter the identified citations using keywords, assigness,
                inventors, classification codes, dates, and many more.
              </span>
              <span>
                You can download PDF copies of the identified prior arts
              </span>
              <span>
                You can export bibliographic details of the identified citations
                in spreadsheet format Add comments to any patent document
              </span>
              <span>You can share results with your colleagues/clients</span>
              <span>
                You can annotate concepts & their logical variations in the
                identified citations for ease of analysis
              </span>
            </div>
          </div>
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={8} md={6} component={Paper} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4" color="black">
            Welcome
          </Typography>
          <form className={classes.form} autoComplete={false}>
            <Field
              component={renderCssTextField}
              name="username"
              label="Username"
            />
            <Field
              component={renderCssTextField}
              name="password"
              label="Password"
              type="password"
              style={{ marginBottom: "20px" }}
            />
            {/* <FormControlLabel
              className="LoginPage_checkbox"
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  color="#3F4752"
                />
              }
              label="Remember me"
            /> */}
            <p className="LoginPage_errorMsg">{getLoginError(loginError)}</p>
            <Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit(submit)}
              // disabled={pristine || submitting}
            >
              Login
            </Button>
            <Box mt={4}>
              <Typography component="h2" color="textSecondary">
                * Please check your email to find your credentials
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography
                component="h2"
                className="LoginPage_msg"
                color="black"
              >
                Didn’t got? <span className="LoginPage_emailUs">email us</span>
              </Typography>
            </Box>
            <Box mt={5} bottom={40} position="absolute" alignSelf="center">
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default reduxForm({
  form: "loginForm",
  validate,
})(SignInSide);
