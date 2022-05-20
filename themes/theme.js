import { createTheme } from "@material-ui/core/styles";

const SilentSinTheme = createTheme({
  root: {
    display: "flex",
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#9f3133",
      },
    },
  },
});

export default createTheme(SilentSinTheme);
