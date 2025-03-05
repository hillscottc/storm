import { createTheme } from "@mui/material/styles";
import { blueGrey, red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  status: {
    danger: red[500],
  },
  palette: {
    primary: {
      main: blueGrey[500],
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "4rem",
      },
    },
  },
});

export default theme;
