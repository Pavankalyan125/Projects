import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Import `createRoot`
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

// ✅ Fix: Use `createRoot` instead of `ReactDOM.render`
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);