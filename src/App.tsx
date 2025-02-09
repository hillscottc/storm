import * as React from "react";
import styled from "@emotion/styled";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Link } from "react-router";
import { Box } from "@mui/material";
import MuiButton from "@mui/material/Button";
import bgImage from "./assets/bg-tech-glade.svg";
import "./App.css";

const StyledButton = styled(MuiButton)`
  background-color: #6200ea;
  color: white;
  &:hover {
    background-color: #3700b3;
  }
  padding: 10px 150px;
  border-radius: 8px;
  font-size: 16px;
  margin: 10px;
` as typeof MuiButton;

const App: React.FunctionComponent = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url("${bgImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "80vw",
        height: "100vh",
      }}
    >
      <CssBaseline enableColorScheme />
      <Header />
      <Container component="main">
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            p: 1,
            m: 1,
          }}
        >
          <StyledButton
            to="/konvo"
            component={Link}
            size="large"
            variant="contained"
          >
            KONVO
          </StyledButton>

          <StyledButton
            to="/apology"
            component={Link}
            size="large"
            variant="contained"
          >
            APOLOGY
          </StyledButton>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
