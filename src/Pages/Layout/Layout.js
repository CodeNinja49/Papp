import React from "react";
import { useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../Components/Header";
import LeftDrawer from "../../Components/LeftDrawer";
import AlertBox from "../../Components/AlertBox";

import "./Layout.scss";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    backgroundColor: "#3F4752",
    color: "white",
  },
  appBarSpacer: theme.mixins.toolbar,
  appBar: {
    backgroundColor: "#F6F7FB",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 40px",
    flexDirection: "column",
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#3F4752",
    color: "white",
  },
  content: {
    flexGrow: 1,
    height: "100%",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
}));

function Layout(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {
    title,
    body,
    btnText1,
    btnText2,
    handleBtn1,
    handleBtn2,
    openAlert,
    handleClose,
  } = useSelector((state) => state.alert);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header handleDrawerToggle={handleDrawerToggle} />
      <LeftDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <AlertBox
        title={title}
        body={body}
        btnText1={btnText1}
        btnText2={btnText2}
        handleBtn1={handleBtn1}
        handleBtn2={handleBtn2}
        open={openAlert}
        handleClose={handleClose}
      />
      <main className={classes.content} id="layoutMain">
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {props.children}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Layout;
