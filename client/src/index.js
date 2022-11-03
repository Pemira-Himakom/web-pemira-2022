import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./context/authcontext";
import UIContextProvider from "./context/uicontext";

import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <UIContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </UIContextProvider>
  </Provider>
);
