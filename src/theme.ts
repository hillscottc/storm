import { createTheme } from "@mui/material/styles";
import { blueGrey, red, blue, green } from "@mui/material/colors";

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
    secondary: {
      main: green[200],
    },
    action: {
      active: blue[400],
    },
  },

  typography: {
    h1: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "4rem",
      },
    },
    h2: {
      fontSize: "3rem",
      "@media (min-width:600px)": {
        fontSize: "6rem",
      },
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#4B8DF8",
          color: "white",
          "&:hover": {
            backgroundColor: "#3A7BD5",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          borderRadius: "4px",
          marginRight: "1rem",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          borderRadius: "4px",
        },
      },
    },
  },
});

export default theme;
