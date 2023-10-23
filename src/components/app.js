import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./screens/homeScreen.js";
import TypeGame from "./screens/typeGameScreen.js";
import Settings from "./screens/settingsScreens.js";

function App() {
  return (
    // <Home />
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/game" element={<TypeGame />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
