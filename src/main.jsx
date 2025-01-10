import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

// Get the root DOM element
const rootElement = document.getElementById("root");

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the app
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
