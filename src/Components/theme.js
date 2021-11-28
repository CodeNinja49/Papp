import { createMuiTheme } from "@material-ui/core";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3F4752",
      dark: "#3F4752",
      contrastText: "#fff",
    },
  },
});

export default defaultMaterialTheme;
