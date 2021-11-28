import React from "react";
import { useSelector } from "react-redux";
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
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import GreyCheckBox from "../../Components/GreyCheckbox";
import GreyRadio from "../../Components/GreyRadiobutton";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Svgloader from "../../utils/SvgLoader";
import defaultTheme from "../../Components/theme";
import Greybutton from "../../Components/GreyButton";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  greyContainedBtn: {
    borderRadius: 12,
    fontSize: 12,
    color: "#3F4752",
    textTransform: "none",
    height: 40,
    width: 120,
    border: "1px solid #3F4752",
    marginTop: 15,
  },
}));

const exportBiblioColumns = [
  {
    value: "Abstract",
  },
  {
    value: "Application Date",
  },
  {
    value: "Application Number",
  },
  {
    value: "Assignees",
  },
  {
    value: "CPC Classification",
  },
  // {
  //   value: "EP Classification",
  // },
  {
    value: "Earliest Priority Date",
  },
  {
    value: "Earliest Priority Number",
  },
  {
    value: "Family Members",
  },
  {
    value: "IPC Classification",
  },
  {
    value: "Inventors",
  },
  {
    value: "Priority Date",
  },
  {
    value: "Priority Number",
  },
  {
    value: "Publication Date",
  },
  {
    value: "Publication Number",
  },
  {
    value: "Title",
  },
  {
    value: "US Classification",
  },
];

const customColumns = [
  {
    value: "Title",
  },
  {
    value: "Abstract",
  },
  {
    value: "Claims",
  },
  {
    value: "Description",
  },
  {
    value: "Publication Number",
  },
  {
    value: "Publication Date",
  },
  {
    value: "Application Number",
  },
  {
    value: "Application Date",
  },
  {
    value: "Assignees",
  },
  {
    value: "Inventors",
  },
  {
    value: "Family Members",
  },
  {
    value: "CPC Classification",
  },
  // {
  //   value: "EP Classification",
  // },
  {
    value: "IPC Classification",
  },
  {
    value: "US Classification",
  },
  {
    value: "Earliest Priority Country",
  },
  {
    value: "Earliest Priority Date",
  },
  {
    value: "Earliest Priority Number",
  },
  {
    value: "Legal Status",
  },
  {
    value: "Priority Date",
  },
  // {
  //   value: "Standardized Assignees",
  // },
  {
    value: "Metadata",
  },
];

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

