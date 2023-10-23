import React from "react";
import Base from "../elements/baseScreen.js";
import Button from "../elements/buttons";

const TypeGameScreen = () => {
  return (
    <Base className="buttonBox">
      <h2>Вибери свій рівень</h2>
      <Button className="btn " text="Початковий" />
      <Button className="btn " text="Середній" />
      <Button className="btn " text="Складний" />
      <Button className="btn " text="Екстремальний" />
    </Base>
  );
};

export default TypeGameScreen;
