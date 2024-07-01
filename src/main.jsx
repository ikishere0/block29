import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
<<<<<<< HEAD
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
=======
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
>>>>>>> 81f1d0710e74f710235f59beebc7c87b1fb43185
  </React.StrictMode>
);
