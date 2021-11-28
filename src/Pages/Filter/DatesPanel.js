import React from "react";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";
import { formValueSelector, change, clearFields } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import Remove from "@material-ui/icons/Remove";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { Field } from "redux-form";
import {
  renderToggleButton,
  renderSelect,
  RenderDatePicker,
} from "../../Components/materialUiCustom";

const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";

export default function DatesPanel({
  classes,
  formName,
  OPERATOR_FIELD_DATE,
  FILTERSELECT_FIELD_DATE,
  START_DATE,
  END_DATE,
  resetFlag,
  t,
}) {
  const dispatch = useDispatch();
  const [optionDates, setOptionalDates] = React.useState([]);
  const [isValidField, setValidField] = React.useState("");
  const selector = formValueSelector(formName);
  const datesDatasetOptionalLength = useSelector(
    (state) => state.project.formState.datesDatasetOptionalLength
  );

  React.useEffect(() => {
    if (datesDatasetOptionalLength > 0) {
      setOptionalDates(
        [...Array(datesDatasetOptionalLength)].map((u, i) => i + 1)
      );
    } else {
      setOptionalDates([]);
    }
  }, [datesDatasetOptionalLength]);

  const datePanelValue = useSelector((state) => {
    return {
      startDate: selector(state, START_DATE),
      endDate: selector(state, END_DATE),
      optionalStartDate: optionDates.map((keyword, i) => {
        return { i: selector(state, `${START_DATE}${i}`) };
      }),
      optionalEndDate: optionDates.map((keyword, i) => {
        return { i: selector(state, `${END_DATE}${i}`) };
      }),
    };
  });
  const addMoreDate = () => {
    const {
      startDate,
      endDate,
      optionalStartDate,
      optionalEndDate,
    } = datePanelValue;
    if (!startDate) {
      setValidField(START_DATE);
      setTimeout(() => {
        setValidField("");
      }, 2000);
      return;
    }
    if (!endDate) {
      setValidField(END_DATE);
      setTimeout(() => {
        setValidField("");
      }, 2000);
      return;
    }
    const datesLength = optionDates.length;
    const fieldIndex = datesLength ? datesLength - 1 : 0;

    if (
      startDate &&
      endDate &&
      datesLength &&
      optionalStartDate[fieldIndex] &&
      !optionalStartDate[datesLength - 1].i
    ) {
      setValidField(`${START_DATE}${fieldIndex}`);
      setTimeout(() => {
        setValidField("");
      }, 2000);
      return;
    }

    if (
      startDate &&
      endDate &&
      datesLength &&
      optionalEndDate[fieldIndex] &&
      !optionalEndDate[datesLength - 1].i
    ) {
      setValidField(`${END_DATE}${fieldIndex}`);
      setTimeout(() => {
        setValidField("");
      }, 2000);
      return;
    }
    const newItemVal = datesLength + 1;
    const toggleField = `${OPERATOR_FIELD_DATE}${datesLength}`;
    const selectField = `${FILTERSELECT_FIELD_DATE}${datesLength}`;
    dispatch(change(formName, toggleField, "AND"));
    dispatch(change(formName, selectField, "Publication Date"));
    setOptionalDates([...optionDates, newItemVal]);
  };

  const removeDate = () => {
    const removeItemIndex = optionDates.length - 1;
    dispatch(
      clearFields(
        formName,
        false,
        false,
        `${OPERATOR_FIELD_DATE}${removeItemIndex}`,
        `${FILTERSELECT_FIELD_DATE}${removeItemIndex}`,
        `${START_DATE}${removeItemIndex}`,
        `${END_DATE}${removeItemIndex}`
      )
    );
    const newList = optionDates.slice(0, -1);
    setOptionalDates(newList);
  };
  React.useEffect(() => {
    if (resetFlag != "") {
      setOptionalDates([]);
    }
  }, [resetFlag]);
  return (
    <Paper style={{ marginTop: 15 }}>
      <Box padding={2.2}>
        <Box textAlign="left" display="flex" alignItems="center">
          <div className="Filter_title">{t("DATES")}</div>
          <Field
            name={OPERATOR_FIELD_DATE}
            component={renderToggleButton}
            label="toggle"
          />
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Field
              name={FILTERSELECT_FIELD_DATE}
              component={renderSelect}
              label="KeywordsOption"
              style={{ width: "100%", height: 39, textAlign: "left" }}
            >
              <MenuItem value="Publication Date">Publication Date</MenuItem>
              <MenuItem value="Application Date">Application Date</MenuItem>
              <MenuItem value="Priority Date">Priority Date</MenuItem>
              <MenuItem value="Earliest Priority Date">
                Earliest Priority Date
              </MenuItem>
            </Field>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name={START_DATE}
              component={RenderDatePicker}
              label="Select Start Date"
              style={{ width: "100%" }}
              showCustomError={isValidField === START_DATE}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name={END_DATE}
              component={RenderDatePicker}
              label="Select End Date"
              style={{ width: "100%" }}
              showCustomError={isValidField === END_DATE}
            />
          </Grid>
        </Grid>
        {optionDates.map((val, i) => (
          <Grid container spacing={3} key={val} style={{ marginTop: 5 }}>
            <Grid item xs={12} sm={6}>
              <Field
                name={OPERATOR_FIELD_DATE + i}
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
            <Grid item xs={12} sm={6}>
              <Field
                name={FILTERSELECT_FIELD_DATE + i}
                component={renderSelect}
                label="KeywordsOption"
                style={{ width: "100%", height: 39, textAlign: "left" }}
              >
                <MenuItem value="Publication Date">Publication Date</MenuItem>
                <MenuItem value="Application Date">Application Date</MenuItem>
                <MenuItem value="Priority Date">Priority Date</MenuItem>
                <MenuItem value="Earliest Priority Date">
                  Earliest Priority Date
                </MenuItem>
              </Field>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name={START_DATE + i}
                component={RenderDatePicker}
                label="Select Start Date"
                style={{ width: "100%" }}
                showCustomError={isValidField === START_DATE + i}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name={END_DATE + i}
                component={RenderDatePicker}
                label="Select End Date"
                style={{ width: "100%" }}
                showCustomError={isValidField === END_DATE + i}
              />
            </Grid>
          </Grid>
        ))}
        <Box textAlign="right">
          {optionDates.length ? (
            <Button
              variant="outlined"
              className={classes.greyButton}
              startIcon={<Remove />}
              onClick={removeDate}
            >
              {t("REMOVE_DATES")}
            </Button>
          ) : null}
          <Button
            variant="contained"
            className={classes.greyContainedBtn}
            startIcon={<Add />}
            onClick={addMoreDate}
          >
            {t("ADD_DATES")}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
