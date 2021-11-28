import React from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { renderTextField } from "../../Components/materialUiCustom";
import { initUpdateProjectCitationNames } from "../../reducer/Project/ProjectActions";
import { createEditCitationDetailsPayload } from "../../utils/commonUtils";

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
    paddingBottom: 25,
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
}));

const CITATION_FIELD = "citationField";

function NewProject({
  handleClose,
  open,
  handleSubmit,
  pristine,
  submitting,
  invalid,
  project,
  t,
}) {
  const classes = useStyles();
  const { project_code_id, project_code_name } = project;
  const createNewProject = (value, dispatch) => {
    const projectPayload = {
      target: "project_code",
      target_id: project_code_id,
      newName: value.projectCode,
      previousName: project_code_name,
      app_id: "4",
    };
    const payload = createEditCitationDetailsPayload(
      value,
      project.data,
      CITATION_FIELD
    );
    payload.push(projectPayload);
    dispatch(initUpdateProjectCitationNames(payload, handleClose));
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth={true}
      className="EditProject NewProject"
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {t("EDIT_PROJECTS")}
        <p className="ModalTitle--subHeader">{t("CLICK_TEXT_EDIT")}</p>
        <hr />
      </DialogTitle>
      <DialogContent>
        <form className="Filter">
          <Paper style={{ borderRadius: 10 }} elevation={2}>
            <Box padding={2.2} paddingBottom={1.8}>
              {project.project_code_name ? (
                <Field
                  name="projectCode"
                  component={renderTextField}
                  label="Project Name"
                  placeholder="Set a Project Code"
                  validate={[required]}
                />
              ) : null}
            </Box>
          </Paper>
          {project.data.length ? (
            <>
              <Box display="flex">
                <div className="GlobalSearch_citationLeftBorder"></div>
                <label className="citationLabel">
                  {t("CITATION_CATEGORY")}
                </label>
              </Box>
              <Paper
                style={{
                  marginTop: 15,
                  borderRadius: 10,
                  paddingBottom: 12,
                  width: "95%",
                  float: "right",
                }}
                elevation={2}
              >
                <Box
                  padding={2.2}
                  display="flex"
                  paddingTop={1}
                  flexDirection="column"
                  paddingBottom={1}
                >
                  <Grid container spacing={3}>
                    {project.data.map((res, index) => (
                      <Grid item xs={12} sm={6} style={{ paddingBottom: 0 }}>
                        <Field
                          key={index}
                          name={`${CITATION_FIELD}${res.citation_category_id}`}
                          component={renderTextField}
                          label=""
                          placeholder="Citation"
                          validate={[required]}
                          value={res.citation_category_name}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Paper>
            </>
          ) : null}
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleSubmit(createNewProject)}
          className={classes.greyContainedBtn}
          disabled={invalid || submitting}
        >
          {t("SAVE_CLOSE")}
        </Button>
        <Button
          autoFocus
          onClick={handleClose}
          className={classes.crimsonButton}
        >
          {t("CLOSE")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default reduxForm({
  form: "editProject",
})(NewProject);
