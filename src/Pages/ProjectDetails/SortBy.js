import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowRight from "@material-ui/icons/ArrowRight";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenu1 = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({ root: { paddingBottom: 0 } }))(
  MenuItem
);

export default function CustomizedMenus({
  closeMenu,
  anchorEl,
  handleClick1,
  anchorEl1,
  handleClose1,
  searchByAsc,
  searchByDesc,
  t,
}) {
  return (
    <div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <StyledMenuItem onClick={(e) => handleClick1(e, "pub_date")}>
          <ListItemText primary={t("PUBLICATION_DATE")} />
          <ListItemIcon style={{ display: "flex", justifyContent: "flex-end" }}>
            <ArrowRight fontSize="small" />
          </ListItemIcon>
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleClick1(e, "app_date")}>
          <ListItemText primary={t("APPLICATION_DATE")} />
          <ListItemIcon style={{ display: "flex", justifyContent: "flex-end" }}>
            <ArrowRight fontSize="small" />
          </ListItemIcon>
        </StyledMenuItem>
        <StyledMenuItem onClick={(e) => handleClick1(e, "prior_date")}>
          <ListItemText primary={t("PRIORITY_DATE")} />
          <ListItemIcon style={{ display: "flex", justifyContent: "flex-end" }}>
            <ArrowRight fontSize="small" />
          </ListItemIcon>
        </StyledMenuItem>
      </StyledMenu>
      <StyledMenu1
        id="customized-menu1"
        anchorEl={anchorEl1}
        open={Boolean(anchorEl1)}
        onClose={handleClose1}
      >
        <StyledMenuItem onClick={searchByAsc}>
          <ListItemText primary={t("ASCENDING")} />
        </StyledMenuItem>
        <StyledMenuItem onClick={searchByDesc}>
          <ListItemText primary={t("DESCENDING")} />
        </StyledMenuItem>
      </StyledMenu1>
    </div>
  );
}
