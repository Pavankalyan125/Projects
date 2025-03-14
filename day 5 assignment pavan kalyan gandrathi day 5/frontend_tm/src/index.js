import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use React 18+ API
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot()
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
