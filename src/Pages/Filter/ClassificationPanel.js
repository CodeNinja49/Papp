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

export default function ClassificationPanel({
  classes,
  formName,
  INPUT_CHIP_FIELD,
  FILTERSELECT_FIELD,
  OPERATOR_FIELD,
  resetFlag,
  t,
}) {
  const dispatch = useDispatch();
  const [optionalClassification, setOptionalClassification] = React.useState(
    []
  );
  const [isValidField, setValidField] = React.useState("");
  const selector = formValueSelector(formName);
  const classificationDatasetoptionalLength = useSelector(
    (state) => state.project.formState.classificationDatasetoptionalLength
  );

  React.useEffect(() => {
    if (classificationDatasetoptionalLength > 0) {
      setOptionalClassification(
        [...Array(classificationDatasetoptionalLength)].map((u, i) => i + 1)
      );
    } else {
      setOptionalClassification([]);
    }
  }, [classificationDatasetoptionalLength]);

  const classificationPanelValue = useSelector((state) => {
    return {
      default: selector(state, INPUT_CHIP_FIELD),
      ...optionalClassification.map((keyword, i) => {
        return { i: selector(state, `${INPUT_CHIP_FIELD}${i}`) };
      }),
    };
  });
  const addMoreClassification = () => {
    const { default: main, ...rest } = classificationPanelValue;
    if (!main.length) {
      setValidField(INPUT_CHIP_FIELD);
      setTimeout(() => {
        setValidField("");
      }, 2000);
      return;
    }
    const classificationLength = optionalClassification.length;
    const fieldIndex = classificationLength ? classificationLength - 1 : 0;

    if (
      main.length &&
      classificationLength &&
      rest[fieldIndex] &&
      !rest[classificationLength - 1].i
    ) {
      setValidField(`${INPUT_CHIP_FIELD}${fieldIndex}`);
      setTimeout(() => {
        setValidField("");
      }, 2000);
      return;
    }
    const newItemVal = classificationLength + 1;
    const toggleField = `${OPERATOR_FIELD}${classificationLength}`;
    const selectField = `${FILTERSELECT_FIELD}${classificationLength}`;
    const chipTextField = `${INPUT_CHIP_FIELD}${classificationLength}`;
    dispatch(change(formName, toggleField, "AND"));
    dispatch(change(formName, selectField, "Classification CPC or IPC"));
    dispatch(change(formName, chipTextField, ""));
    setOptionalClassification([...optionalClassification, newItemVal]);
  };

  const removeClassification = () => {
    const removeItemIndex = optionalClassification.length - 1;
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
    const newList = optionalClassification.slice(0, -1);
    setOptionalClassification(newList);
  };
  React.useEffect(() => {
    if (resetFlag != "") {
      setOptionalClassification([]);
    }
  }, [resetFlag]);
  return (
    <Paper style={{ marginTop: 15 }}>
      <Box padding={2.2}>
        <Box textAlign="left" display="flex" alignItems="center">
          <div className="Filter_title">{t("CLASSIFICATION")}</div>
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
              <MenuItem value="Classification CPC or IPC" selected>
                Classification CPC or IPC
              </MenuItem>
              <MenuItem value="Classification IPC">Classification IPC</MenuItem>
              <MenuItem value="Classification CPC">Classification CPC</MenuItem>
              <MenuItem value="Classification US Main & Further">
                Classification US Main & Further
              </MenuItem>
            </Field>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name={INPUT_CHIP_FIELD}
              component={RenderChipTextField}
              label="KeywordsText"
              style={{ width: "100%" }}
              change={clearFields}
              formName={formName}
              placeholder="A61K 9/2893"
              showCustomError={isValidField === INPUT_CHIP_FIELD}
            />
          </Grid>
        </Grid>
        {optionalClassification.map((val, index) => (
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
              >
                <MenuItem value="Classification CPC or IPC">
                  Classification CPC or IPC
                </MenuItem>
                <MenuItem value="Classification IPC">
                  Classification IPC
                </MenuItem>
                <MenuItem value="Classification CPC">
                  Classification CPC
                </MenuItem>
                <MenuItem value="Classification US Main & Further">
                  Classification US Main & Further
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
                placeholder="A61K 9/2893"
                showCustomError={isValidField === `${INPUT_CHIP_FIELD}${index}`}
              />
            </Grid>
          </Grid>
        ))}
        <Box textAlign="right">
          {optionalClassification.length ? (
            <Button
              variant="outlined"
              className={classes.greyButton}
              startIcon={<Remove />}
              onClick={removeClassification}
            >
              {t("REMOVE_CLASSIFICATION")}
            </Button>
          ) : null}
          <Button
            variant="contained"
            className={classes.greyContainedBtn}
            startIcon={<Add />}
            onClick={addMoreClassification}
          >
            {t("ADD_CLASSIFICATION")}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