export default function ExportPatents({
  open,
  handleClose,
  handleSubmit,
  selectedPatent,
  t,
}) {
  const classes = useStyles();
  const exportloading = useSelector((state) => state.project.exportloading);
  const [valueRange, setValueRange] = React.useState("complete");
  const [exportType, setExportType] = React.useState("xlsx");
  const [tab, setTab] = React.useState(1);
  const [customSelected, setCustomSelected] = React.useState([
    "Publication Number",
  ]);
  const [range, setRange] = React.useState({ from: "", to: "" });
  const handleValueRange = (event) => {
    setValueRange(event.target.value);
  };
  const handleExport = (event) => {
    setExportType(event.target.value);
  };
  const customExported = (value) => {
    const newArr = customSelected.filter((val) => val === value);
    if (newArr.length) {
      const filterArr = customSelected.filter((val) => val !== value);
      setCustomSelected([...filterArr]);
      return;
    }
    setCustomSelected([...customSelected, value]);
  };
  const selectAll = (e) => {
    if (e.target.checked) {
      const allVal = customColumns.map((c) => c.value);
      setCustomSelected([...allVal]);
    } else {
      setCustomSelected(["Publication Number"]);
    }
  };
  const rangeFromHandler = (e) => {
    setRange({ ...range, from: e.target.value });
  };
  const rangeToHandler = (e) => {
    setRange({ ...range, to: e.target.value });
  };
  const exportClick = () => {
    const column =
      tab === 1 ? exportBiblioColumns.map((col) => col.value) : customSelected;
    handleSubmit(exportType, valueRange, range, column);
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
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {t("EXPORT_PATENTS")}
        <div style={{ fontSize: 12 }}>{t("EXPORT_DOWNLOAD_MSG")}</div>
      </DialogTitle>
      <DialogContent dividers className="ExportPatent">
        <ThemeProvider theme={defaultTheme}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={8}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  size="large"
                  className={
                    tab === 1
                      ? "ExportPatent_activeButtonTab"
                      : "ExportPatent_buttonTab"
                  }
                  onClick={() => setTab(1)}
                  style={{ marginRight: "15px" }}
                >
                  Bibliography Data
                </Button>
                <div class="verticalHR" />
                <Button
                  variant="outlined"
                  size="large"
                  className={
                    tab === 2
                      ? "ExportPatent_activeButtonTab"
                      : "ExportPatent_buttonTab"
                  }
                  onClick={() => setTab(2)}
                  style={{ marginLeft: "15px" }}
                >
                  Custom
                </Button>
              </div>
              {tab === 1 ? (
                <div style={{ marginTop: "32px" }}>
                  <Grid container spacing={3}>
                    {exportBiblioColumns.map((col, index) => (
                      <Grid
                        item
                        xs={6}
                        style={{
                          display: "flex",
                          justifyContent: index % 2 ? "center" : "right",
                          padding: 0,
                        }}
                        key={col.value + index}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "215px",
                          }}
                        >
                          <GreyCheckBox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            checked={true}
                            disabled
                          />
                          <span>{col.value}</span>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              ) : (
                <div style={{ marginTop: "32px" }}>
                  <Grid container spacing={3}>
                    <Grid
                      item
                      xs={6}
                      style={{
                        display: "flex",
                        justifyContent: "right",
                        padding: 0,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "215px",
                        }}
                      >
                        <GreyCheckBox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          checked={
                            customSelected.length === customColumns.length
                          }
                          onClick={(e) => selectAll(e)}
                        />
                        <span>All</span>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: 0,
                      }}
                    />
                    {customColumns.map((col, index) => (
                      <Grid
                        item
                        xs={6}
                        style={{
                          display: "flex",
                          justifyContent: index % 2 ? "center" : "right",
                          padding: 0,
                        }}
                        key={col.value + index}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "215px",
                          }}
                        >
                          <GreyCheckBox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            checked={
                              customSelected.filter((val) => val === col.value)
                                .length
                                ? true
                                : false
                            }
                            onClick={() => customExported(col.value)}
                            disabled={col.value === "Publication Number"}
                          />
                          <span>{col.value}</span>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              )}
            </Grid>
            <Grid item xs={6} md={4}>
              <Paper className="ExportPatent_rightgrid">
                <p
                  style={{
                    marginBottom: "10px",
                    marginTop: 0,
                    fontWeight: "bold",
                  }}
                >
                  {t("EXPORT_FILTERS")}
                </p>
                <div>
                  <Paper style={{ padding: "20px", borderRadius: "18px" }}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="value_range"
                        name="value_range"
                        value={valueRange}
                        onChange={handleValueRange}
                      >
                        <FormControlLabel
                          value="complete"
                          control={<GreyRadio />}
                          label="Complete List (max 10000)"
                          className="ExportPatent_FormControlLabel"
                        />
                        <FormControlLabel
                          value="selected"
                          control={<GreyRadio />}
                          label={`Selected (${selectedPatent.length})`}
                          className="ExportPatent_FormControlLabel"
                          disabled={selectedPatent.length ? false : true}
                        />
                        <FormControlLabel
                          value="range"
                          control={<GreyRadio />}
                          label={
                            <div>
                              {t("RANGE")}:{" "}
                              <Input
                                style={{
                                  maxWidth: "30px",
                                  marginLeft: "8px",
                                  marginRight: "8px",
                                }}
                                value={range.from}
                                onChange={rangeFromHandler}
                              />{" "}
                              to{" "}
                              <Input
                                style={{ maxWidth: "30px", marginLeft: "8px" }}
                                value={range.to}
                                onChange={rangeToHandler}
                              />
                            </div>
                          }
                          className="ExportPatent_FormControlLabel"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Paper>
                </div>
                <div style={{ marginTop: "16px" }}>
                  <Paper style={{ padding: "20px", borderRadius: "18px" }}>
                    <p
                      style={{
                        marginBottom: "10px",
                        marginTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      {t("EXPORT_FORMAT")}
                    </p>
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="value_range"
                        name="value_range"
                        value={exportType}
                        onChange={handleExport}
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <FormControlLabel
                          value="xlsx"
                          control={<GreyRadio />}
                          label="XLSX"
                          className="ExportPatent_FormControlLabel"
                        />
                        {/* <FormControlLabel
                          value="pdf"
                          control={<GreyRadio />}
                          label="PDF"
                          className="ExportPatent_FormControlLabel"
                        /> */}
                        <FormControlLabel
                          value="csv"
                          control={<GreyRadio />}
                          label="CSV"
                          className="ExportPatent_FormControlLabel"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Paper>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Greybutton
                    loading={exportloading}
                    disabled={
                      exportloading ||
                      (valueRange === "range" && (!range.from || !range.to))
                    }
                    size={25}
                    variant="outlined"
                    className={classes.greyContainedBtn}
                    startIcon={
                      <Svgloader
                        xlinkHref="#export"
                        style={{
                          width: "15px",
                          height: "15px",
                          fill: "#3F4752",
                          ...(exportloading ? { opacity: 0.5 } : {}),
                        }}
                      />
                    }
                    onClick={exportClick}
                    loaderStyle={{ color: "#3f51b5" }}
                    customStyle={{ transform: "translate(-37%, -19%)" }}
                  >
                    {t("EXPORT")}{" "}
                  </Greybutton>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </ThemeProvider>
      </DialogContent>
    </Dialog>
  );
}
