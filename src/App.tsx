import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Box, Typography } from "@mui/material";
// import bgImage from "./assets/bg-tech-glade.svg";
import MainButton from "./components/MainButton";

import "./App.css";

const App: React.FunctionComponent = () => {
  return (
    <Box
      sx={{
        // backgroundImage: `url("${bgImage}")`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        width: "80vw",
        height: "100vh",
      }}
    >
      <CssBaseline enableColorScheme />
      <Header />

      <Container component="main">
        <Box sx={{ display: "grid", justifyContent: "center", p: 1, m: 1 }}>
          {/* <Box
            sx={{ backgroundColor: "aliceblue", p: 1, m: 1, borderRadius: 3 }}
          > */}
          <Typography style={{ alignSelf: "center" }} variant="h3">
            an AI-powered demo app
          </Typography>
          {/* </Box> */}
          <Box sx={{ display: "grid", justifyContent: "center", p: 1, m: 1 }}>
            <MainButton target="/konvo" text="CONVERSATION" />
            <MainButton target="/apology" text="APOLOGY" />
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
