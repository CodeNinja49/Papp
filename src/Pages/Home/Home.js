import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SearchInput from "../../Components/SearchInput";
import matchSorter from "match-sorter";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import ProjectListItem from "../../Components/ProjectList/ProjectListItem";
import LoadingComponent from "../../Components/LoadingComponenet";
import NewProject from "./NewProject";
import "./Home.scss";

const useStyles = makeStyles((theme) => ({
  crimsonButton: {
    border: "1px solid #DC3027",
    borderRadius: 12,
    fontSize: 12,
    color: "#DC3027",
    height: 40,
    textTransform: "none",
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  homeHeight: {},
}));

export default function Home() {
  const { t } = useTranslation();
  const [projectLists, setProjectLists] = useState([]);
  const [newProjectModal, openNewProjectModal] = useState(false);
  const projectList = useSelector((state) => state.project.projectList);
  const loading = useSelector((state) => state.common.listLoading);
  const classes = useStyles();
  useEffect(() => {
    setProjectLists(projectList);
  }, [projectList]);

  const filterProject = (input) => {
    const { value } = input.target;
    if (value.length > 1) {
      const filteredList = matchSorter(projectLists, value, {
        keys: [
          "project_code_name",
          (item) => item.data.map((i) => i.citation_category_name),
        ],
      });
      setProjectLists(filteredList);
    } else {
      setProjectLists(projectList);
    }
  };
  const handleClose = () => {
    openNewProjectModal(!newProjectModal);
  };

  return (
    <Grid item xs={12} md={12} className="AllProject">
      <div className="AllProject_titleSearch">
        <label className="AllProject_Title">{t("PROJECT_CODES")}</label>
        <div className="AllProject_searchInput">
          <SearchInput onChangeText={filterProject} />
        </div>
        <div style={{ marginLeft: "auto" }}>
          <Button
            variant="outlined"
            className={classes.crimsonButton}
            onClick={() => openNewProjectModal(true)}
          >
            {t("CREATENEWPROJECT_CITATIONCAT")}
          </Button>
        </div>
      </div>
      <NewProject handleClose={handleClose} open={newProjectModal} t={t} />
      {/* <Box className="AllProject_Filter">
        <label className="AllProject_Filter_label">Filter By:</label>
        <ButtonBase
          focusRipple
          className={`AllProject_Filter_button${
            filter === "All" ? " active" : ""
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </ButtonBase>
        <ButtonBase
          focusRipple
          className={`AllProject_Filter_button${
            filter === "Data" ? " active" : ""
          }`}
          onClick={() => setFilter("Data")}
        >
          Data
        </ButtonBase>
      </Box> */}
      {loading ? (
        <LoadingComponent />
      ) : !projectLists.length ? (
        <div
          style={{
            color: "#081734",
            fontSize: 25,
            fontWeight: "bold",
            opacity: "50%",
            marginTop: "10px",
          }}
        >
          {t("NO_RESULTS")}
        </div>
      ) : (
        projectLists.map((project, index) => (
          <ProjectListItem project={project} key={index} t={t} />
        ))
      )}
    </Grid>
  );
}
