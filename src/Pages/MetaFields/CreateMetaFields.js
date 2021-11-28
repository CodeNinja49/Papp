import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm, clearFields } from "redux-form";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Clear from "@material-ui/icons/Clear";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import InputAdornment from "@material-ui/core/InputAdornment";
import Add from "@material-ui/icons/Add";
import GreyButton from "../../Components/GreyButton";
import GreyCheckBox from "../../Components/GreyCheckbox";
import GreyRadio from "../../Components/GreyRadiobutton";
import { renderTextField } from "../../Components/materialUiCustom";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const CHECKBOX_OPTION = "Checkbox";
const TEXT_AREA_OPTION = "Text Area";
const CHOICES_OPTION = "Multiple Choices";
const OPTIONS = [TEXT_AREA_OPTION, CHECKBOX_OPTION, CHOICES_OPTION];

const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";

export const CheckedgreyBox = ({ style }) => (
  <GreyCheckBox
    icon={icon}
    checkedIcon={checkedIcon}
    style={{ marginRight: 8, ...style }}
    checked={true}
  />
);

export const CheckedRadio = ({ style }) => (
  <GreyRadio
    checked={true}
    name="radio-button-demo"
    inputProps={{ "aria-label": "C" }}
    size="small"
    style={{ marginRight: "7px", ...style }}
  />
);

