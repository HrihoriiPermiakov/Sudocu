import React from "react";
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div className="wraper wrapper__btn">
      <Link to="/type" className="btn btn__newGame">
        Нова гра
      </Link>

      <Link className="btn btn__settings">Налаштування</Link>
    </div>
  );
}

export default Buttons;
