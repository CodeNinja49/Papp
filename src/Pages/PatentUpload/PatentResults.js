import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CircularProgress from "../../Components/CircularProgress";
import ArrowRight from "@material-ui/icons/ArrowRight";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SvgLoader from "../../utils/SvgLoader";
import PatentTable from "./PatentTable";
import SetCitation from "./SetCitation";
import InvalidPatentValidate from "./InvalidPatentValidate";

const useStyles = makeStyles((theme) => ({
  crimsonButton: {
    border: "1px solid #DC3027",
    borderRadius: 12,
    fontSize: 12,
    color: "#DC3027",
    height: 40,
    textTransform: "none",
    marginLeft: 10,
    marginTop: 10,
  },
  greyButton: {
    border: "1px solid #3F4752",
    borderRadius: 12,
    fontSize: 12,
    color: "#3F4752",
    height: 40,
    textTransform: "none",
    marginLeft: 10,
    marginTop: 10,
  },
}));
function createData(name, patent, code, checked = true) {
  return { name, patent, code, checked: checked };
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} paddingBottom={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function PatentResults({
  patents = {},
  reValidatePatents,
  reValidateLoading,
  t,
}) {
  const [value, setValue] = React.useState(0);
  const [validPatents, setValidPatents] = React.useState([]);
  const [multiPatent, setMultiPatent] = React.useState([]);
  const [inValidPatents, setInvalidPatents] = React.useState([]);
  const [open, setopenModal] = React.useState(false);
  const [openInvalidValidate, setInvalidValidate] = React.useState(false);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {
    valid_patents = {},
    pats_with_multiple_matches = [],
    invalid_patents = [],
    log_file,
  } = patents;

  React.useEffect(() => {
    const rows = Object.keys(valid_patents).map((key) => {
      const value = Array.isArray(valid_patents[key])
        ? valid_patents[key].join(",")
        : valid_patents[key];
      return createData(value, key, valid_patents[key]);
    });
    setValidPatents([...rows]);
    setValue(0);
  }, [valid_patents]);

  React.useEffect(() => {
    const rows = Object.keys(pats_with_multiple_matches).reduce((accu, key) => {
      const isArray = Array.isArray(pats_with_multiple_matches[key]);
      if (isArray) {
        const subPatents = pats_with_multiple_matches[key].map((v) =>
          createData(v, key, v)
        );
        accu.push(...subPatents);
      } else {
        accu.push(
          createData(
            pats_with_multiple_matches[key],
            key,
            pats_with_multiple_matches[key]
          )
        );
      }
      return accu;
    }, []);
    setMultiPatent([...rows]);
  }, [pats_with_multiple_matches]);

  React.useEffect(() => {
    const rows = invalid_patents.map((val) => {
      return createData(val, val, val, false);
    });
    setInvalidPatents([...rows]);
  }, [invalid_patents]);

  const multiple_pats = Array.isArray(pats_with_multiple_matches)
    ? pats_with_multiple_matches
    : Object.keys(pats_with_multiple_matches).reduce((final, key) => {
        return [...pats_with_multiple_matches[key], ...final];
      }, []);

  const onValidPatentChange = (e) => {
    const patent = e.target.name;
    const copyValid = [...validPatents];
    if (patent !== "all") {
      const index = validPatents.findIndex((v) => v.patent === patent);
      copyValid[index].checked = e.target.checked;
      setValidPatents([...copyValid]);
    } else {
      const { checked } = e.target;
      const updated = copyValid.reduce((acc, arr) => {
        arr.checked = checked;
        acc.push(arr);
        return acc;
      }, []);
      setValidPatents([...updated]);
    }
  };

  const onMultiSelectChange = (e) => {
    const patent = e.target.name;
    const copyValid = [...multiPatent];
    if (patent !== "all") {
      const index = multiPatent.findIndex((v) => v.patent === patent);
      copyValid[index].checked = e.target.checked;
      setMultiPatent([...copyValid]);
    } else {
      const { checked } = e.target;
      const updated = copyValid.reduce((acc, arr) => {
        arr.checked = checked;
        acc.push(arr);
        return acc;
      }, []);
      setMultiPatent([...updated]);
    }
  };

  const onInvalidSelectChange = (e) => {
    const patent = e.target.name;
    const copyValid = [...inValidPatents];
    if (patent !== "all") {
      const index = inValidPatents.findIndex((v) => v.patent === patent);
      copyValid[index].checked = e.target.checked;
      setInvalidPatents([...copyValid]);
    } else {
      const { checked } = e.target;
      const updated = copyValid.reduce((acc, arr) => {
        arr.checked = checked;
        acc.push(arr);
        return acc;
      }, []);
      setInvalidPatents([...updated]);
    }
  };

  const handleClose = () => {
    setopenModal(false);
  };
  const closeInvalid = () => {
    setInvalidValidate(false);
  };
  const isDisable =
    value === 0
      ? validPatents.filter((v) => v.checked).length
      : value === 1
      ? multiPatent.filter((m) => m.checked).length
      : false;

  return (
    <>
      {open ? (
        <SetCitation
          open={open}
          handleClose={handleClose}
          logFile={log_file}
          patents={value === 0 ? validPatents : multiPatent}
          t={t}
        />
      ) : null}
      {openInvalidValidate ? (
        <InvalidPatentValidate
          open={openInvalidValidate}
          handleClose={closeInvalid}
          patents={inValidPatents}
          reValidatePatents={reValidatePatents}
          reValidateLoading={reValidateLoading}
          t={t}
        />
      ) : null}
      <Paper className="PatentResults">
        <label className="PatentResults_Title">
          {t("PUBLICATION_SEARCH_PATENT")}
        </label>
        <label className="PatentResults_SubTitle">
          ({t("CLICK_FIELD_NAME_EDIT_DELETE")})
        </label>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="inherit"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab
            label={
              <div className="PatentResults_Tab_Label">
                <CircularProgress
                  progressColor="#D6B500"
                  value={Object.keys(valid_patents).length}
                />
                <div className="PatentResults_Tab_Text">
                  <label className="PatentResults_Tab--labelTitle">
                    {t("VALID")}
                  </label>
                  <label className="PatentResults_Tab--label">
                    {t("PATENTS")}
                  </label>
                </div>
                <ArrowRight className="PatentResults_Tab_ArrowRight" />
              </div>
            }
            className="PatentResults_Tab"
            style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
          />
          <Tab
            label={
              <div className="PatentResults_Tab_Label">
                <CircularProgress
                  progressColor="#00AA27"
                  value={multiple_pats.length}
                />
                <div className="PatentResults_Tab_Text">
                  <label className="PatentResults_Tab--labelTitle">
                    {t("PATENTS")}
                  </label>
                  <label className="PatentResults_Tab--label">
                    {t("WITHMULTIPLEPMATCH")}
                  </label>
                </div>
                <ArrowRight className="PatentResults_Tab_ArrowRight" />
              </div>
            }
            className="PatentResults_Tab"
          />
          <Tab
            label={
              <div className="PatentResults_Tab_Label">
                <CircularProgress
                  progressColor="#00AA27"
                  value={invalid_patents.length}
                />
                <div className="PatentResults_Tab_Text">
                  <label className="PatentResults_Tab--labelTitle">
                    {t("INVALID")}
                  </label>
                  <label className="PatentResults_Tab--label">
                    {t("PATENTS")}
                  </label>
                </div>
                <ArrowRight className="PatentResults_Tab_ArrowRight" />
              </div>
            }
            className="PatentResults_Tab"
            style={{
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              width: "34%",
            }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          {validPatents.length ? (
            <PatentTable
              data={validPatents}
              onCheckBoxChange={onValidPatentChange}
              t={t}
            />
          ) : (
            t("NO_RESULTS")
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {multiPatent.length ? (
            <PatentTable
              data={multiPatent}
              onCheckBoxChange={onMultiSelectChange}
              t={t}
            />
          ) : (
            t("NO_RESULTS")
          )}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {inValidPatents.length ? (
            <PatentTable
              data={inValidPatents}
              isInvalid={true}
              onCheckBoxChange={onInvalidSelectChange}
              t={t}
            />
          ) : (
            t("NO_RESULTS")
          )}
        </TabPanel>
      </Paper>
      {value !== 2 ? (
        <Button
          variant="outlined"
          className={classes.crimsonButton}
          disabled={!isDisable}
          onClick={() => setopenModal(true)}
        >
          {t("SET_CITATION_CATEGORY")}
        </Button>
      ) : (
        <Button
          variant="outlined"
          className={classes.greyButton}
          startIcon={
            <SvgLoader
              xlinkHref="#editIcon"
              style={{ height: 22, width: 22, fill: "#3F4752" }}
            />
          }
          onClick={() => setInvalidValidate(true)}
        >
          {t("EDIT_UPLOADED_PATENTS")}
        </Button>
      )}
    </>
  );
}
