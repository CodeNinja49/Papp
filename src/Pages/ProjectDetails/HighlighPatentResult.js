import React from "react";
import { useDispatch } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { setHighlightKeywords } from "../../reducer/Metadata/MetaDataActions";

const defaultHighlightsArr = [
  { text: "", colorName: "#FF0000", label: "Concept 1", className: "concept1" },
  { text: "", colorName: "#007B00", label: "Concept 2", className: "concept2" },
  { text: "", colorName: "#0031FF", label: "Concept 3", className: "concept3" },
  { text: "", colorName: "#A58B00", label: "Concept 4", className: "concept4" },
  { text: "", colorName: "#C400D5", label: "Concept 5", className: "concept5" },
  { text: "", colorName: "#001E9F", label: "Concept 6", className: "concept6" },
];

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: (props) => props.colorName,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: (props) => props.colorName,
    },
    "& .MuiInput-underline": {
      "&:before": {
        borderBottomColor: (props) => props.colorName,
        borderWidth: 2,
      },
      "&:hover:before": {
        borderBottomColor: (props) => props.colorName,
      },
    },
    "& .MuiInput-input": {
      color: (props) => props.colorName,
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  crimsonButton: {
    border: "1px solid #DC3027",
    borderRadius: 12,
    fontSize: 12,
    color: "#DC3027",
    height: 35,
    textTransform: "none",
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 18,
    paddingRight: 18,
  },
  greyContainedBtn: {
    borderRadius: 12,
    fontSize: 12,
    color: "#fff",
    textTransform: "none",
    height: 35,
    backgroundColor: "#3F4752",
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
    "&:hover": {
      backgroundColor: "rgba(63,71,82, 0.9)",
    },
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

export default function HightlightPatentResult({ open, handleClose, t }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [highlightInputs, setInputValues] = React.useState([
    ...defaultHighlightsArr,
  ]);
  const handleChange = (e, index) => {
    const {
      target: { value },
    } = e;
    const newArr = [...highlightInputs];
    newArr[index].text = value;
    setInputValues([...newArr]);
  };
  const clearInput = (indx) => {
    const newArr = [...highlightInputs];
    newArr[indx].text = "";
    setInputValues([...newArr]);
  };
  const onSubmit = () => {
    dispatch(setHighlightKeywords(highlightInputs));
    handleClose();
  };
  const clearAll = () => {
    dispatch(setHighlightKeywords([]));
    for (let i = 0; i < 6; i++) {
      clearInput(i);
    }
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
        {t("HIGHLIGHT_KEYWORD")}
        <div style={{ fontSize: 12 }}>{t("ENGLISH_AS_INPUT")}</div>
      </DialogTitle>
      <DialogContent dividers className="ExportPatent SharePatents">
        {highlightInputs.map((inputObj, idx) => (
          <Paper
            style={{
              padding: 20,
              backgroundColor: "#F6F7FB",
              marginBottom: "12px",
            }}
            key={inputObj.label}
          >
            <div style={{ fontWeight: "bold", color: inputObj.colorName }}>
              {inputObj.label}
            </div>
            <CssTextField
              id="standard-adornment-weight"
              fullWidth
              value={inputObj.text}
              onChange={(e) => handleChange(e, idx)}
              aria-describedby="standard-weight-helper-text"
              InputProps={{
                "aria-label": "weight",
                endAdornment: (
                  <InputAdornment
                    position="end"
                    style={{ cursor: "pointer" }}
                    onClick={() => clearInput(idx)}
                  >
                    {" "}
                    <CloseIcon />{" "}
                  </InputAdornment>
                ),
              }}
              colorName={inputObj.colorName}
            />
          </Paper>
        ))}
        <Box style={{ textAlign: "center", marginTop: "25px" }}>
          <Button className={classes.crimsonButton} onClick={onSubmit}>
            {t("APPLY_CHANGES")}
          </Button>
          <Button className={classes.greyContainedBtn} onClick={clearAll}>
            {t("CLEARALL")}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
