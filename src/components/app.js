import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./screens/homeScreen.js";
import TypeGame from "./screens/typeGameScreen.js";

function App() {
  return (
    // <Home />
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/type" element={<TypeGame />} />
      </Routes>
    </Router>
  );
}

export default App;
