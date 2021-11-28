import React from "react";
import { formValueSelector, change, clearFields } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { Field } from "redux-form";
import {
  renderSelect,
  renderToggleButton,
  RenderChipTextField,
} from "../../Components/materialUiCustom";

export default function NumbersPanel({
  classes,
  formName,
  INPUT_CHIP_FIELD,
  FILTERSELECT_FIELD,
  OPERATOR_FIELD,
  resetFlag,
  t,
}) {
  const dispatch = useDispatch();
  const [optionalKeywords, setOptionalKeywords] = React.useState([]);
  const [isKeywordEntered, setKeywordEntered] = React.useState("");
  const selector = formValueSelector(formName);

  const numbersDatasetoptionalLength = useSelector(
    (state) => state.project.formState.numbersDatasetoptionalLength
  );

  React.useEffect(() => {
    if (numbersDatasetoptionalLength > 0) {
      setOptionalKeywords(
        [...Array(numbersDatasetoptionalLength)].map((u, i) => i + 1)
      );
    } else {
      setOptionalKeywords([]);
    }
  }, [numbersDatasetoptionalLength]);

  const keywordPanelValue = useSelector((state) => {
    return {
      default: selector(state, INPUT_CHIP_FIELD),
      ...optionalKeywords.map((keyword, i) => {
        return { i: selector(state, `${INPUT_CHIP_FIELD}${i}`) };
      }),
    };
  });
  const addMoreKeyword = () => {
    const { default: main, ...rest } = keywordPanelValue;
    if (!main.length) {
      setKeywordEntered(INPUT_CHIP_FIELD);
      setTimeout(() => {
        setKeywordEntered("");
      }, 2000);
      return;
    }
    const optionKeywordLength = optionalKeywords.length;
    const fieldIndex = optionKeywordLength ? optionKeywordLength - 1 : 0;

    if (
      main.length &&
      optionKeywordLength &&
      rest[fieldIndex] &&
      !rest[optionKeywordLength - 1].i
    ) {
      setKeywordEntered(`${INPUT_CHIP_FIELD}${fieldIndex}`);
      setTimeout(() => {
        setKeywordEntered("");
      }, 2000);
      return;
    }
    const newItemVal = optionKeywordLength + 1;
    const toggleField = `${OPERATOR_FIELD}${optionKeywordLength}`;
    const selectField = `${FILTERSELECT_FIELD}${optionKeywordLength}`;
    const chipTextField = `${INPUT_CHIP_FIELD}${optionKeywordLength}`;
    dispatch(change(formName, toggleField, "AND"));
    dispatch(change(formName, selectField, "Publication Number"));
    dispatch(change(formName, chipTextField, ""));
    setOptionalKeywords([...optionalKeywords, newItemVal]);
  };

  const removeKeyword = () => {
    const removeItemIndex = optionalKeywords.length - 1;
    dispatch(
      clearFields(
        formName,
        false,
        false,
        `${OPERATOR_FIELD}${removeItemIndex}`,
        `${FILTERSELECT_FIELD}${removeItemIndex}`,
        `${INPUT_CHIP_FIELD}${removeItemIndex}`
      )
    );
    const newList = optionalKeywords.slice(0, -1);
    setOptionalKeywords(newList);
  };
  React.useEffect(() => {
    if (resetFlag != "") {
      setOptionalKeywords([]);
    }
  }, [resetFlag]);
  return (
    <Paper style={{ marginTop: 15 }}>
      <Box padding={2.2}>
        <Box textAlign="left" display="flex" alignItems="center">
          <div className="Filter_title">{t("NUMBERS")}</div>
          <Field
            name={OPERATOR_FIELD}
            component={renderToggleButton}
            label="toggle"
          />
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Field
              name={FILTERSELECT_FIELD}
              component={renderSelect}
              label="KeywordsOption"
              style={{ width: "100%", height: 39, textAlign: "left" }}
            >
              <MenuItem value="Publication Number">Publication Number</MenuItem>
              <MenuItem value="Application Number">Application Number</MenuItem>
              <MenuItem value="Priority Number">Priority Number</MenuItem>
              <MenuItem value="Earliest Priority Number">
                Earliest Priority Number
              </MenuItem>
            </Field>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name={INPUT_CHIP_FIELD}
              component={RenderChipTextField}
              label="KeywordsText"
              style={{ width: "100%" }}
              change={change}
              placeholder="EP-1245651-A3"
              showCustomError={isKeywordEntered === INPUT_CHIP_FIELD}
            />
          </Grid>
        </Grid>
        {optionalKeywords.map((val, index) => (
          <Grid container spacing={3} key={val}>
            <Grid item xs={12} sm={2}>
              <Field
                name={`${OPERATOR_FIELD}${index}`}
                component={renderSelect}
                label="KeywordsOption"
                style={{ width: "100%", height: 39, textAlign: "left" }}
                defaultValue="AND"
              >
                <MenuItem value="AND">AND</MenuItem>
                <MenuItem value="OR">OR</MenuItem>
                <MenuItem value="NOT">NOT</MenuItem>
              </Field>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field
                name={`${FILTERSELECT_FIELD}${index}`}
                component={renderSelect}
                label="KeywordsOption"
                style={{ width: "100%", height: 39, textAlign: "left" }}
                defaultValue="All"
              >
                <MenuItem value="Publication Number">
                  Publication Number
                </MenuItem>
                <MenuItem value="Application Number">
                  Application Number
                </MenuItem>
                <MenuItem value="Priority Number">Priority Number</MenuItem>
                <MenuItem value="Earliest Priority Number">
                  Earliest Priority Number
                </MenuItem>
              </Field>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name={`${INPUT_CHIP_FIELD}${index}`}
                component={RenderChipTextField}
                label="KeywordsText"
                style={{ width: "100%" }}
                change={clearFields}
                formName={formName}
                placeholder="EP-1245651-A3"
                showCustomError={
                  isKeywordEntered === `${INPUT_CHIP_FIELD}${index}`
                }
              />
            </Grid>
          </Grid>
        ))}
        <Box textAlign="right">
          {optionalKeywords.length ? (
            <Button
              variant="outlined"
              className={classes.greyButton}
              startIcon={<Remove />}
              onClick={removeKeyword}
            >
              {t("REMOVE_NUMBER")}
            </Button>
          ) : null}
          <Button
            variant="contained"
            className={classes.greyContainedBtn}
            startIcon={<Add />}
            onClick={addMoreKeyword}
          >
            {t("ADD_NUMBER")}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
