import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link className={props.className} to={props.destination}>
      {props.children}
    </Link>
  );
}

export default Button;
