import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./context/authcontext";
import UIContextProvider from "./context/uicontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UIContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </UIContextProvider>
);