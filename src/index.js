import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/app.js";

const root = createRoot(document.querySelector("#app"));
root.render(<App />);
