import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import { Link } from "react-router";
import { Box, Button } from "@mui/material";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <CssBaseline enableColorScheme />
      <Header />
      <Container component="main">
        <Box sx={{ display: "grid", justifyContent: "center", p: 1, m: 1 }}>
          <Button
            to={"/konvo"}
            component={Link}
            sx={{ my: 2, display: "block" }}
            size="large"
            variant="contained"
          >
            KONVO
          </Button>
          <Button
            to={"/apology"}
            component={Link}
            sx={{ my: 2, display: "block" }}
            size="large"
            variant="contained"
          >
            APOLOGY
          </Button>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
