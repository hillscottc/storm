import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Apology from "./pages/Apology";
import Admin from "./pages/Admin";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/apology" element={<Apology />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}
