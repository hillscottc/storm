import * as React from "react";
import Konvo from "./Konvo";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";
import Container from "@mui/material/Container";
import "./App.css";

const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <CssBaseline enableColorScheme />
      <Container component="main">
        <div>
          <a href="/.auth/login/aad">Login</a>
          <br />
          <a href="/.auth/logout">Log out</a>
        </div>

        <Konvo />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default App;
