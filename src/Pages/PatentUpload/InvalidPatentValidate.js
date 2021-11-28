import React from "react";
import { withStyles } from "@material-ui/core/styles";
import GreyButton from "../../Components/GreyButton";
import Dialog from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "../../Components/theme";

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

function InvalidPatentValidate({
  handleClose,
  open,
  logFile,
  patents = [],
  reValidatePatents,
  reValidateLoading,
  t,
}) {
  const [patentCodes, updateCodes] = React.useState("");

  React.useEffect(() => {
    const names = patents
      .filter((p) => p.checked)
      .map((p) => p.name)
      .join(" ");
    console.log("names", names);
    updateCodes(names);
  }, [patents]);

  const changePatents = (e) => {
    const { value } = e.target;
    updateCodes(value);
  };

  const clickHandler = () => {
    const arr = patentCodes.split(" ");
    const validArr = arr.filter((a) => a !== "");
    reValidatePatents(validArr, handleClose);
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
        {t("EDIT_INVALID_PATENTS")}
        <div style={{ fontSize: "11px", opacity: "0.7" }}>
          {t("RESEARCH_WITH_VALID_PUBLICATION_NUMBERS")}
        </div>
      </DialogTitle>
      <DialogContent>
        <ThemeProvider theme={defaultTheme}>
          <Paper
            style={{ marginTop: 15, borderRadius: 10, padding: "20px" }}
            elevation={2}
          >
            <TextField
              id="filled-multiline-static"
              label={t("ADD_VALID_PATENT_NUMBERS")}
              multiline
              value={patentCodes}
              rows={4}
              placeholder="Patent code"
              variant="standard"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              onChange={changePatents}
            />
          </Paper>
        </ThemeProvider>
      </DialogContent>
      <DialogActions>
        <GreyButton
          style={{ width: 137 }}
          disabled={!patentCodes || reValidateLoading}
          onClick={clickHandler}
          loading={reValidateLoading}
          size={24}
        >
          {t("REVALIDATE")}
        </GreyButton>
      </DialogActions>
    </Dialog>
  );
}

export default InvalidPatentValidate;
