import React from "react";
// import Buttons from "../elements/buttons";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div className="container">
      <h1>Гірський Судоку </h1>
      <Link to="/type" className="btn btn__newGame">
        Нова гра
      </Link>

      <Link to="#" className="btn btn__settings">
        Налаштування
      </Link>
    </div>
  );
}

export default HomeScreen;
