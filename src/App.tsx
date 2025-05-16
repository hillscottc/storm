import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import bgImage from "./assets/bg-tech-glade.svg";
import InteractionForm from "./pages/InteractionForm";
import theme from "./theme";
import "./App.css";

const USE_BG_IMAGE = true;

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: USE_BG_IMAGE ? `url("${bgImage}")` : "",
          backgroundRepeat: USE_BG_IMAGE ? "no-repeat" : "",
          backgroundSize: USE_BG_IMAGE ? "cover" : "",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <CssBaseline enableColorScheme />
        <Header />

        <Container component="main">
          <Box sx={{ display: "grid", justifyContent: "center", p: 1, m: 1 }}>
            {/* <Box sx={{ display: "grid", justifyContent: "center", p: 1, m: 1 }}>
              <Typography style={{ alignSelf: "center" }} variant="h1">
                an AI-powered demo
              </Typography>
            </Box> */}

            <Box
              sx={{
                display: "grid",
                justifyContent: "center",
                p: 0,
                m: 0,
                width: "100vw",
              }}
            >
              <InteractionForm />
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
