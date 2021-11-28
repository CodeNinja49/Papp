import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { initUpload } from "../../reducer/Upload/UploadActions";
import ButtonLoader from "../../Components/ButtonLoader";

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
    height: 40,
    backgroundColor: "#3F4752",
    marginLeft: 10,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    "&:hover": {
      backgroundColor: "rgba(63,71,82, 0.9)",
    },
    "&.Mui-disabled": {
      color: "rgba(0, 0, 0, 0.26)",
      boxShadow: "none",
      backgroundColor: "rgba(0, 0, 0, 0.12)",
    },
  },
  customDialog: {
    marginTop: "-19vh",
    "& .MuiDialog-paperFullWidth": {
      maxWidth: 970,
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

function SetCitation({ handleClose, open, logFile, patents = [], t }) {
  const [codesValue, setCodesValue] = React.useState({});
  const [codeInputValue, setCodeInputValue] = React.useState("");
  const [citationValue, setCitationValue] = React.useState({});
  const [citationInputValue, setCitationInputValue] = React.useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.project.projectList);
  const loadingPatentRequest = useSelector(
    (state) => state.patentUpload.loading
  );
  const selectedProjectCitationList = codesValue ? codesValue.data : [];
  const checkedPatents = patents
    .filter((p) => p.checked)
    .map((res) => res.name);
  const selectedPatentsChecked = patents
    .filter((p) => p.checked)
    .map((res) => res.name.split("-").join(""));

  const initPatentUpload = () => {
    const payload = {
      patents: JSON.stringify(checkedPatents),
      project_code: codesValue.project_code_name,
      citation_category: citationValue.citation_category_name,
      progress_file: "abcsdwqjqekqw",
      logfile: logFile,
      selectedPatents: selectedPatentsChecked,
      projectId: codesValue.project_code_id,
    };
    dispatch(initUpload(payload, handleClose));
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
        {t("SET_PROFILES")}
      </DialogTitle>
      <DialogContent>
        <Paper style={{ marginTop: 15, borderRadius: 10 }} elevation={2}>
          <Box padding={2.2}>
            <Autocomplete
              id="tags-standard"
              className="Filter_country"
              options={projectList ? projectList : [{}]}
              getOptionLabel={(option) =>
                option ? option["project_code_name"] : ""
              }
              renderOption={(option) => <>{option["project_code_name"]}</>}
              value={codesValue}
              clearOnBlur={false}
              onChange={(event, newValue) => {
                setCodesValue(newValue);
              }}
              inputValue={codeInputValue}
              onInputChange={(event, newInputValue) => {
                setCodeInputValue(newInputValue);
              }}
              popupIcon={<ExpandMore style={{ fontSize: "2.2rem" }} />}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Project Codes"
                  style={{ color: "#3F4752" }}
                  placeholder={t("SELECT_PROJECT_CODE")}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className="Filter_country_textField"
                />
              )}
            />
          </Box>
          <Box padding={2.2} display="flex">
            <div className="GlobalSearch_citationLeftBorder"></div>
            <Autocomplete
              id="tags-standard"
              className="Filter_country"
              options={
                selectedProjectCitationList ? selectedProjectCitationList : [{}]
              }
              getOptionLabel={(option) =>
                option ? option["citation_category_name"] : ""
              }
              disabled={!Object.keys(codesValue).length}
              renderOption={(option) => <>{option["citation_category_name"]}</>}
              value={citationValue}
              clearOnBlur={false}
              onChange={(event, newValue) => {
                setCitationValue(newValue);
              }}
              inputValue={citationInputValue}
              onInputChange={(event, newInputValue) => {
                setCitationInputValue(newInputValue);
              }}
              popupIcon={<ExpandMore style={{ fontSize: "2.2rem" }} />}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label={t("CITATION_CATEGORY")}
                  style={{ color: "#3F4752" }}
                  placeholder="Select Citation"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className="Filter_country_textField"
                />
              )}
            />
          </Box>
        </Paper>
      </DialogContent>
      <DialogActions>
        <ButtonLoader
          size={24}
          loading={loadingPatentRequest}
          customStyle={{ transform: "translate(-30%, -45%)" }}
        >
          <Button
            autoFocus
            onClick={initPatentUpload}
            className={classes.greyContainedBtn}
            disabled={
              !Object.keys(citationValue).length || loadingPatentRequest
            }
          >
            {t("UPLOAD_THE_SELECTED_PATENTS")}
          </Button>
        </ButtonLoader>
      </DialogActions>
    </Dialog>
  );
}

export default SetCitation;
