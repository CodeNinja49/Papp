import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import ProjectHeader from "../../Components/ProjectHeader/ProjectHeader";
import LoadingComponent from "../../Components/LoadingComponenet";
import { Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import CreateIcon from "@material-ui/icons/Create";
import LazyLoad from "react-lazyload";
import { useTranslation } from "react-i18next";
import { requestProjectOrCitationDetails } from "../../reducer/Project/ProjectActions";
import { showLoader, openDrawer } from "../../reducer/common/commonActions";
import ProjectItem from "./ProjectItem";
import HighlighPatentResult from "./HighlighPatentResult";
import "./ProjectDetails.scss";

const ITEM_PER_PAGE = 25;
const drawerWidth = 240;
function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const useStyles = (isFromShare, drawer) =>
  makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      backgroundColor: "#F6F7FB",
      marginLeft: -10,
      marginRight: -10,
    },
    container: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(4),
      paddingLeft: 0,
      paddingRight: 0,
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#fff",
      position: "fixed",
      zIndex: 1,
      bottom: 0,
      marginLeft: !isFromShare ? "-34px" : 0,
      padding: "10px",
      paddingRight: "40px",
      flexWrap: "wrap",
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${
          drawer ? (!isFromShare ? drawerWidth : 40) : 74
        }px)`,
      },
    },
    crimsonButton: {
      border: "1px solid #DC3027",
      borderRadius: 12,
      fontSize: 12,
      color: "#fff",
      height: 32,
      textTransform: "none",
      marginLeft: 10,
      backgroundColor: "#DC3027",
      "&:hover": {
        backgroundColor: "#DC3027",
      },
    },
  }));

export default function ProjectDetails(props) {
  const { t } = useTranslation();
  const [filter, setFilter] = React.useState("All");
  const isFromShare = props.match.path.includes("projectDetails");
  const { loading, drawer } = useSelector((state) => state.common);
  const classes = useStyles(isFromShare, drawer)();
  const disptach = useDispatch();
  const [height, setHeight] = React.useState(0);
  const [shareShow, setShareShow] = React.useState(false);
  const ref = React.useRef(null);
  const searchResult = useSelector((state) => state.project.searchResult);
  const msg_string = useSelector((state) => state.project.msg_string);
  const totalCount = useSelector((state) => state.project.totalCount);
  const selectedPatent = useSelector((state) => state.project.selectedPatent);
  const source_of_origin = useSelector(
    (state) => state.project.source_of_origin
  );

  const user = useSelector((state) => state.user.user);
  const template_completeData = useSelector(
    (state) => state.project.template_completeData
  );
  const count = totalCount ? Math.ceil(totalCount / ITEM_PER_PAGE) : 1;
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    disptach(showLoader(true));
    requestDetails(value);
    document.querySelector("#layoutMain").scrollTop = 0;
  };
  const requestDetails = (pageIndex) => {
    disptach(
      requestProjectOrCitationDetails({
        fileurl: props.match.params.fileUrl,
        pageIndex: pageIndex,
        family: 0,
      })
    );
  };
  const requestByGroping = (familyId) => {
    setPage(1);
    disptach(
      requestProjectOrCitationDetails({
        fileurl: props.match.params.fileUrl,
        pageIndex: 1,
        family: familyId,
      })
    );
  };
  useEffect(() => {
    disptach(showLoader(true));
    if (!isFromShare) {
      disptach(openDrawer(false));
    }
    requestDetails(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disptach, props.match.params.fileUrl, isFromShare]);

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setHeight(ref.current ? ref.current.clientHeight : 200);
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => window.removeEventListener("resize", debouncedHandleResize);
  });

  React.useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, [ref]);

  const closeShareModal = () => {
    setShareShow(false);
  };

  return (
    <>
      <div className="ProjectDetails">
        <ProjectHeader
          refins={ref}
          msgString={msg_string}
          selectedPatent={selectedPatent}
          requestByGroping={requestByGroping}
          totalCount={totalCount}
          setPage={setPage}
          isFromShare={props.match.path.includes("projectDetails")}
          source_of_origin={source_of_origin}
          drawer={drawer}
          filter={filter}
          setFilter={setFilter}
          t={t}
        />
        <div style={{ minHeight: height }} />
        <main className={classes.content} id="projectDetails">
          {loading ? (
            <LoadingComponent />
          ) : (
            <Container maxWidth="lg" className={classes.container}>
              <Paper style={{ padding: 10 }}>
                {searchResult.map((result, index) => {
                  const start = ITEM_PER_PAGE * (page - 1) + 1;
                  return (
                    <LazyLoad key={result.PublicationNumber} once>
                      <ProjectItem
                        classes={classes}
                        itemData={result}
                        key={result.PublicationNumber}
                        index={start + index}
                        template_completeData={template_completeData}
                        user={user}
                        selectedPatent={selectedPatent}
                        isFromShare={isFromShare}
                        page={page}
                        pageIndex={index + 1}
                        familyBy={filter === "All" ? 0 : 1}
                        queryId={props.match.params.fileUrl}
                        t={t}
                      />
                    </LazyLoad>
                  );
                })}
                {!searchResult.length ? (
                  <div className="ProjectDetails_noResult">
                    {t("NO_RESULTS")}
                  </div>
                ) : null}
              </Paper>
            </Container>
          )}
        </main>
      </div>
      {searchResult.length ? (
        <>
          <div className={classes.footer}>
            <Button
              variant="contained"
              className={classes.crimsonButton}
              startIcon={<CreateIcon />}
              onClick={() => setShareShow(true)}
            >
              {t("HIGHLIGHT_KEYWORD")}
            </Button>
            <Pagination
              count={count}
              page={page}
              variant="outlined"
              shape="rounded"
              color="primary"
              onChange={handleChange}
              style={{ marginRight: "-10px" }}
            />
          </div>
          {/* <Hidden xsDown>
            <Box style={{ position: "fixed", bottom: 40, right: 50 }}>
              
            </Box>
          </Hidden> */}
          {/* <Hidden smUp>
            <Box style={{ position: "fixed", bottom: 38, right: 40 }}>
              <Fab
                size="small"
                aria-label="add"
                className={classes.crimsonButton}
                style={{ borderRadius: "50%" }}
                onClick={() => setShareShow(true)}
              >
                <CreateIcon />
              </Fab>
            </Box>
          </Hidden> */}
        </>
      ) : null}
      {shareShow ? (
        <HighlighPatentResult
          open={shareShow}
          handleClose={closeShareModal}
          t={t}
        />
      ) : null}
    </>
  );
}
