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
          <Box
            sx={{ backgroundColor: "aliceblue", p: 5, m: 1, borderRadius: 8 }}
          >
            <Typography style={{ alignSelf: "center" }} variant="h4">
              This is a little demo project designed to to demonstrate coding an
              artificial intelligence interface powered by ChatGPT. <br />
              <br />
              Click one of the buttons to give it a try.
            </Typography>
          </Box>
          <Box sx={{ display: "grid", justifyContent: "center", p: 1, m: 1 }}>
            <MainButton target="/konvo" text="make a CONVERSATION" />
            <MainButton target="/apology" text="make an APOLOGY" />
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
