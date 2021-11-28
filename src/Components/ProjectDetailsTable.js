import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { initPatentAction } from "../reducer/Project/ProjectActions";
import { showLoader } from "../reducer/common/commonActions";
import { showAlert, closeAlert } from "../reducer/alert/alertActions";

function CustomizedTables({ profiles, patent, isFromShare, t }) {
  const dispatch = useDispatch();

  const deleteHandler = (row) => {
    const payload = {
      patentno: patent,
      action: "delete",
      project_data: {
        source_project_code_id: "",
        source_citation_category_id: "",
        target_project_code_id: row.project_code_id,
        target_citation_category_id: row.citation_category_id,
      },
    };
    if (profiles.length === 1) {
      dispatch(showLoader(true));
    }
    dispatch(closeAlert(false));
    dispatch(initPatentAction(payload));
  };

  const onDeleteClick = (row) => {
    const payload = {
      title: t("DELETE_CONFIRM_MSG"),
      body: t("DELETE_ALERT_MSG"),
      btnText1: t("NO"),
      btnText2: t("YES"),
      handleBtn1: () => dispatch(closeAlert(false)),
      handleBtn2: () => deleteHandler(row),
      openAlert: true,
      handleClose: () => dispatch(closeAlert(false)),
    };
    dispatch(showAlert(payload));
  };
  return (
    <table
      aria-label="customized table"
      style={{ marginTop: "15px", marginBottom: "10px" }}
      className="ProjectDetailsTable"
    >
      <thead>
        <tr>
          <th align="center">{t("PROJECT_CODE")}</th>
          <th align="center">{t("CITATION_CATEGORY")}</th>
          <th align="center">{t("ACTION")}</th>
        </tr>
      </thead>
      <tbody>
        {profiles.map((row) => (
          <tr key={row.name}>
            <td align="center">{row.project_code_name}</td>
            <td align="center">{row.citation_category_name}</td>
            <td align="center">
              {!isFromShare ? (
                <IconButton
                  aria-label="delete"
                  style={{ padding: 0 }}
                  onClick={() => onDeleteClick(row)}
                >
                  <DeleteIcon style={{ fill: "#DC3027" }} />
                </IconButton>
              ) : null}
            </td>
          </tr>
        ))}
        {!profiles.length ? (
          <tr key="noData">
            <td align="center" colSpan={2}>
              {t("NO_PROFILE_ASSIGNED")}
            </td>
          </tr>
        ) : null}
      </tbody>
    </table>
  );
}

export default React.memo(CustomizedTables);
