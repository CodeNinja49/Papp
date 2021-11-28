import React from "react";
import moment from "moment";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Select from "@material-ui/core/Select";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import DateUtils from "@date-io/moment";
import { ThemeProvider } from "@material-ui/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { withStyles } from "@material-ui/core/styles";
import defaultTheme from "../Components/theme";

export const renderAutoComplete = ({
  input,
  label,
  displayLabel,
  placeholder,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <Autocomplete
      id="tags-standard"
      className="Filter_country"
      options={custom.options}
      getOptionLabel={(option) => (option ? option[displayLabel] : "")}
      renderOption={(option) => <>{option[displayLabel]}</>}
      name={input.name}
      value={input.value}
      clearOnBlur={false}
      onBlur={(e, value) => input.onBlur(value)}
      onChange={(e, value) => input.onChange(value)}
      openOnFocus={() => input.onFocus()}
      popupIcon={<ExpandMore style={{ fontSize: "2.2rem" }} />}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={label}
          error={touched && error}
          style={{ color: "#3F4752" }}
          placeholder={placeholder}
          InputLabelProps={{
            shrink: true,
          }}
          helperText={touched && error}
          className="Filter_country_textField"
        />
      )}
    />
  );
};

export const RenderChipTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => {
  const { onChange, value, ...rest } = input;

  return (
    <TextField
      {...rest}
      error={custom.showCustomError}
      helperText={custom.showCustomError && "Required"}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      {...custom}
      className="custom_chipInput"
      InputProps={{ style: { height: 39 } }}
    />
  );
};

export const renderToggleButton = ({ input, label }) => (
  <ToggleButtonGroup
    size="small"
    value={input.value}
    exclusive
    onChange={(event, val) => val && input.onChange(val)}
    className="Filter_ToggleButtonGroup"
  >
    <ToggleButton value="AND" className="Filter_ToggleButtonGroup_LeftToggle">
      AND
    </ToggleButton>
    <ToggleButton value="OR">OR</ToggleButton>
    <ToggleButton value="NOT" className="Filter_ToggleButtonGroup_RightToggle">
      NOT
    </ToggleButton>
  </ToggleButtonGroup>
);

export const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

export const renderSelect = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => {
  const { previousMetaData } = custom;
  const arr = previousMetaData && [].filter((f) => f.id == input.value.id);

  const newVal = arr && arr.length ? arr[0] : input.value;
  return (
    <Select
      labelId="selectlabel"
      id="selectlabel"
      {...input}
      name={input.name}
      value={newVal}
      onChange={(event) => input.onChange(event.target.value)}
      children={children}
      {...custom}
      IconComponent={ExpandMore}
    />
  );
};

export const RenderDatePicker = ({ input, label, ...custom }) => {
  const [selectedDate, setSelectDate] = React.useState(null);
  React.useEffect(() => {
    if (input.value) {
      setSelectDate(input.value);
    } else {
      setSelectDate(null);
    }
  }, [input.value]);
  const handleDateChange = (date) => {
    input.onChange(date);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <MuiPickersUtilsProvider utils={DateUtils}>
        <KeyboardDatePicker
          fullWidth
          label={label}
          format="MM/DD/YYYY"
          {...input}
          name={input.name}
          value={selectedDate}
          disableFuture={true}
          onChange={handleDateChange}
          minDate={moment(new Date("01/01/1699"))}
          {...(custom.showCustomError ? { error: custom.showCustomError } : {})}
          {...(custom.showCustomError ? { helperText: "Required" } : {})}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#3F4752",
    },
    "& .MuiInputLabel-shrink": {
      color: "#000000",
    },
    "& .MuiInputLabel-outlined": {
      paddingLeft: 10,
    },
    "& .PrivateNotchedOutline-legendNotched-10": {
      marginLeft: 7,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3F4752",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 14,
      "& fieldset": {
        borderColor: "#3F4752",
      },
      "&:hover fieldset": {
        borderColor: "#3F4752",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3F4752",
      },
    },
    "& .MuiOutlinedInput-root.Mui-error": {
      borderRadius: 14,
      "& fieldset": {
        borderColor: "#f44336",
      },
      "&:hover fieldset": {
        borderColor: "#f44336",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f44336",
      },
    },
  },
  input: {
    borderRadius: 14,
  },
})(TextField);

export const renderCssTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <CssTextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    {...input}
    id={label}
    label={label}
    name={input.name}
    autoComplete="false"
    error={touched && error}
    helperText={touched && error ? error : ""}
    {...custom}
  />
);

export const renderTextField = ({
  input,
  label,
  placeholder,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    className="renderTextField"
    style={{ margin: 8 }}
    placeholder={placeholder}
    fullWidth
    margin="normal"
    required
    InputLabelProps={{
      shrink: true,
    }}
    {...input}
    id={label}
    label={label}
    name={input.name}
    autoComplete="false"
    error={touched && error}
    helperText={touched && error ? error : ""}
    {...custom}
    {...(custom.showcustomerror ? { error: true } : "")}
    {...(custom.showcustomerror ? { helperText: "Required" } : "")}
  />
);

export const renderMultiSelectAutoComplete = ({
  input,
  label,
  displayLabel,
  placeholder,
  meta: { touched, error },
  ...custom
}) => {
  const { name, value, onChange } = input;
  const selectValue = Array.isArray(value) ? value : [value];
  console.log("error", error, touched);
  return (
    <Autocomplete
      id="tags-standard"
      className="Filter_country"
      options={custom.options}
      getOptionLabel={(option) => (option ? option[displayLabel] : "")}
      renderOption={(option) => <>{option[displayLabel]}</>}
      name={input.name}
      value={selectValue}
      clearOnBlur={false}
      multiple
      onBlur={(e, value) => input.onBlur(value)}
      onChange={(e, value) => {
        const newVal =
          selectValue.filter((v) => v.title === "All").length &&
          value.length > 1
            ? value.filter((v) => v.title !== "All")
            : value;
        const onlyAll = newVal.filter((v) => v.title === "All").length
          ? [{ title: "All" }]
          : newVal;
        input.onChange(onlyAll);
      }}
      openOnFocus={() => input.onFocus()}
      disableCloseOnSelect
      popupIcon={<ExpandMore style={{ fontSize: "2.2rem" }} />}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={label}
          error={touched && error}
          style={{ color: "#3F4752" }}
          placeholder={placeholder}
          InputLabelProps={{
            shrink: true,
          }}
          helperText={touched && error}
          className="Filter_country_textField"
        />
      )}
    />
  );
};
