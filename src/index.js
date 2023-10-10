import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const appElement = document.querySelector("#app");
function App() {
  const titleApp = <h1> Sudoku </h1>;
  useEffect(() => {
    const bodyElement = document.body;
    bodyElement.style.backgroundColor = "blue";
    bodyElement.style.color = "white";
  }, []);
  return titleApp;
}

ReactDOM.render(<App />, appElement);
