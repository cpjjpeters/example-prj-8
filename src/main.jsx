import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartCountReducer from "../src/cartCountSlice.js";
import loggedInReducer from "../src/loggedInSlice.js";

const store = configureStore({
  reducer: {
    cartCount: cartCountReducer,
    loggedIn: loggedInReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
