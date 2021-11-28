import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SvgLoader from "../../utils/SvgLoader";
import defaultTheme from "../../Components/theme";
import { toastInfo } from "../../reducer/toast/toastActions";

const useStyles = makeStyles((theme) => ({
  crimsonButton: {
    border: "1px solid #DC3027",
    borderRadius: 12,
    fontSize: 12,
    color: "#DC3027",
    height: 40,
    width: 135,
    textTransform: "none",
    marginBottom: 10,
    marginTop: 10,
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
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
    padding: theme.spacing(2),
    flexGrow: 1,
  },
}))(MuiDialogContent);

export default function SharePatents({
  open,
  handleClose,
  handleSubmit,
  selectedPatent = [],
  t,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [valueRange, setValueRange] = React.useState("complete");
  const [range, setRange] = React.useState({ from: "", to: "" });
  const shareFileUrl = useSelector((state) => state.project.patentShareUrl);
  const rangeFromHandler = (e) => {
    setRange({ ...range, from: e.target.value });
  };
  const rangeToHandler = (e) => {
    setRange({ ...range, to: e.target.value });
  };

  const copyClipboard = () => {
    dispatch(toastInfo("Copied to Clipboard", "top-right", 3000));
    handleClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
      maxWidth="md"
      className="ExportPatent"
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
        style={{ padding: "22px" }}
      >
        {t("SHARE_PATENTS")}
        <div style={{ fontSize: 12 }}>{t("SHARABLE_LINK_MSG")}</div>
      </DialogTitle>
      <DialogContent dividers className="ExportPatent SharePatents">
        {!shareFileUrl ? (
          <>
            <ThemeProvider theme={defaultTheme}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Paper
                    className={`SharePatents_paper ${
                      valueRange === "complete" ? "active" : ""
                    }`}
                    onClick={() => setValueRange("complete")}
                  >
                    <div className="SharePatents_centerBox">
                      <span className="SharePatents_title">
                        {t("COMPLETE_LIST")}
                      </span>
                      <span className="SharePatents_count">
                        {t("MAX_1000")}
                      </span>
                      <span className="SharePatents_details">
                        {t("SHARE_FULL_LIST")}
                      </span>
                      <div className="SharePatents_Btn">
                        {valueRange === "complete"
                          ? t("SELECTED")
                          : t("SELECT")}
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper
                    className={`SharePatents_paper ${
                      valueRange === "selected" ? "active" : ""
                    }`}
                    onClick={() =>
                      selectedPatent.length ? setValueRange("selected") : ""
                    }
                    style={
                      !selectedPatent.length ? { cursor: "not-allowed" } : {}
                    }
                  >
                    <div className="SharePatents_centerBox">
                      <span className="SharePatents_title">
                        {t("SELECTED_PATENTS")}
                      </span>
                      <span className="SharePatents_count">
                        ({selectedPatent.length})
                      </span>
                      <span className="SharePatents_details">
                        {t("SHARED_ONLY_SELECTED_PATENTS")}
                      </span>
                      <div className="SharePatents_Btn">
                        {valueRange === "selected"
                          ? t("SELECTED")
                          : t("SELECT")}
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper
                    className={`SharePatents_paper ${
                      valueRange === "range" ? "active" : ""
                    }`}
                    onClick={() => setValueRange("range")}
                  >
                    <div className="SharePatents_centerBox">
                      <span className="SharePatents_title">{t("RANGE")}</span>
                      <span className="SharePatents_count">
                        <Input
                          style={{
                            maxWidth: "30px",
                            marginLeft: "8px",
                            marginRight: "8px",
                          }}
                          value={range.from}
                          onChange={rangeFromHandler}
                        />
                        to{" "}
                        <Input
                          style={{ maxWidth: "30px", marginLeft: "8px" }}
                          value={range.to}
                          onChange={rangeToHandler}
                        />
                      </span>
                      <span className="SharePatents_details">
                        {t("SHARED_PATENT_RANGE")}
                      </span>
                      <div className="SharePatents_Btn">
                        {valueRange === "range" ? t("SELECTED") : t("SELECT")}
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </ThemeProvider>
            <div style={{ textAlign: "center", marginTop: "25px" }}>
              <Button
                variant="outlined"
                className={classes.crimsonButton}
                onClick={() => handleSubmit(valueRange, range)}
                disabled={
                  valueRange === "range" ? !range.from || !range.to : false
                }
              >
                {t("SHARE")}
              </Button>
            </div>
          </>
        ) : (
          <>
            <div>
              <textarea rows={4} style={{ width: "100%" }} disabled>
                {shareFileUrl}
              </textarea>
            </div>
            <center>
              <CopyToClipboard text={shareFileUrl}>
                <Button
                  variant="outlined"
                  className={classes.crimsonButton}
                  startIcon={
                    <SvgLoader
                      xlinkHref="#copy"
                      style={{ height: "20px", fill: "#DC3027" }}
                    />
                  }
                  style={{ width: "200px" }}
                  onClick={copyClipboard}
                >
                  {t("COPY_TO_CLIPBOARD")}
                </Button>
              </CopyToClipboard>
            </center>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
