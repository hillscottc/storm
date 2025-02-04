import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Konvo from "./pages/Konvo";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/konvo" element={<Konvo />} />
      </Routes>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}
