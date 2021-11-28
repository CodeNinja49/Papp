import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Field, reduxForm, change } from "redux-form";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Close from "@material-ui/icons/Close";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { renderMultiSelectAutoComplete } from "../../Components/materialUiCustom";
import KeywordsPanel from "./KeywordPanel";
import ClassificationPanel from "./ClassificationPanel";
import DatesPanel from "./DatesPanel";
import NamesPanel from "./NamesPanel";
import NumbersPanel from "./NumbersPanel";
import MetaDataPanel from "./MetaDataPanel";
import {
  createFilterDataset,
  createDateFilterDataset,
  createSearchPayload,
} from "../../utils/commonUtils";
import { requestMakeUrl } from "../../reducer/Project/ProjectActions";
import ButtonLoader from "../../Components/ButtonLoader";
import "./Filter.scss";
import { countryList } from "../../utils/countryList";
import defaultTheme from "../../Components/theme";
import { toastError } from "../../reducer/toast/toastActions";

const allOption = { title: "All" };
//keywords field name
const OPERATOR_FIELD_KEYWORD = "operatorFieldKeyword";
const FILTERSELECT_FIELD_KEYWORD = "filterSelectFieldKeyword";
const INPUT_CHIP_FIELD_KEYWORD = "inputKeywords";

// classification field name
const OPERATOR_FIELD_CLASSIFICATION = "operatorFieldClassification";
const FILTERSELECT_FIELD_CLASSIFICATION = "filterSelectFieldClassification";
const INPUT_CHIP_FIELD_CLASSIFICATION = "inputClassifiactions";

// Dates field name
const OPERATOR_FIELD_DATE = "operatorDateField";
const FILTERSELECT_FIELD_DATE = "filterSelectDateField";
const START_DATE = "startDateField";
const END_DATE = "endDateField";

//Names field name
const OPERATOR_FIELD_Name = "operatorFieldName";
const FILTERSELECT_FIELD_Name = "filterSelectFieldName";
const INPUT_CHIP_FIELD_Name = "inputNamez";

//Number field name
const OPERATOR_FIELD_NUMBER = "operatorFieldNumber";
const FILTERSELECT_FIELD_NUMBER = "filterSelectFieldNumber";
const INPUT_CHIP_FIELD_NUMBER = "inputNumber";

//Metadata field name
const OPERATOR_FIELD_METADATA = "operatorFieldMetadata";
const FILTERSELECT_FIELD_METADATA = "filterSelectFieldMetadata";
const INPUT_CHIP_FIELD_METADATA = "inputMetadata";

const useStyles = makeStyles((theme) => ({
  crimsonButton: {
    border: "1px solid #DC3027",
    borderRadius: 12,
    fontSize: 12,
    color: "#DC3027",
    width: 133,
    height: 40,
    textTransform: "none",
    marginLeft: 10,
    marginTop: 10,
  },
  greyButton: {
    border: "1px solid #3F4752",
    borderRadius: 8,
    fontSize: 12,
    color: "#3F4752",
    height: 35,
    textTransform: "none",
    marginLeft: 10,
    marginTop: 11.5,
  },
  greyContainedBtn: {
    borderRadius: 8,
    fontSize: 12,
    color: "#fff",
    textTransform: "none",
    height: 35,
    backgroundColor: "#3F4752",
    marginLeft: 10,
    marginTop: 10,
    "&:hover": {
      backgroundColor: "rgba(63,71,82, 0.9)",
    },
  },
}));
const required = (value) => {
  const arr = Array.isArray(value) ? value : [value];
  return arr.length ? undefined : "Required";
};

