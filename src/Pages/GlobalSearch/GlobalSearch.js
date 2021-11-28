import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import MultiSelect from "../../Components/MultiSelect/MultiSelect";
import { setFormState } from "../../reducer/Project/ProjectActions";
import Filter from "../Filter/Filter";

import "./GlobalSearch.scss";

export default function GlobalSearch() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [codesValue, setCodesValue] = React.useState([]);
  const [codeInputValue, setCodeInputValue] = React.useState("");
  const [citationValue, setCitationValue] = React.useState([]);
  const [citationInputValue, setCitationInputValue] = React.useState("");
  const projectList = useSelector((state) => state.project.projectList);
  const selectedProjectCitationList = codesValue.reduce(
    (citationList, codes) => {
      citationList.push(...codes.data);
      return citationList;
    },
    []
  );

  const clearField = () => {
    setCodesValue([]);
    setCitationValue([]);
  };

  React.useEffect(() => {
    dispatch(setFormState({}));
  }, [dispatch]);

  return (
    <Grid item xs={12} md={12} className="GlobalSearch">
      <div className="GlobalSearch_title">{t("PROJECT_SEARCH")}</div>
      <div className="GlobalSearch_subTitle">
        {t("SEARCH_PATENTS_THROUGHOUT_PROJECTS")}
      </div>
      <Paper>
        <Box padding={2.2}>
          <MultiSelect
            label={t("PROJECT_CODES")}
            inputValue={codeInputValue}
            setInputValue={setCodeInputValue}
            value={codesValue}
            setValue={setCodesValue}
            OPTIONS={projectList ? projectList : [{}]}
            displayLabelName="project_code_name"
            isLimittag={true}
          />
        </Box>
        <Box padding={2.2} display="flex">
          <div className="GlobalSearch_citationLeftBorder"></div>
          <MultiSelect
            label={t("CITATION_CATEGORY")}
            inputValue={citationInputValue}
            setInputValue={setCitationInputValue}
            value={citationValue}
            setValue={setCitationValue}
            disable={!codesValue.length}
            OPTIONS={
              selectedProjectCitationList ? selectedProjectCitationList : [{}]
            }
            displayLabelName="citation_category_name"
            isLimittag={true}
          />
        </Box>
      </Paper>
      <div className="GlobalSearch_message">
        <span>*</span> {t("SELECT_ANY_TO_RESTRICT_SEARCH")}
      </div>
      <Filter
        form="globalSearchFilter"
        codesValue={codesValue}
        citationValue={citationValue}
        clearProjectField={clearField}
        t={t}
      />
    </Grid>
  );
}
