import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import user from "../assets/img/user.png";
import china from "../assets/img/china.png";
import germany from "../assets/img/germany.png";
import usa from "../assets/img/usa.png";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { useTranslation } from "react-i18next";
import { requestUserInfo } from "../reducer/User/UserActions";
import { onLogoutRequest } from "../reducer/Login/LoginAction";

const drawerWidth = 240;

function SelectLanguage({ t, i18n }) {
  const imgStyle = {
    height: 40,
    marginLeft: 5,
    marginRight: 5,
    cursor: "pointer",
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Hidden xsDown>
      <div style={{ display: "flex", alignItems: "center", color: "#3F4752" }}>
        <span style={{ fontSize: 11, fontWeight: "bold", marginRight: 5 }}>
          {t("SELECT_LANGUAGE")}:
        </span>
        <img
          src={usa}
          alt="USA"
          title="USA"
          style={imgStyle}
          onClick={() => changeLanguage("eng")}
        />
        <img
          src={china}
          alt="China"
          title="China"
          style={imgStyle}
          onClick={() => changeLanguage("ch")}
        />
        <img
          src={germany}
          alt="Germany"
          title="Germany"
          style={imgStyle}
          onClick={() => changeLanguage("gr")}
        />
      </div>
      <div className="vertical_hr" />
    </Hidden>
  );
}

const useStyles = (drawer) =>
  makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    appBar: {
      backgroundColor: "#F6F7FB",
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawer ? drawerWidth : 74}px)`,
        marginLeft: drawer ? drawerWidth : 0,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    toolbarHeight: {
      height: 70,
    },
    profileDiv: {
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
    },
  }));

function Header(props) {
  const { t, i18n } = useTranslation();
  const drawer = useSelector((state) => state.common.drawer);
  const classes = useStyles(drawer)();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  useEffect(() => {
    dispatch(requestUserInfo());
  }, [dispatch]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const userInfo = useSelector((state) => state.user.user);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const logoutUser = () => {
    dispatch(onLogoutRequest());
    setOpen(false);
  };
  return (
    <AppBar position="fixed" className={classes.appBar} elevation={0}>
      <Toolbar className={classes.toolbarHeight}>
        <IconButton
          htmlColor="#3F4752"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.profileDiv}>
          <SelectLanguage i18n={i18n} t={t} />
          <div
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <img src={user} alt="user" style={{ height: 40 }} />
            <span className="Dashboard_Appbar_userDetails">
              <span style={{ fontSize: 10 }}>{t("LOGGED_INAS")}</span>
              <span style={{ fontWeight: "bold" }}>{userInfo.user_name}</span>
            </span>
            {open ? (
              <ExpandLess htmlColor="#3F4752" />
            ) : (
              <ExpandMore htmlColor="#3F4752" />
            )}
          </div>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem> */}
                      <MenuItem onClick={logoutUser}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(Header);
