import React from "react";
import { Field, reduxForm, formValueSelector, clearFields } from "redux-form";
import { useDispatch, useSelector } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import {
  renderAutoComplete,
  renderSelect,
  renderTextField,
} from "../../Components/materialUiCustom";
import { initCreateNewProject } from "../../reducer/Project/ProjectActions";
const buttonWidth = 145;
const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: 20,
    paddingTop: 25,
    paddingBottom: 0,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: 20,
    paddingTop: 14,
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    justifyContent: "center",
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  greyContainedBtn: {
    borderRadius: 12,
    fontSize: 12,
    color: "#fff",
    textTransform: "none",
    width: buttonWidth,
    height: 40,
    backgroundColor: "#3F4752",
    marginLeft: 10,
    marginTop: 10,
    "&:hover": {
      backgroundColor: "rgba(63,71,82, 0.9)",
    },
    "&.Mui-disabled": {
      opacity: "70%",
      color: "white",
    },
  },
  customDialog: {
    marginTop: "-19vh",
    "& .MuiDialog-paperFullWidth": {
      maxWidth: 770,
      backgroundColor: "#f6f7fb",
      borderRadius: 20,
    },
  },

  greyButton: {
    border: "1px solid #3F4752",
    borderRadius: 8,
    fontSize: 12,
    color: "#3F4752",
    height: 40,
    textTransform: "none",
    marginLeft: 10,
    marginTop: 11.5,
  },
}));

const CITATION_FIELD = "citationField";

function NewProject({
  handleClose,
  open,
  handleSubmit,
  pristine,
  submitting,
  invalid,
  t,
}) {
  const [citationFieldArray, setNewCitation] = React.useState([]);
  const [showCitationError, setError] = React.useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = formValueSelector("newProject");
  const projectCodeType = useSelector((state) =>
    selector(state, "projectCodeType")
  );
  const projectList = useSelector((state) => state.project.projectList);
  const categoryValues = useSelector((state) => {
    return {
      default: selector(state, CITATION_FIELD),
      ...citationFieldArray.map((keyword, i) => {
        return { i: selector(state, `${CITATION_FIELD}${i}`) };
      }),
    };
  });
  const addMoreCitation = () => {
    const { default: main, ...rest } = categoryValues;
    if (!main) {
      setError(CITATION_FIELD);
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    const fieldLength = citationFieldArray.length;
    const fieldIndex = fieldLength ? fieldLength - 1 : 0;
    if (
      main.length &&
      fieldLength &&
      rest[fieldIndex] &&
      !rest[fieldLength - 1].i
    ) {
      setError(`${CITATION_FIELD}${fieldIndex}`);
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    setNewCitation([...citationFieldArray, fieldLength + 1]);
  };
  const removeCitation = (index) => {
    const removeItemIndex = citationFieldArray.length - 1;
    dispatch(
      clearFields(
        "newProject",
        false,
        false,
        `${CITATION_FIELD}${removeItemIndex}`
      )
    );
    const newList = citationFieldArray.slice(0, -1);
    setNewCitation(newList);
  };
  const createNewProject = (values) => {
    const {
      newProjectCode,
      projectCodeType,
      existingProjectCode,
      ...citationObj
    } = values;
    const citation_category = Object.keys(citationObj).map(
      (val) => citationObj[val]
    );
    const payload = {
      project_code_status: projectCodeType,
      project_code:
        projectCodeType === "new"
          ? newProjectCode
          : existingProjectCode.project_code_name,
      citation_category: citation_category,
    };
    dispatch(initCreateNewProject(payload, handleClose));
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth={true}
      className="NewProject"
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {t("CREATENEWPROJECT_CITATIONCAT")}
      </DialogTitle>
      <DialogContent>
        <form className="Filter">
          <Paper style={{ marginTop: 15, borderRadius: 10 }} elevation={2}>
            <Box padding={2.2} paddingBottom={1.8}>
              <InputLabel id="selectlabel" shrink={true}>
                {t("PROJECT_CODES")}&nbsp;
                <span className="MuiFormLabel-asterisk MuiInputLabel-asterisk">
                  *
                </span>
              </InputLabel>
              <Field
                name="projectCodeType"
                component={renderSelect}
                label="Project Codes"
                style={{ width: "100%" }}
                validate={[required]}
              >
                <MenuItem value="new">{t("NEW_PROJECTCODES")}</MenuItem>
                <MenuItem value="previous">
                  {t("PREVIOUS_PROJECTCODES")}
                </MenuItem>
              </Field>
            </Box>
            <Box padding={2.2} display="flex" paddingTop={1}>
              <div className="GlobalSearch_citationLeftBorder"></div>
              {projectCodeType === "new" ? (
                <Field
                  name="newProjectCode"
                  component={renderTextField}
                  label={t("SET_PROJECTCODE")}
                  placeholder={t("SET_NEW_PROJECTCODE")}
                  validate={[required]}
                />
              ) : (
                <Field
                  name="existingProjectCode"
                  component={renderAutoComplete}
                  label={t("SET_PROJECTCODE")}
                  options={projectList}
                  validate={[required]}
                  displayLabel="project_code_name"
                  placeholder={t("SET_PREVIOUS_CODE")}
                />
              )}
            </Box>
          </Paper>
          <Paper style={{ marginTop: 15, borderRadius: 10 }} elevation={2}>
            <Box
              padding={2.2}
              display="flex"
              paddingTop={1}
              flexDirection="column"
              paddingBottom={1}
            >
              <Field
                name={CITATION_FIELD}
                component={renderTextField}
                label={t("CITATION_CATEGORY")}
                placeholder={t("CATEGORY")}
                showcustomerror={showCitationError === CITATION_FIELD}
                validate={[required]}
              />
              {citationFieldArray.map((res, index) => (
                <Field
                  key={index}
                  name={`${CITATION_FIELD}${index}`}
                  component={renderTextField}
                  label={t("CITATION_CATEGORY")}
                  placeholder={t("CATEGORY")}
                  showcustomerror={
                    showCitationError === `${CITATION_FIELD}${index}`
                  }
                  validate={[required]}
                />
              ))}
            </Box>
            <Box textAlign="right" padding={2.2} paddingTop={0}>
              {citationFieldArray.length ? (
                <Button
                  variant="outlined"
                  className={classes.greyButton}
                  startIcon={<Remove />}
                  onClick={removeCitation}
                >
                  {t("REMOVE_CATEGORY")}
                </Button>
              ) : null}
              <Button
                variant="contained"
                className={classes.greyContainedBtn}
                startIcon={<Add />}
                onClick={addMoreCitation}
              >
                {t("ADD_CATEGORY")}
              </Button>
            </Box>
          </Paper>
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleSubmit(createNewProject)}
          className={classes.greyContainedBtn}
          disabled={invalid || pristine || submitting}
        >
          {t("SUBMIT")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default reduxForm({
  form: "newProject",
  initialValues: {
    projectCodeType: "new",
  },
})(NewProject);
