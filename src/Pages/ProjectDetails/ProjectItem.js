/* eslint-disable eqeqeq */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import Carousel from "../../Components/Carousel/Carousel";
import Grid from "@material-ui/core/Grid";
import GreyCheckBox from "../../Components/GreyCheckbox";
import GreyRadio from "../../Components/GreyRadiobutton";
import CreateOutlined from "@material-ui/icons/CreateOutlined";
import TextField from "@material-ui/core/TextField";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/AddCircleOutline";
import { ThemeProvider } from "@material-ui/core/styles";
import LazyLoad from "react-lazyload";
import { initMetaDataOnPatent } from "../../reducer/Metadata/MetaDataActions";
import Highlighter from "../../Components/Highlighter";
import { setSelectedPatent } from "../../reducer/Project/ProjectActions";
import DetailsTable from "../../Components/ProjectDetailsTable";
import defaultTheme from "../../Components/theme";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const GreyCheckbox = withStyles({
  root: {
    color: "#3f4752",
    "&$checked": {
      color: "#3f4752",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function MetaFieldsPatent({ itemData, template_completeData, user }) {
  const { Metadata } = itemData;
  const [metaFieldRadio, setMetaFieldRadio] = React.useState({});
  const [metaFieldText, setMetaFieldText] = React.useState({});
  const [metaFieldCheck, setMetaFieldCheck] = React.useState({});
  const [activeEditText, setActiveEditText] = React.useState("");
  const [newMetaText, setNewMetaText] = React.useState("");
  const [isAdd, setIsAdd] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const result = Object.keys(Metadata).reduce((newObj, meta) => {
      for (var i = 0; i < Metadata[meta].length; i++) {
        const val = Metadata[meta][i] ? Metadata[meta][i].value : "";
        const { type } = template_completeData.filter(
          (tmp) => tmp.id == meta
        )[0];
        newObj[type] = newObj[type]
          ? {
              ...newObj[type],
              [meta]: [...(newObj[type][meta] ? newObj[type][meta] : []), val],
            }
          : { [meta]: [val] };
      }
      return newObj;
    }, {});
    setMetaFieldRadio({ ...metaFieldRadio, ...result["radio_box"] });
    setMetaFieldText({ ...metaFieldText, ...result["text"] });
    setMetaFieldCheck({ ...metaFieldCheck, ...result["check_box"] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Metadata]);

  const updateTextMeta = (e, meta, inputIndex) => {
    const {
      target: { value },
    } = e;
    const newArr = { ...metaFieldText };
    newArr[meta][inputIndex] = value;
    setMetaFieldText(newArr);
  };

  const updateNewTextMeta = (meta) => {
    const newArr = { ...metaFieldText };
    setIsAdd(!isAdd);
    const previousValues = metaFieldText[meta] ? metaFieldText[meta] : [];
    if (newMetaText) {
      newArr[meta] = [...previousValues, newMetaText];
      setMetaFieldText(newArr);

      const payload = {
        patentno: itemData.PublicationNumber,
        app_id: "2",
        action: "edit",
        metadata_arr: newArr[meta]
          ? newArr[meta].map((val) => {
              return {
                value: val,
                last_updated: new Date().toISOString(),
                user_id: user.user_id,
              };
            })
          : [],
        destinationMetaValue: newMetaText,
        sourceMetaValue: "",
        metadataId: meta,
      };
      dispatch(initMetaDataOnPatent(payload));
      setNewMetaText("");
    }
  };

  const updateRadio = (meta, id) => {
    const newArr = { ...metaFieldRadio };
    newArr[meta] = [id];
    const payload = {
      patentno: itemData.PublicationNumber,
      app_id: "2",
      action: newArr[meta] ? "edit" : "add",
      metadata_arr: [
        {
          value: id,
          last_updated: new Date().toISOString(),
          user_id: user.user_id,
        },
      ],
      destinationMetaValue: id,
      sourceMetaValue: "13",
      metadataId: meta,
    };
    dispatch(initMetaDataOnPatent(payload));
    setMetaFieldRadio(newArr);
  };
  const updateCheckbox = (meta, id, checkBoxValues) => {
    const newArr = { ...metaFieldCheck };
    const previousValues = metaFieldCheck[meta] ? metaFieldCheck[meta] : [];
    newArr[meta] = !checkBoxValues
      ? [...previousValues, id]
      : previousValues.filter((val) => val !== id);
    const payload = {
      patentno: itemData.PublicationNumber,
      app_id: "2",
      action: metaFieldCheck[meta] ? "edit" : "add",
      metadata_arr: newArr[meta]
        ? newArr[meta].map((val) => {
            return {
              value: val,
              last_updated: new Date().toISOString(),
              user_id: user.user_id,
            };
          })
        : [],
      destinationMetaValue: id,
      sourceMetaValue: metaFieldCheck[meta] ? metaFieldCheck[meta][0] : "",
      metadataId: meta,
    };
    dispatch(initMetaDataOnPatent(payload));
    setMetaFieldCheck(newArr);
  };

  const deleteMetaText = (meta, inputIndex, value) => {
    const newArr = { ...metaFieldText };
    newArr[meta].splice(inputIndex, 1);
    setMetaFieldText(newArr);
    const payload = {
      patentno: itemData.PublicationNumber,
      app_id: "2",
      action: "delete",
      metadata_arr: newArr[meta]
        ? newArr[meta].map((val) => {
            return {
              value: val,
              last_updated: new Date().toISOString(),
              user_id: user.user_id,
            };
          })
        : [],
      destinationMetaValue: value,
      sourceMetaValue: "",
      metadataId: meta,
    };
    dispatch(initMetaDataOnPatent(payload));
  };

  const saveOldMetaChanges = (meta, value, index) => {
    const { value: oldVal } = Array.isArray(Metadata[meta])
      ? Metadata[meta][index]
      : {};
    const payload = {
      patentno: itemData.PublicationNumber,
      app_id: "2",
      action: "edit",
      metadata_arr: metaFieldText[meta]
        ? metaFieldText[meta].map((val) => {
            return {
              value: val,
              last_updated: new Date().toISOString(),
              user_id: user.user_id,
            };
          })
        : [],
      destinationMetaValue: value,
      sourceMetaValue: oldVal ? oldVal : "",
      metadataId: meta,
    };
    dispatch(initMetaDataOnPatent(payload));
    setActiveEditText("");
  };

  return (
    <>
      {Object.keys(Metadata).map((meta, parentIdx) => {
        const temp = template_completeData.filter((temp) => temp.id == meta);
        const res = temp ? temp[0] : [];
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: "42px",
              flexWrap: "wrap",
            }}
            key={meta + parentIdx}
          >
            <span style={{ marginRight: "8px" }}>{res.name}</span>
            {res.sub_templates
              ? res.sub_templates.map((sub, subIdx) => {
                  const checkBoxValues =
                    metaFieldCheck[meta] &&
                    metaFieldCheck[meta].filter((d) => d == sub.id).length;
                  return (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      key={sub.id + subIdx}
                    >
                      {res.type === "radio_box" ? (
                        <GreyRadio
                          name="subMeta"
                          checked={
                            metaFieldRadio[meta] &&
                            metaFieldRadio[meta].filter((d) => d == sub.id)
                              .length
                              ? true
                              : false
                          }
                          onClick={() => updateRadio(meta, sub.id)}
                        />
                      ) : (
                        <GreyCheckBox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          className="GreyCheckbox"
                          checked={checkBoxValues ? true : false}
                          onClick={() =>
                            updateCheckbox(meta, sub.id, checkBoxValues)
                          }
                        />
                      )}
                      <span>{sub.name}</span>
                    </div>
                  );
                })
              : null}
            {res.type === "text" ? (
              <div style={{ marginLeft: "12px" }}>
                <NewMetaInput
                  value={newMetaText}
                  saveNewMetaChanges={() => updateNewTextMeta(meta)}
                  setNewMetaText={setNewMetaText}
                  meta={meta}
                  isAdd={isAdd}
                  setIsAdd={setIsAdd}
                />
              </div>
            ) : null}
            {res.type === "text" && metaFieldText[meta]
              ? metaFieldText[meta].map((val, index) => (
                  <div style={{ marginLeft: "10px" }} key={index}>
                    <MetaInput
                      value={val}
                      hideInput={index === activeEditText}
                      saveOldMetaChanges={() =>
                        saveOldMetaChanges(meta, val, index)
                      }
                      meta={meta}
                      inputIndex={index}
                      updateTextMeta={updateTextMeta}
                      deleteMetaText={deleteMetaText}
                      setActiveEditText={setActiveEditText}
                    />
                  </div>
                ))
              : null}
          </div>
        );
      })}
    </>
  );
}

function MetaInput({
  hideInput,
  value,
  setActiveEditText,
  meta,
  inputIndex,
  updateTextMeta,
  deleteMetaText,
  saveOldMetaChanges,
}) {
  return hideInput ? (
    <TextField
      placeholder="Enter"
      variant="outlined"
      id="outlined-adornment-password"
      type="text"
      className="MetaInput"
      labelWidth={0}
      onBlur={saveOldMetaChanges}
      size="small"
      autoFocus
      value={value}
      onChange={(e) => updateTextMeta(e, meta, inputIndex)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          saveOldMetaChanges();
        }
      }}
    />
  ) : (
    <div className="TextContainer">
      <span style={{ marginLeft: "7px", marginRight: "6px" }}>{value}</span>
      <CreateOutlined
        fontSize="small"
        className="TextContainer_icon"
        onClick={() => setActiveEditText(inputIndex)}
      />
      <Delete
        fontSize="small"
        className="TextContainer_icon"
        onClick={() => deleteMetaText(meta, inputIndex, value)}
      />
    </div>
  );
}

