import React from "react";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Filter from "../Filter/Filter";
import MultiSelect from "../../Components/MultiSelect/MultiSelect";

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
  },
}))(MuiDialogContent);

export default function CustomizedDialogs({
  open,
  handleClose,
  closeModalAction,
  t,
}) {
  const formState = useSelector((state) => state.project.formState);
  const projectList = useSelector((state) => state.project.projectList);
  const { codesValue = [], citationValue = [], values = null } = formState;
  const selectedProjectCitationList = codesValue.reduce(
    (citationList, codes) => {
      citationList.push(...codes.data);
      return citationList;
    },
    []
  );
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
      maxWidth="md"
      className="CustomizedDialogs"
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Refine Search
        <div style={{ fontSize: 12 }}>Search patents inside a project code</div>
      </DialogTitle>
      <DialogContent dividers>
        <Paper>
          <Box padding={2.2}>
            <MultiSelect
              label="Project Codes"
              value={codesValue}
              OPTIONS={projectList ? projectList : [{}]}
              displayLabelName="project_code_name"
              isLimittag={false}
              disable={true}
            />
          </Box>
          {citationValue.length ? (
            <Box padding={2.2} display="flex">
              <div className="GlobalSearch_citationLeftBorder"></div>
              <MultiSelect
                label="Citation Category"
                value={citationValue}
                disable={true}
                OPTIONS={
                  selectedProjectCitationList
                    ? selectedProjectCitationList
                    : [{}]
                }
                displayLabelName="citation_category_name"
              />
            </Box>
          ) : null}
        </Paper>
        <Filter
          form="refineSearchForm"
          codesValue={codesValue}
          handleClose={closeModalAction}
          citationValue={citationValue}
          refineValues={values}
          t={t}
          // {...factoryValues}
        />
      </DialogContent>
    </Dialog>
  );
}
