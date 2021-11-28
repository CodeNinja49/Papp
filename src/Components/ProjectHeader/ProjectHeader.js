import React from "react";
import { useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Switch from "@material-ui/core/Switch";
import filterIcon from "../../assets/img/filter.png";
import sort from "../../assets/img/sort.png";
import exportIcon from "../../assets/img/export.png";
import share from "../../assets/img/share.png";
import RefineSearch from "../../Pages/ProjectDetails/RefineSearch";
import ExportPatents from "../../Pages/ProjectDetails/ExportPatent";
import SharePatents from "../../Pages/ProjectDetails/SharePatents";
import SortBy from "../../Pages/ProjectDetails/SortBy";
import { useLocation } from "react-router-dom";
import {
  requestSortBy,
  requestPatentExport,
  initPatentShare,
  patentShareSuccess,
  showExportLoading,
} from "../../reducer/Project/ProjectActions";
import { showLoader } from "../../reducer/common/commonActions";
const drawerWidth = 240;
const buttonWidth = 145;

const useStyles = (props) =>
  makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    appBar: {
      backgroundColor: "#fff",
      marginTop: !props.isFromShare ? 70 : 0,
      zIndex: 1,
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${
          props.drawer ? (!props.isFromShare ? drawerWidth : 0) : 74
        }px)`,
        marginLeft: props.drawer ? (!props.isFromShare ? drawerWidth : 0) : 0,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    crimsonButton: {
      border: "1px solid #DC3027",
      borderRadius: 12,
      fontSize: 12,
      color: "#DC3027",
      width: buttonWidth,
      height: 40,
      textTransform: "none",
      marginBottom: 10,
      marginLeft: 10,
      marginTop: 10,
    },
    greyButton: {
      border: "1px solid #3F4752",
      borderRadius: 12,
      fontSize: 12,
      color: "#3F4752",
      width: buttonWidth,
      height: 40,
      textTransform: "none",
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
    },
    greyContainedBtn: {
      borderRadius: 12,
      fontSize: 12,
      color: "#fff",
      textTransform: "none",
      width: buttonWidth,
      height: 40,
      backgroundColor: "#3F4752",
      marginLeft: 10,
      marginBottom: 10,
      marginTop: 10,
      "&:hover": {
        backgroundColor: "rgba(63,71,82, 0.9)",
      },
    },
    buttonBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      marginLeft: "auto",
      flexWrap: "wrap",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "flex-start",
      },
    },
  }));

function ProjectHeader(props) {
  const { source_of_origin, setPage, filter, setFilter, t } = props;
  const [open, setOpen] = React.useState(false);
  const [exportShow, setExportShow] = React.useState(false);
  const [shareShow, setShareShow] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sortBy, setSortBy] = React.useState("pub_date");
  const location = useLocation();
  const classes = useStyles(props)(props);
  const dispatch = useDispatch();

  const groupFamily = (e) => {
    const { requestByGroping } = props;
    setFilter(e.target.checked ? "Data" : "All");
    const id = filter === "All" ? 0 : 1;
    dispatch(showLoader(true));
    requestByGroping(id);
  };
  const handleExport = () => {
    setExportShow(true);
  };

  const handleShare = () => {
    dispatch(patentShareSuccess(""));
    setShareShow(true);
  };

  const closeExport = () => {
    setExportShow(false);
  };

  const closeShareModal = () => {
    setShareShow(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const closeModalAction = () => {
    setOpen(false);
    setPage(1);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setAnchorEl1(null);
  };
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick1 = (event, value) => {
    setAnchorEl1(event.currentTarget);
    setSortBy(value);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const searchByAsc = () => {
    const urlPath = location.pathname ? location.pathname.split("/") : [];
    const payload = {
      searchfileUrl: "",
      query_id: urlPath[2],
      sortParameter: sortBy,
      order: "asc",
      family: filter === "All" ? 0 : 1,
    };
    dispatch(showLoader(true));
    dispatch(requestSortBy(payload));
    handleClose1();
    closeMenu();
    setPage(1);
  };
  const searchByDesc = () => {
    const urlPath = location.pathname ? location.pathname.split("/") : [];
    const payload = {
      searchfileUrl: "",
      query_id: urlPath[2],
      sortParameter: sortBy,
      order: "desc",
      family: filter === "All" ? 0 : 1,
    };
    dispatch(showLoader(true));
    dispatch(requestSortBy(payload));
    handleClose1();
    closeMenu();
    setPage(1);
  };

  const downloadExport = (exportType, method, range, column) => {
    const urlPath = location.pathname ? location.pathname.split("/") : [];
    const payload = {
      family: "0",
      app_id: "2",
      export_type: exportType,
      searchfileUrl: "",
      query_id: urlPath[2],
      export_method: method,
      selected_patents: props.selectedPatent.join(","),
      from: range.from ? range.from : 0,
      to: range.to ? range.to : 0,
      columns: column.join(","),
    };
    dispatch(showExportLoading(true));
    dispatch(requestPatentExport(payload));
  };

  const sharePatent = (exportType, range) => {
    const urlPath = location.pathname ? location.pathname.split("/") : [];
    const payload = {
      family: "0",
      app_id: "2",
      search_url: "",
      query_id: urlPath[2],
      sortBy: sortBy,
      order: "desc",
      from: "share",
      selectedPatents: props.selectedPatent.join(","),
      sharecase: exportType,
      share_to: range.to ? range.to : 0,
      share_from: range.from ? range.from : 0,
      sharecomments: "",
    };
    dispatch(initPatentShare(payload));
  };
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      elevation={0}
      ref={props.refins}
    >
      <Toolbar className={classes.toolbarHeight}>
        <Grid container spacing={2} className="ProjectsHeader">
          <Grid item xs={12} md className="ProjectsHeader_Icon">
            <div className="ProjectsHeader_title" title={props.msgString}>
              {props.msgString.length > 22
                ? props.msgString.substring(0, 24) + "..."
                : props.msgString}
            </div>
            <div className="AllProject_Filter" style={{ marginBottom: "4px" }}>
              <Switch
                size="small"
                checked={filter === "Data"}
                onChange={groupFamily}
              />
            </div>
            {props.totalCount ? (
              <div className="ProjectsHeader_count">
                <label className="AllProject_Filter_label">
                  {props.totalCount}{" "}
                  {filter === "Data" ? t("FAMILES") : t("results")}
                </label>
              </div>
            ) : null}
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            className="ProjectsHeader_rightContainer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className={classes.buttonBox}>
              {source_of_origin !== "patent_upload" &&
              source_of_origin !== "share" ? (
                <Button
                  variant="outlined"
                  className={classes.crimsonButton}
                  startIcon={
                    <img src={filterIcon} alt="filter" style={{ height: 16 }} />
                  }
                  onClick={handleOpen}
                >
                  {t("REFINE_SEARCH")}
                </Button>
              ) : null}
              <Button
                variant="outlined"
                className={classes.greyButton}
                startIcon={<img src={sort} alt="sort" style={{ height: 16 }} />}
                onClick={handleClick}
              >
                {t("SORT_BY")}
              </Button>
              {anchorEl ? (
                <SortBy
                  closeMenu={closeMenu}
                  anchorEl={anchorEl}
                  anchorEl1={anchorEl1}
                  handleClick1={handleClick1}
                  handleClose1={handleClose1}
                  searchByAsc={searchByAsc}
                  searchByDesc={searchByDesc}
                  t={t}
                />
              ) : null}
              <Button
                variant="contained"
                className={classes.greyContainedBtn}
                startIcon={
                  <img src={exportIcon} alt="sort" style={{ height: 16 }} />
                }
                onClick={handleExport}
              >
                {t("EXPORT")}
              </Button>
              {!props.isFromShare ? (
                <Button
                  variant="outlined"
                  className={classes.greyButton}
                  startIcon={
                    <img src={share} alt="sort" style={{ height: 16 }} />
                  }
                  onClick={handleShare}
                >
                  {t("SHARE")}
                </Button>
              ) : null}
            </div>
          </Grid>
        </Grid>
      </Toolbar>
      {open ? (
        <RefineSearch
          open={open}
          handleClose={handleClose}
          closeModalAction={closeModalAction}
          t={t}
        />
      ) : null}
      {exportShow ? (
        <ExportPatents
          open={exportShow}
          handleClose={closeExport}
          handleSubmit={downloadExport}
          selectedPatent={props.selectedPatent}
          t={t}
        />
      ) : null}
      {shareShow ? (
        <SharePatents
          open={shareShow}
          handleClose={closeShareModal}
          handleSubmit={sharePatent}
          selectedPatent={props.selectedPatent}
          t={t}
        />
      ) : null}
    </AppBar>
  );
}

export default React.memo(ProjectHeader);
