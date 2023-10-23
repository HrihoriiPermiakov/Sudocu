import React from "react";
import Button from "../elements/buttons";
import Base from "../elements/baseScreen.js";
// import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <Base className="buttonBox">
      <Button className="btn btnNewGame" text="Почати гру" link="/game" />
      <Button className="btn btnSettigs" text="Налаштування" link="/settings" />
    </Base>
  );
};

export default HomeScreen;
