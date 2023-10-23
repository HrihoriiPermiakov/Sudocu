import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, text, link }) => {
  return (
    <Link to={link} className={className}>
      {text}
    </Link>
  );
};

export default Button;
