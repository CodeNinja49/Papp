import React, { useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import MainListItems from "../Pages/Layout/MainListItems";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/img/logo.png";
import hands from "../assets/img/hands.png";
import { requestProjectsList } from "../reducer/Project/ProjectActions";
import { showListLoader, openDrawer } from "../reducer/common/commonActions";
import { fetchPreviousMetadata } from "../reducer/Metadata/MetaDataActions";

const drawerWidth = 240;

function Copyright({ openD = true }) {
  return (
    <div className="Dashboard_Queries">
      <img src={hands} alt="help" />
      {openD ? (
        <span className="Dashboard_Queries_span">
          <span>Queries? Write us</span>
          <span style={{ fontWeight: "bold", fontSize: 12 }}>
            pApp@ltd.com
          </span>
        </span>
      ) : null}
    </div>
  );
}

const useStyles = (openD) =>
  makeStyles((theme) => ({
    drawer: {
      [theme.breakpoints.up("md")]: {
        width: openD ? drawerWidth : theme.spacing(7),
        flexShrink: 0,
      },
      backgroundColor: "#3F4752",
      color: "white",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
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
    drawerTitle: {
      width: 140,
      display: "flex",
      maxHeight: "20px",
      justifyContent: "flex-end",
      flexDirection: "column",
      textAlign: "left"
    },
    drawerPaper: {
      // width: drawerWidth,
      // position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: "#3F4752",
      color: "white",
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    },
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
      backgroundColor: "#F6F7FB",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  }));

function LeftDrawer(props) {
  const { window, mobileOpen, handleDrawerToggle } = props;
  const openD = useSelector((state) => state.common.drawer);
  const projectList = useSelector((state) => state.project.projectList);
  const userObj = useSelector((state) => state.user.user);
  const classes = useStyles(openD)();
  const dispatch = useDispatch();
  const container =
    window !== undefined ? () => window().document.body : undefined;
  useEffect(() => {
    dispatch(showListLoader(true));
    dispatch(requestProjectsList());
    dispatch(fetchPreviousMetadata());
  }, [dispatch]);

  const setDrawer = () => {
    dispatch(openDrawer(!openD));
  };
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={"left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: clsx(
              classes.drawerPaper,
              !mobileOpen && classes.drawerPaperClose
            ),
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <div className={classes.toolbarIcon} style={{ marginTop: "24px" }}>
            {/* <img src={logo} alt="Papp" style={{ width: "50%" }} />
            <span className="Drawer_spanText">Powered by Ltd</span> */}
          </div>
          <div className="Drawer_blankSpace" />
          <MainListItems projectList={projectList} userObj={userObj} />
          <Copyright />
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: clsx(
              classes.drawerPaper,
              !openD && classes.drawerPaperClose
            ),
          }}
          variant="permanent"
          open={openD}
        >
          <div className="Drawer_image">
            <MenuIcon
              style={{
                fontSize: "2rem",
                fill: "white",
                alignSelf: "center",
                cursor: "pointer",
                minHeight: "64px",
              }}
              onClick={setDrawer}
            />
            {openD ? (
              <div className={classes.drawerTitle}>
                {/* <img src={logo} alt="Papp" style={{ width: "50%" }} />
                <span className="Drawer_spanText">Powered by Ltd.</span> */}
                <span>
                  Papp
                </span>
              </div>
            ) : null}
          </div>
          <div className="Drawer_blankSpace" />
          <MainListItems
            openD={openD}
            projectList={projectList}
            userObj={userObj}
          />
          <Copyright openD={openD} />
        </Drawer>
      </Hidden>
    </nav>
  );
}

export default React.memo(LeftDrawer);
