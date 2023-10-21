import React from "react";

function TypeGameScreen() {
  return (
    <div>
      <h1> Гірський судоку </h1>
      <h2> Вибери свій шлях </h2>
      <div className="wraper wrapper__btn">
        <button className="btn btn__clasikGame">Класична гра</button>

        <button className="btn btn__companyGame">Компанія</button>
      </div>
    </div>
  );
}

export default TypeGameScreen;