const createMetaObj = (values, fieldType) => {
  if (fieldType === TEXT_AREA_OPTION) {
    return {
      name: values.Headlights,
      type: "text",
      edit: false,
    };
  }
  if (fieldType === CHECKBOX_OPTION) {
    return {
      name: values.Headlights,
      type: "check_box",
      edit: false,
      sub_templates: [
        ...Object.keys(values).reduce((newArr, key) => {
          if (key.indexOf("checkboxOption") !== -1) {
            newArr.push({ name: values[key] });
          }
          return newArr;
        }, []),
      ],
    };
  }
  if (fieldType === CHOICES_OPTION) {
    return {
      name: values.Headlights,
      type: "radio_box",
      edit: false,
      sub_templates: [
        ...Object.keys(values).reduce((newArr, key) => {
          if (key.indexOf("radioOption") !== -1) {
            newArr.push({ name: values[key] });
          }
          return newArr;
        }, []),
      ],
    };
  }
};
function CreateMetaFields(props) {
  const dispatch = useDispatch();
  const { handleSubmit, classes, reset, t } = props;
  const [fieldType, setFieldType] = React.useState(OPTIONS[0]);
  const [checboxes, setCheckBoxs] = React.useState([0, 1, 2]);
  const [choices, setChoices] = React.useState([0, 1, 2]);
  const addOption = () => {
    if (fieldType === CHECKBOX_OPTION) {
      setCheckBoxs([...checboxes, checboxes.length + 1]);
    }
    if (fieldType === CHOICES_OPTION) {
      setChoices([...choices, choices.length + 1]);
    }
  };
  const removeOption = (index) => {
    if (fieldType === CHECKBOX_OPTION) {
      const updated = [...checboxes];
      updated.splice(index, 1);
      setCheckBoxs([...updated]);
      dispatch(
        clearFields("metadataForm", false, false, `checkboxOption${index}`)
      );
    }
    if (fieldType === CHOICES_OPTION) {
      const newArr = [...choices];
      newArr.splice(index, 1);
      setChoices([...newArr]);
      dispatch(
        clearFields("metadataForm", false, false, `radioOption${index}`)
      );
    }
  };
  const submit = (values) => {
    const {
      setNewMetaDatas,
      setRadioNewMetaDatas,
      setCheckboxNewMetaDatas,
    } = props;
    if (fieldType === TEXT_AREA_OPTION) {
      setNewMetaDatas(createMetaObj(values, fieldType));
    }
    if (fieldType === CHECKBOX_OPTION) {
      setCheckboxNewMetaDatas(createMetaObj(values, fieldType));
    }
    if (fieldType === CHOICES_OPTION) {
      setRadioNewMetaDatas(createMetaObj(values, fieldType));
    }
    reset();
  };
  return (
    <Paper className="PatentUpload_Paper">
      <form className={classes.form} autoComplete={false}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Autocomplete
              id="virtualize-demo"
              className="MultiSelect"
              value={fieldType}
              fullWidth
              onChange={(event, newValue) => {
                if (newValue) {
                  setFieldType(newValue);
                }
              }}
              getOptionLabel={(option) => option}
              defaultValue={OPTIONS[0]}
              options={OPTIONS}
              closeText=""
              popupIcon={<ExpandMore style={{ fontSize: "2.2rem" }} />}
              disableClearable={true}
              selectOnFocus={false}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  variant="standard"
                  label="Select Field Type"
                  color="#3F4752"
                  placeholder="Field type"
                  style={{ color: "#3F4752" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className="MultiSelect_input"
                />
              )}
              renderOption={(option, { selected }) => (
                <>
                  {option === CHECKBOX_OPTION ? (
                    <CheckedgreyBox />
                  ) : option === TEXT_AREA_OPTION ? (
                    <TextFieldsIcon
                      style={{ margin: "8px", marginRight: "13px" }}
                    />
                  ) : (
                    <CheckedRadio />
                  )}
                  {option}
                </>
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={renderTextField}
              placeholder={t("ENTER_FIELD_NAME")}
              name="Headlights"
              label=""
              style={{ margin: 0 }}
              validate={[required]}
            />
          </Grid>
        </Grid>
        {fieldType === CHECKBOX_OPTION ? (
          <Grid container spacing={5} style={{ marginTop: 8 }}>
            {checboxes.map((field, index) => (
              <Grid item xs={4} key={index}>
                <Field
                  component={renderTextField}
                  placeholder={t("ENTER_OPTION")}
                  name={`checkboxOption${index}`}
                  label=""
                  style={{ margin: 0 }}
                  validate={[required]}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CheckedgreyBox
                          style={{ marginRight: 0, paddingLeft: 0 }}
                        />
                      </InputAdornment>
                    ),
                    endAdornment:
                      index !== 0 ? (
                        <InputAdornment position="end">
                          <Clear
                            className={classes.inputIconEnd}
                            onClick={() => removeOption(index)}
                          />
                        </InputAdornment>
                      ) : null,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        ) : null}
        {fieldType === CHOICES_OPTION ? (
          <Grid container spacing={5} style={{ marginTop: 8 }}>
            {choices.map((field, index) => (
              <Grid item xs={4} key={index}>
                <Field
                  component={renderTextField}
                  placeholder={t("ENTER_OPTION")}
                  name={`radioOption${index}`}
                  label=""
                  style={{ margin: 0 }}
                  validate={[required]}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CheckedRadio
                          style={{ marginRight: 0, paddingLeft: 0 }}
                        />
                      </InputAdornment>
                    ),
                    endAdornment:
                      index !== 0 ? (
                        <InputAdornment position="end">
                          <Clear
                            className={classes.inputIconEnd}
                            onClick={() => removeOption(index)}
                          />
                        </InputAdornment>
                      ) : null,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        ) : null}
        <Box
          paddingTop={3}
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          {(fieldType === CHECKBOX_OPTION && checboxes.length < 10) ||
          (fieldType === CHOICES_OPTION && choices.length < 10) ? (
            <Button
              variant="outlined"
              className={classes.greyButton}
              startIcon={<Add />}
              onClick={addOption}
            >
              {t("ADD_OPTION")}
            </Button>
          ) : null}
          <GreyButton
            style={{ width: 137, margin: 0 }}
            size={24}
            startIcon={<Add />}
            onClick={handleSubmit(submit)}
          >
            {t("ADD_FIELD")}
          </GreyButton>
        </Box>
      </form>
    </Paper>
  );
}

export default reduxForm({
  form: "metadataForm",
})(CreateMetaFields);
