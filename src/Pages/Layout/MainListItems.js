import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ButtonBase from "@material-ui/core/ButtonBase";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FolderOutlined from "@material-ui/icons/FolderOutlined";
import Collapse from "@material-ui/core/Collapse";

import { requestMakeUrl } from "../../reducer/Project/ProjectActions";
import createQueryObj from "../../utils/filterProjectAndCitation";
import SvgLoader from "../../utils/SvgLoader";

const SEARCH_PATH = "/search";
const HOME_PATH = "/home";
const UPLOAD_PATH = "/upload";
const META_FEILDS = "/metafields";

function MainListItems({ openD = true, projectList, userObj }) {
  const [open, setOpen] = React.useState(true);
  const { t } = useTranslation();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const urlPath = location.pathname;
  const { projectId } = useParams();
  const handleClick = () => {
    setOpen(!open);
  };
  const goToProject = (project) => {
    // dispatch(setFormState({ codesValue: [project] }));
    const queryObj = createQueryObj([project.project_code_id], [], userObj);
    const payload = {
      app_id: "3",
      user_id: userObj.user_id,
      factoryVariables: JSON.stringify({ codesValue: [project] }),
      family: 0,
      msg_string: `Project Code : ${project.project_code_name}`,
      query: queryObj.query_array,
      search_terms: [],
      sortBy: "pub_date",
      order: "desc",
      projectId: project.project_code_id,
    };
    dispatch(requestMakeUrl(payload));
  };
  const goToPath = (path) => {
    history.push(path);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className="MainListItems"
    >
      {userObj.login_from_garrage || userObj.user_type != "client" ? (
        <ListItem
          button
          selected={urlPath === UPLOAD_PATH}
          onClick={() => goToPath(UPLOAD_PATH)}
        >
          <ListItemIcon>
            <SvgLoader xlinkHref="#uploadPatent" className="SearchIcon" />
          </ListItemIcon>
          <ListItemText primary={t("UPLOAD_PATENTS")} />
        </ListItem>
      ) : null}
      <ListItem
        button
        selected={urlPath === SEARCH_PATH}
        onClick={() => goToPath(SEARCH_PATH)}
      >
        <ListItemIcon>
          <SvgLoader xlinkHref="#search" className="SearchIcon" />
        </ListItemIcon>
        <ListItemText primary={t("PROJECT_SEARCH")} />
      </ListItem>
      <ListItem
        button
        selected={urlPath === META_FEILDS}
        onClick={() => goToPath(META_FEILDS)}
      >
        <ListItemIcon>
          <SvgLoader xlinkHref="#metaFields" className="SearchIcon" />
        </ListItemIcon>
        <ListItemText primary={t("METADATA_FIELDS")} />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          handleClick();
          goToPath(HOME_PATH);
        }}
        selected={urlPath === HOME_PATH}
      >
        <ListItemIcon>
          <FolderOutlined htmlColor="#ffff" className="ProjectIcon" />
        </ListItemIcon>
        <ListItemText primary={t("ALL_PROJECTS")} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      {openD ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            className="MainListItems_subList"
          >
            {projectList.map((project, index) => (
              <ListItem
                className="MainListItems_ListItem MainListItems_subList_ListItem"
                onClick={() => goToProject(project)}
                key={index}
              >
                <ListItemIcon className="MainListItems_ItemIcon">
                  <span className="MainListItems_subItemIcon" />
                </ListItemIcon>
                <ButtonBase
                  focusRipple
                  className={`MainListItems_subList_button ${
                    projectId === project.project_code_id
                      ? "SubListItem_Selected"
                      : ""
                  }`}
                >
                  {project.project_code_name}
                </ButtonBase>
              </ListItem>
            ))}
          </List>
        </Collapse>
      ) : null}
    </List>
  );
}

export default React.memo(MainListItems);
