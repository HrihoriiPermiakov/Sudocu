import React from "react";

const BaseScreen = ({ children, className }) => {
  return (
    <div className="containerScreen">
      <h1 className="titleGame">Класичне Судоку </h1>
      <div className={className}>{children}</div>
    </div>
  );
};

export default BaseScreen;