function NewMetaInput({
  value,
  setNewMetaText,
  meta,
  isAdd,
  setIsAdd,
  saveNewMetaChanges,
}) {
  return isAdd ? (
    <TextField
      placeholder="Enter"
      variant="outlined"
      id="outlined-adornment-password"
      type="text"
      className="MetaInput"
      labelWidth={0}
      onBlur={saveNewMetaChanges}
      size="small"
      autoFocus
      value={value}
      onChange={(e) => setNewMetaText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          saveNewMetaChanges();
        }
      }}
    />
  ) : (
    <IconButton
      aria-label="add"
      onClick={() => setIsAdd(!isAdd)}
      style={{ fontSize: "1.8rem", color: "#3F4752" }}
    >
      <Add fontSize="inherit" />
    </IconButton>
  );
}

const TEXT_LIMIT = 350;
export default function ProjectItem(props) {
  const {
    classes,
    itemData,
    index,
    template_completeData,
    user,
    selectedPatent,
    isFromShare,
    page,
    pageIndex,
    queryId,
    familyBy,
    t,
    // searchWords = [{ text: "group", className: "red" }],
  } = props;
  const dispatch = useDispatch();
  const [showMore, setShowMore] = React.useState(true);
  const searchWords = useSelector((state) => state.metaData.highlightsKeywords);
  const patentImages = useSelector((state) => state.project.patentImages);
  const images = patentImages[itemData.ucid];

  const setSelectedPatentHandler = (value) => {
    const newArr = selectedPatent.filter((val) => val === value);
    if (newArr.length) {
      const filterArr = selectedPatent.filter((val) => val !== value);
      dispatch(setSelectedPatent([...filterArr]));
      return;
    }
    dispatch(setSelectedPatent([...selectedPatent, value]));
  };

  const checkedPatent = selectedPatent.filter(
    (val) => val === itemData.PublicationNumber
  ).length
    ? true
    : false;
  const abstractData = showMore
    ? itemData.Abstract
    : itemData.Abstract.substring(0, TEXT_LIMIT);
  const url = `https://digidash.xlpat.com/jd/global_dir/patentView.php?page=${page}&current_index=${pageIndex}&family=${familyBy}&query_id=${queryId}`;
  return (
    <div className="ProjectDetails_item">
      <Grid container spacing={0}>
        <Grid item xs={1}>
          <div style={{ padding: "10px" }}>
            <GreyCheckbox
              icon={icon}
              checkedIcon={checkedIcon}
              checked={checkedPatent}
              onClick={() =>
                setSelectedPatentHandler(itemData.PublicationNumber)
              }
            />{" "}
            {index}
          </div>
        </Grid>
        <Grid item xs={11}>
          <div className="ProjectDetails_itemRightDetails">
            <div className="ProjectDetails_item_header">
              <div style={{ color: "#0088cc" }}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Highlighter
                    textToHighlight={itemData.PublicationNumber}
                    searchWords={searchWords}
                  />
                </a>
              </div>
              <div style={{ fontWeight: "bold", marginLeft: 10 }}>
                <Highlighter
                  textToHighlight={itemData.Title}
                  searchWords={searchWords}
                />
              </div>
              <div style={{ marginLeft: "auto" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  className={classes.button}
                  startIcon={<InsertDriveFile />}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      `https://digidash-next-api.xlpat.dev/patentPDF/${itemData.PublicationNumber}`,
                      "_blank"
                    );
                  }}
                >
                  {t("PDF")}
                </Button>
              </div>
            </div>
            <div className="ProjectDetails_abstractData">
              <Highlighter
                textToHighlight={abstractData}
                searchWords={searchWords}
              />
              {itemData.Abstract.length > TEXT_LIMIT ? (
                <div
                  onClick={() => setShowMore(!showMore)}
                  style={{
                    color: "#4836f5",
                    textAlign: "right",
                    cursor: "pointer",
                  }}
                >
                  {showMore ? "Show less" : "Show more"}
                </div>
              ) : null}
            </div>
            <div style={{ marginBottom: "8px" }}>
              <span>
                <b>
                  <Highlighter
                    textToHighlight={t("PUBLICATION_DATE") + ":"}
                    searchWords={searchWords}
                  />
                </b>{" "}
                <Highlighter
                  textToHighlight={itemData.PublicationDate}
                  searchWords={searchWords}
                />
              </span>
              <span style={{ marginLeft: 10 }}>
                <b>
                  <Highlighter
                    textToHighlight={t("EARLIEST_PRIORITY_DATE") + ":"}
                    searchWords={searchWords}
                  />
                </b>{" "}
                <Highlighter
                  textToHighlight={itemData.EarliestPriorityDate}
                  searchWords={searchWords}
                />
              </span>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <span>
                <b>
                  <Highlighter
                    textToHighlight={t("APPLICATION_DATE") + ":"}
                    searchWords={searchWords}
                  />
                </b>{" "}
                <Highlighter
                  textToHighlight={itemData.ApplicationDate}
                  searchWords={searchWords}
                />
              </span>
              <span style={{ marginLeft: 10 }}>
                <b>
                  <Highlighter
                    textToHighlight={t("APPLICATION_NUMBER") + ":"}
                    searchWords={searchWords}
                  />
                </b>{" "}
                <Highlighter
                  textToHighlight={itemData.ApplicationNumber}
                  searchWords={searchWords}
                />
              </span>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <span>
                <b>
                  <Highlighter
                    textToHighlight={t("PRIORITY_DATE") + ":"}
                    searchWords={searchWords}
                  />
                </b>{" "}
                <Highlighter
                  textToHighlight={itemData.PriorityDates.split("|").join(", ")}
                  searchWords={searchWords}
                />
              </span>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <span>
                <b>
                  <Highlighter
                    textToHighlight={t("PRIORITY_NUMBER") + ":"}
                    searchWords={searchWords}
                  />
                </b>{" "}
                <Highlighter
                  textToHighlight={itemData.PriorityNumbers}
                  searchWords={searchWords}
                />
              </span>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <b>
                <Highlighter
                  textToHighlight={t("CLASSIFICATION_IPC") + ":"}
                  searchWords={searchWords}
                />
              </b>{" "}
              <Highlighter
                textToHighlight={itemData.ClassificationIpcr}
                searchWords={searchWords}
              />
            </div>
            <div style={{ marginBottom: "8px" }}>
              <b>
                <Highlighter
                  textToHighlight={t("CLASSIFICATION_CPC") + ":"}
                  searchWords={searchWords}
                />
              </b>
              <Highlighter
                textToHighlight={itemData.ClassificationCpc}
                searchWords={searchWords}
              />
            </div>
            <div style={{ marginBottom: "8px" }}>
              <b>
                <Highlighter
                  textToHighlight={t("CLASSIFICATION_US") + ":"}
                  searchWords={searchWords}
                />
              </b>
              <Highlighter
                textToHighlight={itemData.ClassificationUS}
                searchWords={searchWords}
              />
            </div>
            <div style={{ marginBottom: "8px" }}>
              <b>
                <Highlighter
                  textToHighlight={t("ASSIGNEE") + ":"}
                  searchWords={searchWords}
                />
              </b>
              <Highlighter
                textToHighlight={itemData.Assignees}
                searchWords={searchWords}
              />
            </div>
            <div style={{ marginBottom: "8px" }}>
              <b>
                <Highlighter
                  textToHighlight={t("STANDARIZED_ASSIGNEE") + ":"}
                  searchWords={searchWords}
                />
              </b>
            </div>
            <div style={{ marginBottom: "8px" }}>
              <b>
                <Highlighter
                  textToHighlight={t("INVENTOR") + ":"}
                  searchWords={searchWords}
                />
              </b>
              <Highlighter
                textToHighlight={itemData.Inventors}
                searchWords={searchWords}
              />
            </div>
            <div style={{ marginBottom: "8px" }}>
              <b>{t("METADATA_FIELD")}</b>
              <LazyLoad once>
                {!isFromShare ? (
                  <ThemeProvider theme={defaultTheme}>
                    <MetaFieldsPatent
                      itemData={itemData}
                      template_completeData={template_completeData}
                      user={user}
                    />
                  </ThemeProvider>
                ) : null}
              </LazyLoad>
            </div>
            <div style={{ marginBottom: "8px" }}>
              {/* <b>Comments</b> */}
              {itemData.Profiles && itemData.Profiles.length ? (
                <DetailsTable
                  profiles={itemData.Profiles}
                  patent={itemData.PublicationNumber}
                  isFromShare={isFromShare}
                  t={t}
                />
              ) : null}
              <hr />
            </div>
            <div style={{ padding: "16px" }}>
              {images === "failed" ? (
                <div
                  style={{
                    marginTop: "30px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {t("NO_IMAGES_FOUND")}
                </div>
              ) : !images || images == "" || images == "downloading" ? (
                <div style={{ marginTop: "30px", textAlign: "center" }}>
                  {t("LOADING_IMAGES")}
                </div>
              ) : (
                <LazyLoad height={250} once>
                  <Carousel images={JSON.parse(images)} />
                </LazyLoad>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
