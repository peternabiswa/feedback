import React from "react";
import ReactDOM from "react-dom/client";
import { FeedbackContext } from "./context/FeedbackContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FeedbackContext>
    <App />
  </FeedbackContext>
);
