import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import { Link } from "react-router";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <CssBaseline enableColorScheme />
      <Header />
      <Container component="main">
        <h2>
          <Link to="/konvo">KONVO</Link>
        </h2>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