const MaterialUiForm = (props) => {
  const {
    handleSubmit,
    reset,
    form: formName,
    codesValue = [],
    citationValue = [],
    clearProjectField,
    handleClose,
    submitting,
    refineValues = null,
    t,
  } = props;
  const [resetFlag, setResetFlag] = React.useState("");
  const classes = useStyles();
  const dispatchAction = useDispatch();
  const userObj = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.project.loading);
  const projectDataset = codesValue.map((code) => {
    return { id: code.project_code_id, label: code.project_code_name };
  });
  const citationDataset = citationValue.map((code) => {
    return {
      id: code.citation_category_id,
      label: code.citation_category_name,
    };
  });
  const { previousMetaData } = useSelector((state) => state.metaData);
  const defaultMetaValue = previousMetaData ? previousMetaData[0] : {};

  React.useEffect(() => {
    if (refineValues) {
      Object.keys(refineValues).forEach((key) => {
        dispatchAction(change("refineSearchForm", key, refineValues[key]));
      });
    }
  }, [dispatchAction, refineValues]);

  const searchPatent = (values, dispatch) => {
    const countryValue = values.country.filter((c) => c.title === "All");
    const countryDataset = countryValue.length
      ? countryList.map((c) => c.title)
      : values.country.map((c) => c.title);
    const {
      result: keywordDataset,
      dataSetRowCount: keywordRows,
    } = createFilterDataset(
      values,
      FILTERSELECT_FIELD_KEYWORD,
      OPERATOR_FIELD_KEYWORD,
      INPUT_CHIP_FIELD_KEYWORD
    );
    const {
      result: classificationDataset,
      dataSetRowCount: classificationRow,
    } = createFilterDataset(
      values,
      FILTERSELECT_FIELD_CLASSIFICATION,
      OPERATOR_FIELD_CLASSIFICATION,
      INPUT_CHIP_FIELD_CLASSIFICATION
    );
    const {
      result: namesDataset,
      dataSetRowCount: namesRow,
    } = createFilterDataset(
      values,
      FILTERSELECT_FIELD_Name,
      OPERATOR_FIELD_Name,
      INPUT_CHIP_FIELD_Name
    );
    const {
      result: numbersDataset,
      dataSetRowCount: numberRow,
    } = createFilterDataset(
      values,
      FILTERSELECT_FIELD_NUMBER,
      OPERATOR_FIELD_NUMBER,
      INPUT_CHIP_FIELD_NUMBER
    );
    const {
      result: metaDataDataset,
      dataSetRowCount: metaDataRow,
    } = createFilterDataset(
      values,
      FILTERSELECT_FIELD_METADATA,
      OPERATOR_FIELD_METADATA,
      INPUT_CHIP_FIELD_METADATA
    );
    const {
      result: datesDataset,
      dataSetRowCount: datesRow,
    } = createDateFilterDataset(
      values,
      FILTERSELECT_FIELD_DATE,
      OPERATOR_FIELD_DATE,
      START_DATE,
      END_DATE
    );

    const factoryVariables = {
      // values: values,
      citationValue: citationValue,
      codesValue: codesValue,
      values: values,
      keywordDatasetOptionalLength: keywordRows - 1,
      classificationDatasetoptionalLength: classificationRow - 1,
      namesDatasetoptionalLength: namesRow - 1,
      numbersDatasetoptionalLength: numberRow - 1,
      metaDataDatasetOptionalLength: metaDataRow - 1,
      datesDatasetOptionalLength: datesRow - 1,
    };

    if (
      !codesValue.length &&
      !keywordDataset.length &&
      !classificationDataset.length &&
      !namesDataset.length &&
      !numbersDataset.length &&
      !metaDataDataset.length &&
      !datesDataset.length
    ) {
      dispatch(toastError(t("PLEASE_ENTER_ATLEAST_ONE"), "top-right", 4000));
      return;
    }
    const payload = createSearchPayload(
      userObj,
      projectDataset,
      citationDataset,
      keywordDataset,
      classificationDataset,
      namesDataset,
      numbersDataset,
      metaDataDataset,
      datesDataset,
      countryDataset,
      factoryVariables
    );
    // eslint-disable-next-line eqeqeq
    if (payload.status == "failed") {
      dispatch(toastError(payload.error_msg, "top-right", 4000));
      return;
    }
    dispatch(requestMakeUrl({ ...payload, handleClose: handleClose }));
  };
  const clearHandler = () => {
    const flagValue = resetFlag === "" ? true : !resetFlag;
    reset();
    setResetFlag(flagValue + "");
    clearProjectField && clearProjectField();
    previousMetaData &&
      previousMetaData.length &&
      dispatchAction(
        change(formName, FILTERSELECT_FIELD_METADATA, defaultMetaValue)
      );
  };

  return (
    <form className="Filter">
      <Paper style={{ marginTop: 15 }}>
        <Box padding={2.2}>
          <Field
            name="country"
            component={renderMultiSelectAutoComplete}
            label={t("COUNTRY")}
            options={[allOption, ...countryList]}
            displayLabel="title"
            placeholder={t("SELECT_COUNTRY")}
            validate={[required]}
          />
        </Box>
      </Paper>
      <ThemeProvider theme={defaultTheme}>
        <KeywordsPanel
          classes={classes}
          formName={formName}
          INPUT_CHIP_FIELD={INPUT_CHIP_FIELD_KEYWORD}
          FILTERSELECT_FIELD={FILTERSELECT_FIELD_KEYWORD}
          OPERATOR_FIELD={OPERATOR_FIELD_KEYWORD}
          resetFlag={resetFlag}
          t={t}
        />
        <ClassificationPanel
          classes={classes}
          formName={formName}
          INPUT_CHIP_FIELD={INPUT_CHIP_FIELD_CLASSIFICATION}
          FILTERSELECT_FIELD={FILTERSELECT_FIELD_CLASSIFICATION}
          OPERATOR_FIELD={OPERATOR_FIELD_CLASSIFICATION}
          resetFlag={resetFlag}
          t={t}
        />
        <DatesPanel
          classes={classes}
          formName={formName}
          OPERATOR_FIELD_DATE={OPERATOR_FIELD_DATE}
          FILTERSELECT_FIELD_DATE={FILTERSELECT_FIELD_DATE}
          START_DATE={START_DATE}
          END_DATE={END_DATE}
          resetFlag={resetFlag}
          t={t}
        />
        <NamesPanel
          classes={classes}
          formName={formName}
          INPUT_CHIP_FIELD={INPUT_CHIP_FIELD_Name}
          FILTERSELECT_FIELD={FILTERSELECT_FIELD_Name}
          OPERATOR_FIELD={OPERATOR_FIELD_Name}
          resetFlag={resetFlag}
          t={t}
        />
        <NumbersPanel
          classes={classes}
          formName={formName}
          INPUT_CHIP_FIELD={INPUT_CHIP_FIELD_NUMBER}
          FILTERSELECT_FIELD={FILTERSELECT_FIELD_NUMBER}
          OPERATOR_FIELD={OPERATOR_FIELD_NUMBER}
          resetFlag={resetFlag}
          t={t}
        />
        {previousMetaData && previousMetaData.length ? (
          <MetaDataPanel
            classes={classes}
            formName={formName}
            INPUT_CHIP_FIELD={INPUT_CHIP_FIELD_METADATA}
            FILTERSELECT_FIELD={FILTERSELECT_FIELD_METADATA}
            OPERATOR_FIELD={OPERATOR_FIELD_METADATA}
            defaultMetaValue={defaultMetaValue}
            previousMetaData={previousMetaData}
            resetFlag={resetFlag}
            t={t}
          />
        ) : null}
      </ThemeProvider>
      <Box mt={2} display="flex" justifyContent="center" alignItems="center">
        <Button
          variant="contained"
          className={classes.greyContainedBtn}
          onClick={() => clearHandler()}
          style={{ height: 40 }}
          startIcon={<Close />}
        >
          {t("CLEAR_FILTERS")}
        </Button>
        <ButtonLoader size={24} loading={loading}>
          <Button
            variant="outlined"
            className={classes.crimsonButton}
            onClick={handleSubmit(searchPatent)}
            disabled={
              projectDataset.length ? false : submitting ? submitting : false
            }
          >
            {t("SEARCH")}
          </Button>
        </ButtonLoader>
      </Box>
    </form>
  );
};

