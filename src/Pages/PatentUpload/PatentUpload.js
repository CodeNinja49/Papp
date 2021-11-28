import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Box from "@material-ui/core/Box";
import GreyButton from "../../Components/GreyButton";
import Button from "@material-ui/core/Button";
import "./Patentupload.scss";
import { ThemeProvider } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import PatentResult from "./PatentResults";
import {
  initPatentUpload,
  reValidateLoading as revalidateAction,
  validateLoading as validateLoadingAction,
  clearUploadData,
} from "../../reducer/Upload/UploadActions";
import defaultTheme from "../../Components/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  crimsonButton: {
    border: "1px solid #DC3027",
    borderRadius: 10,
    fontSize: 12,
    color: "#DC3027",
    height: 40,
    textTransform: "none",
    marginLeft: 10,
    marginRight: 5,
  },
  greyButton: {
    border: "1px solid #3F4752",
    borderRadius: 10,
    fontSize: 12,
    color: "#3F4752",
    height: 40,
    textTransform: "none",
    marginLeft: 10,
  },
}));

export default function FullWidthGrid() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(true);
  const [uploadInput, setuploadInput] = React.useState("");
  const [format, setFormat] = React.useState("ifi");
  const dispatch = useDispatch();
  const { patents, validateLoading, reValidateLoading } = useSelector(
    (state) => state.patentUpload
  );
  const classes = useStyles();
  const handleFormatChange = (event) => {
    setFormat(event.target.value);
  };

  React.useEffect(() => {
    dispatch(clearUploadData());
  }, [dispatch]);

  const validatePatents = () => {
    const patentCode = uploadInput.split(" ");
    const patents = patentCode
      .filter((p) => p.toLowerCase() !== "or")
      .join(",");
    const payload = {
      patents: patents,
      format: format,
      progress_file: "6873247386_1",
      revalidate: "false",
      logfile: "",
      request_source: "patent_upload",
    };
    dispatch(validateLoadingAction());
    dispatch(initPatentUpload(payload));
    expandHandler();
  };

  const reValidatePatents = (otherPatents, modalCloseHandler) => {
    const patentCode = uploadInput.split(" ");
    const patents = patentCode.filter((p) => p.toLowerCase() !== "or");
    const inValidEdited = otherPatents.filter((p) => p.toLowerCase() !== "or");
    const allPatents = [...patents, ...inValidEdited].join(",");
    const payload = {
      patents: allPatents,
      format: format,
      progress_file: "6873247386_1",
      revalidate: "false",
      logfile: "",
      request_source: "patent_upload",
    };
    dispatch(revalidateAction(true));
    dispatch(initPatentUpload(payload, modalCloseHandler));
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setuploadInput(value);
  };
  const clearAll = () => {
    setuploadInput("");
  };
  const selectOptions = (
    <Select
      value={format}
      onChange={handleFormatChange}
      displayEmpty
      className="PatentUpload_FormatSelect"
      inputProps={{ "aria-label": "Without label" }}
      fullWidth
    >
      <MenuItem value="">Select Format</MenuItem>
      <MenuItem value="ifi">Ltd</MenuItem>
      <MenuItem value="minsoft">Minsoft</MenuItem>
      <MenuItem value="orbit">Orbit</MenuItem>
      <MenuItem value="patbase">Patbase</MenuItem>
      <MenuItem value="thomson">Thomson</MenuItem>
      <MenuItem value="totalpatent">Totalpatent</MenuItem>
    </Select>
  );

  const patentInput = (
    <Input
      id="standard-multiline-flexible"
      label=""
      className="PatentUpload_Chipinput"
      multiline
      value={uploadInput}
      fullWidth
      onChange={handleOnChange}
      placeholder="EP-1245651-A3 OR EP-1246069-A3"
      style={{ minHeight: "38px" }}
      {...(expanded ? { rows: 2 } : {})}
    />
  );
  const expandHandler = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="PatentUpload">
      <Typography
        variant="h5"
        component="h5"
        style={{ textAlign: "left", fontWeight: "bold" }}
      >
        {t("UPLOAD_PUBLICATION_NUMBER")}
      </Typography>
      <Paper className="PatentUpload_Paper">
        <ThemeProvider theme={defaultTheme}>
          <Grid container spacing={5}>
            {expanded ? (
              <>
                <Grid item xs={12} sm={4}>
                  {selectOptions}
                </Grid>
                <Grid item xs={12} sm={12}>
                  {patentInput}
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12} sm={6}>
                  {patentInput}
                </Grid>
                <Grid item xs={12} sm={6}>
                  {selectOptions}
                </Grid>
              </>
            )}
          </Grid>
        </ThemeProvider>
        <Box
          paddingTop={3}
          display="flex"
          justifyContent={expanded ? "center" : "end"}
          alignItems="center"
        >
          <GreyButton
            style={{ width: 137, marginTop: 0, marginBottom: 0 }}
            disabled={!uploadInput || !format || validateLoading}
            onClick={validatePatents}
            loading={validateLoading}
            size={24}
          >
            {t("VALIDATE")}
          </GreyButton>
          <Button
            variant="outlined"
            className={classes.crimsonButton}
            onClick={clearAll}
          >
            {t("CLEARALL")}
          </Button>
          <Button
            variant="outlined"
            className={classes.greyButton}
            onClick={expandHandler}
            endIcon={
              expanded ? (
                <ArrowDropUp style={{ fontSize: "30px" }} />
              ) : (
                <ArrowDropDownIcon style={{ fontSize: "30px" }} />
              )
            }
          >
            {t("COLLAPSE")}
          </Button>
        </Box>
      </Paper>
      {patents ? (
        <PatentResult
          patents={patents}
          reValidatePatents={reValidatePatents}
          reValidateLoading={reValidateLoading}
          t={t}
        />
      ) : null}
    </div>
  );
}
