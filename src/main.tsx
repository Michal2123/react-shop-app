import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "~bootstrap";
import "./styles/Navbar.css";
import "./styles/Sidebar.css";
import "./styles/Homepage.css";
import "./styles/Footer.css";
import "./styles/MainLayout.css";
import "./styles/Dropdown.css";
import "./styles/History.css";
import "./styles/Profile.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
