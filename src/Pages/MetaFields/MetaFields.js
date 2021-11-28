import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Prompt } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import Clear from "@material-ui/icons/Clear";
import { useTranslation } from "react-i18next";
import CreateMetaFields, {
  CheckedRadio,
  CheckedgreyBox,
} from "./CreateMetaFields";
import SvgLoader from "../../utils/SvgLoader";
import {
  fetchPreviousMetadata,
  initMetaDataChanges,
  showLoading,
} from "../../reducer/Metadata/MetaDataActions";
import { showMetaLoading } from "../../reducer/common/commonActions";
import { validateMetaData, validateMetaSubmit } from "../../utils/commonUtils";
import ButtonLoader from "../../Components/GreyButton";
import LoaderComponent from "../../Components/LoadingComponenet";
import defaultTheme from "../../Components/theme";
import "./MetaFields.scss";

const useStyles = makeStyles((theme) => ({
  greyButton: {
    border: "1px solid #3F4752",
    borderRadius: 10,
    fontSize: 12,
    color: "#3F4752",
    height: 40,
    textTransform: "none",
    marginLeft: 10,
  },
  inputIconEnd: {
    marginRight: 0,
    paddingLeft: 0,
    cursor: "pointer",
  },
  crimsonButton: {
    border: "1px solid #DC3027",
    borderRadius: 10,
    fontSize: 12,
    color: "#DC3027",
    height: 40,
    textTransform: "none",
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
  },
}));

const filterOldMetaData = (type, data) => {
  try {
    return data.reduce((newArr, d) => {
      if (d.type === type) {
        newArr.push({ ...d, edit: false });
      }
      return newArr;
    }, []);
  } catch (e) {
    return [];
  }
};

