import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import ButtonBase from "@material-ui/core/ButtonBase";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import closeFolder from "../../assets/img/closeFolder.png";
import { requestMakeUrl } from "../../reducer/Project/ProjectActions";
import createQueryObj from "../../utils/filterProjectAndCitation";
import SvgLoader from "../../utils/SvgLoader";
import EditProject from "../../Pages/Home/EditProject";

const LIMIT_LIST = 5;
export default function ProjectListItem({ project, t }) {
  const dispatch = useDispatch();
  const userObj = useSelector((state) => state.user.user);
  const [newProjectModal, openNewProjectModal] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);
  const { project_code_id, project_code_name, data = [] } = project;
  const getProjectInfo = () => {
    // dispatch(setFormState({ codesValue: [project] }));
    const queryObj = createQueryObj([project_code_id], [], userObj);
    const payload = {
      app_id: "3",
      user_id: userObj.user_id,
      factoryVariables: JSON.stringify({ codesValue: [project] }),
      family: 0,
      msg_string: `Project Code : ${project_code_name}`,
      query: queryObj.query_array,
      search_terms: [],
      sortBy: "pub_date",
      order: "desc",
      projectId: project_code_id,
    };
    dispatch(requestMakeUrl(payload));
  };
  const getCitationInfo = (citation) => {
    const factoryVariables = {
      codesValue: [project],
      citationValue: [citation],
    };
    const queryObj = createQueryObj(
      [],
      [citation.citation_category_id],
      userObj
    );
    const payload = {
      app_id: "3",
      user_id: userObj.user_id,
      factoryVariables: JSON.stringify(factoryVariables),
      family: 0,
      msg_string: `Citation : ${citation.citation_category_name}`,
      query: queryObj.query_array,
      search_terms: [],
      sortBy: "pub_date",
      order: "desc",
      projectId: project_code_id,
    };
    dispatch(requestMakeUrl(payload));
  };

  const handleClose = () => {
    openNewProjectModal(!newProjectModal);
  };
  const initialValuesArray = data.reduce((newObj, data, index) => {
    newObj[`citationField${data.citation_category_id}`] =
      data.citation_category_name;
    return newObj;
  }, {});
  initialValuesArray["projectCode"] = project_code_name;
  const citationLength = data.length;
  return (
    <Paper className="ProjectPaper">
      {newProjectModal ? (
        <EditProject
          handleClose={handleClose}
          open={newProjectModal}
          project={project}
          initialValues={{
            // projectCode: project.project_code_name,
            ...initialValuesArray,
          }}
          t={t}
        />
      ) : null}

      <Grid container spacing={2} className="Projects">
        <Grid item xs className="Projects_Icon">
          <img
            src={closeFolder}
            alt="folder"
            style={{ width: 40, height: 40 }}
          />
        </Grid>
        <Grid item xs={6} className="Projects_Information">
          <div>
            <span className="Projects_Information_title">
              {t("PROJECT_CODE")}:
            </span>
            <span
              style={{
                color: "#3848CA",
                fontSize: 15,
                fontWeight: "bold",
                marginLeft: 7,
                cursor: "pointer",
              }}
              onClick={getProjectInfo}
            >
              {project.project_code_name}
            </span>
          </div>
          <span
            style={{
              marginTop: 3,
              marginBottom: 3,
            }}
            className="Projects_Information_title"
          >
            {t("CITATION_CATEGORY")}:
          </span>
          <div className="Projects_Information_citations">
            {data
              .slice(0, showMore ? citationLength : LIMIT_LIST)
              .map((citation, index) => (
                <Box marginRight={0.7} marginBottom={0.6} key={index}>
                  <Chip
                    label={citation.citation_category_name}
                    clickable
                    className="Citation_category"
                    onClick={() => getCitationInfo(citation)}
                    onDelete={() => ""}
                    deleteIcon={
                      <Avatar className="Category_count">
                        <span>{citation.patentCount}</span>
                      </Avatar>
                    }
                  />
                  {!showMore &&
                  index === LIMIT_LIST - 1 &&
                  citationLength > LIMIT_LIST ? (
                    <ButtonBase
                      onClick={() => setShowMore(true)}
                      className="Projects_Information_citations_moreHide"
                    >
                      +{citationLength - LIMIT_LIST} More
                    </ButtonBase>
                  ) : null}
                  {showMore && index === citationLength - 1 ? (
                    <ButtonBase
                      onClick={() => setShowMore(false)}
                      className="Projects_Information_citations_moreHide"
                    >
                      Hide
                    </ButtonBase>
                  ) : null}
                </Box>
              ))}
          </div>
        </Grid>
        <Grid item xs className="Projects_Patents">
          <Box display="flex" flexDirection="column">
            <span className="Projects_Patents_count">
              {project.patentCount}
            </span>
            <span className="Projects_Patents_label">{t("TOTAL_PATENTS")}</span>
          </Box>
          <Box display="flex" flexDirection="column">
            <IconButton
              aria-label="editProject"
              onClick={handleClose}
              style={{ height: 67, width: 67 }}
            >
              <SvgLoader xlinkHref="#editIcon" className="editIcon" />
            </IconButton>
            {/* <span className="Projects_Patents_count">
            {project.totalCitation}
          </span> */}
            <span className="Projects_Patents_label">{t("EDIT_PROJECT")}</span>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
