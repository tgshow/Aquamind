import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DesafiosProvider } from "./context/DesafiosContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DesafiosProvider>
      <App />
    </DesafiosProvider>
  </React.StrictMode>
);