export default reduxForm({
  initialValues: {
    country: [allOption],
    [FILTERSELECT_FIELD_KEYWORD]: "ALL",
    [OPERATOR_FIELD_KEYWORD]: "AND",
    [OPERATOR_FIELD_CLASSIFICATION]: "AND",
    [FILTERSELECT_FIELD_CLASSIFICATION]: "Classification CPC or IPC",
    [INPUT_CHIP_FIELD_KEYWORD]: "",
    [INPUT_CHIP_FIELD_CLASSIFICATION]: "",
    [OPERATOR_FIELD_DATE]: "AND",
    [FILTERSELECT_FIELD_DATE]: "Publication Date",
    [FILTERSELECT_FIELD_Name]: "Assignee",
    [OPERATOR_FIELD_Name]: "AND",
    [INPUT_CHIP_FIELD_Name]: "",
    [FILTERSELECT_FIELD_NUMBER]: "Publication Number",
    [OPERATOR_FIELD_NUMBER]: "AND",
    [INPUT_CHIP_FIELD_NUMBER]: "",
    [FILTERSELECT_FIELD_METADATA]: {},
    [OPERATOR_FIELD_METADATA]: "AND",
    [INPUT_CHIP_FIELD_METADATA]: "",
  },
})(MaterialUiForm);