export default function FullWidthGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { previousMetaData, loading } = useSelector((state) => state.metaData);
  const dataLoading = useSelector((state) => state.common.metaLoading);
  const oldTextData = previousMetaData
    ? filterOldMetaData("text", previousMetaData)
    : [];
  const oldRadioData = previousMetaData
    ? filterOldMetaData("radio_box", previousMetaData)
    : [];
  const oldCheckData = previousMetaData
    ? filterOldMetaData("check_box", previousMetaData)
    : [];
  const [oldTextMetaDatas, setTextOldMetaDatas] = React.useState([]);
  const [oldRadioMetaDatas, setRadioOldMetaDatas] = React.useState([]);
  const [oldChoiceMetaDatas, setChoiceOldMetaDatas] = React.useState([]);
  const [newTextMetaDatas, setTextNewMetaDatas] = React.useState([]);
  const [newRadioMetaDatas, setRadioNewMetaDatas] = React.useState([]);
  const [newChoiceMetaDatas, setChoiceNewMetaDatas] = React.useState([]);
  const [deletedMetaDatas, setMetaDataToDelete] = React.useState([]);
  const [showPrompt, setShowPrompt] = React.useState(false);

  const addTextField = (value) => {
    setTextNewMetaDatas([...newTextMetaDatas, value]);
    setShowPrompt(true);
  };
  const addRadioField = (value) => {
    setRadioNewMetaDatas([...newRadioMetaDatas, value]);
    setShowPrompt(true);
  };
  const addCheckBoxField = (value) => {
    setChoiceNewMetaDatas([...newChoiceMetaDatas, value]);
    setShowPrompt(true);
  };
  React.useEffect(() => {
    dispatch(showMetaLoading(true));
    dispatch(fetchPreviousMetadata());
  }, [dispatch]);

  React.useEffect(() => {
    setTextOldMetaDatas([...oldTextData]);
    setRadioOldMetaDatas(oldRadioData);
    setChoiceOldMetaDatas(oldCheckData);

    setTextNewMetaDatas([]);
    setRadioNewMetaDatas([]);
    setChoiceNewMetaDatas([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previousMetaData]);
  const editField = (index, datas, setValue) => {
    const copy = [...datas];
    copy[index] = { ...datas[index], edit: true };
    setValue(copy);
  };

  const editNames = (e, index, datas, setNameValue) => {
    const copy = [...datas];
    copy[index] = { ...datas[index], name: e.target.value };
    setNameValue(copy);
    setShowPrompt(true);
  };

  const updateSubTemplate = (e, index, subIndex, datas, setValue) => {
    const copy = [...datas];
    copy[index].sub_templates[subIndex].name = e.target.value;
    setValue(copy);
    setShowPrompt(true);
  };

  const removeOption = (index, subIndex, datas, setValue) => {
    const copy = [...datas];
    if (copy[index].edit) {
      copy[index].sub_templates.splice(subIndex, 1);
      setValue(copy);
      setShowPrompt(true);
    }
  };
  const applyMetaData = () => {
    const newMetaObj = [
      ...newTextMetaDatas,
      ...newRadioMetaDatas,
      ...newChoiceMetaDatas,
    ];
    const oldMetaobj = [
      ...oldTextMetaDatas,
      ...oldRadioMetaDatas,
      ...oldChoiceMetaDatas,
    ];
    const isValidOld = validateMetaData(oldMetaobj);
    if (newMetaObj.length || isValidOld.length || deletedMetaDatas.length) {
      const payload = {
        insertTemplate: newMetaObj,
        editTemplate: isValidOld,
        deleteTemplate: deletedMetaDatas,
      };
      dispatch(showLoading(true));
      dispatch(initMetaDataChanges(payload));
      setShowPrompt(false);
    }
  };
  const deleteMetaData = (index, datas, setValue, type) => {
    const copy = [...datas];
    if (type !== "old" && !deletedMetaDatas.length) {
      setShowPrompt(false);
    }
    if (type === "old") {
      setMetaDataToDelete([...deletedMetaDatas, datas[index]]);
      setShowPrompt(true);
    }
    copy.splice(index, 1);
    setValue(copy);
  };
  const oldMetaobj = [
    ...oldTextMetaDatas,
    ...oldRadioMetaDatas,
    ...oldChoiceMetaDatas,
  ];
  const resultObj = [
    ...oldTextMetaDatas,
    ...oldRadioMetaDatas,
    ...oldChoiceMetaDatas,
    ...newTextMetaDatas,
    ...newRadioMetaDatas,
    ...newChoiceMetaDatas,
  ];
  const { t } = useTranslation();
  return (
    <div className="MetaFields">
      {showPrompt ? (
        <Prompt
          when={
            newTextMetaDatas.length ||
            newRadioMetaDatas.length ||
            newChoiceMetaDatas.length ||
            validateMetaData(oldMetaobj).length ||
            deletedMetaDatas.length
          }
          message={t("UNSAVED_CHANGES_ALERT")}
        />
      ) : null}
      <Typography
        variant="h5"
        component="h5"
        style={{ textAlign: "left", fontWeight: "bold" }}
      >
        {t("ADD_METADATA_FIELDS")}
      </Typography>
      <ThemeProvider theme={defaultTheme}>
        <CreateMetaFields
          classes={classes}
          setNewMetaDatas={addTextField}
          setRadioNewMetaDatas={addRadioField}
          setCheckboxNewMetaDatas={addCheckBoxField}
          t={t}
        />
      </ThemeProvider>
      {newTextMetaDatas.length ||
      newRadioMetaDatas.length ||
      oldTextMetaDatas.length ||
      oldRadioMetaDatas.length ||
      oldChoiceMetaDatas.length ||
      newChoiceMetaDatas.length ? (
        <ThemeProvider theme={defaultTheme}>
          <Paper className="MetaFields_resultPaper">
            <p className="MetaFields_resultPaper_title">
              {t("PREVIOUS_METADATA_FIELDS")}
            </p>
            <p style={{ textAlign: "left", margin: 0 }}>
              ({t("CLICK_FIELD_NAME_TO_EDIT_DELETE")})
            </p>
            {newTextMetaDatas.length || oldTextMetaDatas.length ? (
              <Paper className="MetaFields_resultType">
                <p>{t("TEXT_FIELD")}</p>
                {oldTextMetaDatas.map((textField, idx) => (
                  <React.Fragment key={idx}>
                    {idx !== 0 ? <hr style={{ opacity: 0.2 }} /> : null}
                    <Grid container spacing={2}>
                      <Grid item sm={9} xs={12}>
                        <TextField
                          placeholder={t("ENTER_FIELD_NAME")}
                          fullWidth
                          inputProps={{ "aria-label": "description" }}
                          value={textField.name}
                          disabled={!textField.edit}
                          onChange={(e) =>
                            editNames(
                              e,
                              idx,
                              oldTextMetaDatas,
                              setTextOldMetaDatas
                            )
                          }
                          error={!textField.name}
                          helperText={!textField.name ? "Required" : null}
                        />
                      </Grid>
                      <Grid
                        item
                        sm={3}
                        xs={12}
                        className="MetaFields_resultType_buttonGroup"
                      >
                        <label>{t("ACTION")}:</label>
                        <IconButton
                          aria-label="edit"
                          title="edit"
                          className={classes.margin}
                          onClick={() =>
                            editField(
                              idx,
                              oldTextMetaDatas,
                              setTextOldMetaDatas
                            )
                          }
                        >
                          <SvgLoader
                            xlinkHref="#editIcon"
                            className="editIcon"
                          />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          title="delete"
                          className={classes.margin}
                          onClick={() =>
                            deleteMetaData(
                              idx,
                              oldTextMetaDatas,
                              setTextOldMetaDatas,
                              "old"
                            )
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                ))}
                {newTextMetaDatas.map((textField, idx) => (
                  <React.Fragment key={idx}>
                    {idx !== 0 ? <hr style={{ opacity: 0.2 }} /> : null}
                    <Grid container spacing={2}>
                      <Grid item sm={9} xs={12}>
                        <TextField
                          placeholder={t("ENTER_FIELD_NAME")}
                          fullWidth
                          inputProps={{ "aria-label": "description" }}
                          value={textField.name}
                          disabled={!textField.edit}
                          onChange={(e) =>
                            editNames(
                              e,
                              idx,
                              newTextMetaDatas,
                              setTextNewMetaDatas
                            )
                          }
                          error={!textField.name}
                          helperText={!textField.name ? "Required" : null}
                        />
                      </Grid>
                      <Grid
                        item
                        sm={3}
                        xs={12}
                        className="MetaFields_resultType_buttonGroup"
                      >
                        <label>{t("ACTION")}:</label>
                        <IconButton
                          aria-label="edit"
                          title="edit"
                          className={classes.margin}
                          onClick={() =>
                            editField(
                              idx,
                              newTextMetaDatas,
                              setTextNewMetaDatas
                            )
                          }
                        >
                          <SvgLoader
                            xlinkHref="#editIcon"
                            className="editIcon"
                          />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          title="delete"
                          className={classes.margin}
                          onClick={() =>
                            deleteMetaData(
                              idx,
                              newTextMetaDatas,
                              setTextNewMetaDatas,
                              "new"
                            )
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                ))}
              </Paper>
            ) : null}
            {newRadioMetaDatas.length || oldRadioMetaDatas.length ? (
              <Paper className="MetaFields_resultType">
                <p>{t("MULTIPLE_CHOICE")}</p>
                {oldRadioMetaDatas.map((radioObj, index) => (
                  <React.Fragment key={index}>
                    {index !== 0 ? <hr style={{ opacity: 0.2 }} /> : null}
                    <Grid container spacing={2}>
                      <Grid item sm={9} xs={12}>
                        <TextField
                          placeholder={t("ENTER_OPTION")}
                          fullWidth
                          inputProps={{ "aria-label": "description" }}
                          value={radioObj.name}
                          disabled={!radioObj.edit}
                          onChange={(e) =>
                            editNames(
                              e,
                              index,
                              oldRadioMetaDatas,
                              setRadioOldMetaDatas
                            )
                          }
                          error={!radioObj.name}
                          helperText={!radioObj.name ? "Required" : null}
                        />
                        <Grid
                          container
                          spacing={5}
                          style={{ marginTop: 8, marginBottom: 6 }}
                        >
                          {radioObj.sub_templates.map((field, idx) => (
                            <Grid
                              item
                              sm={6}
                              xs={12}
                              style={{ paddingBottom: 0 }}
                              key={idx}
                            >
                              <TextField
                                placeholder={t("ENTER_OPTION")}
                                fullWidth
                                inputProps={{ "aria-label": "description" }}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <CheckedRadio
                                        style={{
                                          marginRight: 0,
                                          paddingLeft: 0,
                                        }}
                                      />
                                    </InputAdornment>
                                  ),
                                  endAdornment:
                                    idx !== 0 ? (
                                      <InputAdornment position="end">
                                        <Clear
                                          className={classes.inputIconEnd}
                                          onClick={() =>
                                            removeOption(
                                              index,
                                              idx,
                                              oldRadioMetaDatas,
                                              setRadioOldMetaDatas
                                            )
                                          }
                                        />
                                      </InputAdornment>
                                    ) : null,
                                }}
                                onChange={(e) =>
                                  updateSubTemplate(
                                    e,
                                    index,
                                    idx,
                                    oldRadioMetaDatas,
                                    setRadioOldMetaDatas
                                  )
                                }
                                value={field.name}
                                disabled={!radioObj.edit}
                                error={!field.name}
                                helperText={!field.name ? "Required" : null}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        sm={3}
                        xs={12}
                        className="MetaFields_resultType_buttonGroup"
                      >
                        <label>{t("ACTION")}:</label>
                        <IconButton
                          aria-label="edit"
                          title="edit"
                          className={classes.margin}
                          onClick={() =>
                            editField(
                              index,
                              oldRadioMetaDatas,
                              setRadioOldMetaDatas
                            )
                          }
                        >
                          <SvgLoader
                            xlinkHref="#editIcon"
                            className="editIcon"
                          />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          title="delete"
                          className={classes.margin}
                          onClick={() =>
                            deleteMetaData(
                              index,
                              oldRadioMetaDatas,
                              setRadioOldMetaDatas,
                              "old"
                            )
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                ))}
                {newRadioMetaDatas.map((radioObj, index) => (
                  <React.Fragment key={index}>
                    {index !== 0 ? <hr style={{ opacity: 0.2 }} /> : null}
                    <Grid container spacing={2}>
                      <Grid item sm={9} xs={12}>
                        <TextField
                          placeholder={t("ENTER_FIELD_NAME")}
                          fullWidth
                          inputProps={{ "aria-label": "description" }}
                          value={radioObj.name}
                          disabled={!radioObj.edit}
                          onChange={(e) =>
                            editNames(
                              e,
                              index,
                              newRadioMetaDatas,
                              setRadioNewMetaDatas
                            )
                          }
                          error={!radioObj.name}
                          helperText={!radioObj.name ? "Required" : null}
                        />
                        <Grid
                          container
                          spacing={5}
                          style={{ marginTop: 8, marginBottom: 6 }}
                        >
                          {radioObj.sub_templates.map((field, idx) => (
                            <Grid
                              item
                              sm={6}
                              xs={12}
                              style={{ paddingBottom: 0 }}
                              key={idx}
                            >
                              <TextField
                                placeholder={t("ENTER_OPTION")}
                                fullWidth
                                inputProps={{ "aria-label": "description" }}
                                onChange={(e) =>
                                  updateSubTemplate(
                                    e,
                                    index,
                                    idx,
                                    newRadioMetaDatas,
                                    setRadioNewMetaDatas
                                  )
                                }
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <CheckedRadio
                                        style={{
                                          marginRight: 0,
                                          paddingLeft: 0,
                                        }}
                                      />
                                    </InputAdornment>
                                  ),
                                  endAdornment:
                                    idx !== 0 ? (
                                      <InputAdornment position="end">
                                        <Clear
                                          className={classes.inputIconEnd}
                                          onClick={() =>
                                            removeOption(
                                              index,
                                              idx,
                                              newRadioMetaDatas,
                                              setRadioNewMetaDatas
                                            )
                                          }
                                        />
                                      </InputAdornment>
                                    ) : null,
                                }}
                                value={field.name}
                                disabled={!radioObj.edit}
                                error={!field.name}
                                helperText={!field.name ? "Required" : null}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        sm={3}
                        xs={12}
                        className="MetaFields_resultType_buttonGroup"
                      >
                        <label>{t("ACTION")}:</label>
                        <IconButton
                          aria-label="edit"
                          title="edit"
                          className={classes.margin}
                          onClick={() =>
                            editField(
                              index,
                              newRadioMetaDatas,
                              setRadioNewMetaDatas
                            )
                          }
                        >
                          <SvgLoader
                            xlinkHref="#editIcon"
                            className="editIcon"
                          />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          title="delete"
                          className={classes.margin}
                          onClick={() =>
                            deleteMetaData(
                              index,
                              newRadioMetaDatas,
                              setRadioNewMetaDatas,
                              "new"
                            )
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                ))}
              </Paper>
            ) : null}
            {newChoiceMetaDatas.length || oldChoiceMetaDatas.length ? (
              <Paper className="MetaFields_resultType">
                <p>{t("CHECKBOX")}</p>
                {oldChoiceMetaDatas.map((checkObj, idx) => (
                  <React.Fragment key={idx}>
                    {idx !== 0 ? <hr style={{ opacity: 0.2 }} /> : null}
                    <Grid container spacing={2}>
                      <Grid item sm={9} xs={12}>
                        <TextField
                          placeholder={t("ENTER_FIELD_NAME")}
                          fullWidth
                          inputProps={{ "aria-label": "description" }}
                          value={checkObj.name}
                          disabled={!checkObj.edit}
                          onChange={(e) =>
                            editNames(
                              e,
                              idx,
                              oldChoiceMetaDatas,
                              setChoiceOldMetaDatas
                            )
                          }
                          error={!checkObj.name}
                          helperText={!checkObj.name ? "Required" : null}
                        />
                        <Grid
                          container
                          spacing={5}
                          style={{ marginTop: 8, marginBottom: 6 }}
                        >
                          {checkObj.sub_templates.map((field, index) => (
                            <Grid
                              item
                              sm={6}
                              xs={12}
                              style={{ paddingBottom: 0 }}
                              key={index}
                            >
                              <TextField
                                placeholder={t("ENTER_OPTION")}
                                fullWidth
                                inputProps={{ "aria-label": "description" }}
                                value={field.name}
                                onChange={(e) =>
                                  updateSubTemplate(
                                    e,
                                    idx,
                                    index,
                                    oldChoiceMetaDatas,
                                    setChoiceOldMetaDatas
                                  )
                                }
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <CheckedgreyBox
                                        style={{
                                          marginRight: 0,
                                          paddingLeft: 0,
                                        }}
                                      />
                                    </InputAdornment>
                                  ),
                                  endAdornment:
                                    index !== 0 ? (
                                      <InputAdornment position="end">
                                        <Clear
                                          className={classes.inputIconEnd}
                                          onClick={() =>
                                            removeOption(
                                              idx,
                                              index,
                                              oldChoiceMetaDatas,
                                              setChoiceOldMetaDatas
                                            )
                                          }
                                        />
                                      </InputAdornment>
                                    ) : null,
                                }}
                                disabled={!checkObj.edit}
                                error={!field.name}
                                helperText={!field.name ? "Required" : null}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        sm={3}
                        xs={12}
                        className="MetaFields_resultType_buttonGroup"
                      >
                        <label>{t("ACTION")}:</label>
                        <IconButton
                          aria-label="edit"
                          title="edit"
                          className={classes.margin}
                          onClick={() =>
                            editField(
                              idx,
                              oldChoiceMetaDatas,
                              setChoiceOldMetaDatas
                            )
                          }
                        >
                          <SvgLoader
                            xlinkHref="#editIcon"
                            className="editIcon"
                          />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          title="delete"
                          className={classes.margin}
                          onClick={() =>
                            deleteMetaData(
                              idx,
                              oldChoiceMetaDatas,
                              setChoiceOldMetaDatas,
                              "old"
                            )
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                ))}
                {newChoiceMetaDatas.map((checkObj, idx) => (
                  <React.Fragment key={idx}>
                    {idx !== 0 ? <hr style={{ opacity: 0.2 }} /> : null}
                    <Grid container spacing={2}>
                      <Grid item sm={9} xs={12}>
                        <TextField
                          placeholder={t("ENTER_FIELD_NAME")}
                          fullWidth
                          inputProps={{ "aria-label": "description" }}
                          value={checkObj.name}
                          disabled={!checkObj.edit}
                          onChange={(e) =>
                            editNames(
                              e,
                              idx,
                              newChoiceMetaDatas,
                              setChoiceNewMetaDatas
                            )
                          }
                          error={!checkObj.name}
                          helperText={!checkObj.name ? "Required" : null}
                        />
                        <Grid
                          container
                          spacing={5}
                          style={{ marginTop: 8, marginBottom: 6 }}
                        >
                          {checkObj.sub_templates.map((field, index) => (
                            <Grid
                              item
                              sm={6}
                              xs={12}
                              style={{ paddingBottom: 0 }}
                              key={index}
                            >
                              <TextField
                                placeholder={t("ENTER_OPTION")}
                                fullWidth
                                inputProps={{ "aria-label": "description" }}
                                value={field.name}
                                onChange={(e) =>
                                  updateSubTemplate(
                                    e,
                                    idx,
                                    index,
                                    newChoiceMetaDatas,
                                    setChoiceNewMetaDatas
                                  )
                                }
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <CheckedgreyBox
                                        style={{
                                          marginRight: 0,
                                          paddingLeft: 0,
                                        }}
                                      />
                                    </InputAdornment>
                                  ),
                                  endAdornment:
                                    index !== 0 ? (
                                      <InputAdornment position="end">
                                        <Clear
                                          className={classes.inputIconEnd}
                                          onClick={() =>
                                            removeOption(
                                              idx,
                                              index,
                                              newChoiceMetaDatas,
                                              setChoiceNewMetaDatas
                                            )
                                          }
                                        />
                                      </InputAdornment>
                                    ) : null,
                                }}
                                disabled={!checkObj.edit}
                                error={!field.name}
                                helperText={!field.name ? "Required" : null}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        sm={3}
                        xs={12}
                        className="MetaFields_resultType_buttonGroup"
                      >
                        <label>{t("ACTION")}:</label>
                        <IconButton
                          aria-label="edit"
                          title="edit"
                          className={classes.margin}
                          onClick={() =>
                            editField(
                              idx,
                              newChoiceMetaDatas,
                              setChoiceNewMetaDatas
                            )
                          }
                        >
                          <SvgLoader
                            xlinkHref="#editIcon"
                            className="editIcon"
                          />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          title="delete"
                          className={classes.margin}
                          onClick={() =>
                            deleteMetaData(
                              idx,
                              newChoiceMetaDatas,
                              setChoiceNewMetaDatas,
                              "new"
                            )
                          }
                          itemProp={{ title: "delete" }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                ))}
              </Paper>
            ) : null}
          </Paper>
        </ThemeProvider>
      ) : (
        dataLoading && <LoaderComponent />
      )}
      {newTextMetaDatas.length ||
      newRadioMetaDatas.length ||
      oldTextMetaDatas.length ||
      oldRadioMetaDatas.length ||
      oldChoiceMetaDatas.length ||
      newChoiceMetaDatas.length ||
      deletedMetaDatas.length ? (
        <Box mt={3} style={{ display: "flex", justifyContent: "center" }}>
          <ButtonLoader
            loading={loading}
            size={24}
            variant="outlined"
            className={classes.crimsonButton}
            onClick={applyMetaData}
            disabled={validateMetaSubmit(resultObj) || loading}
          >
            {t("APPLY_CHANGES")}
          </ButtonLoader>
        </Box>
      ) : null}
    </div>
  );
}
