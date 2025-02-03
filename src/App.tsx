import * as React from "react";
import { BrowserRouter } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Konvo from "./Konvo";
import "./App.css";

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <CssBaseline enableColorScheme />
      <Header />
      <Container component="main">
        <Konvo />
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
