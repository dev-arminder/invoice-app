import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  let ele;
  switch (props.type) {
    case "text":
      ele = <input type="text" id={props.id} className={classes.input_field} />;
      break;
    case "email":
      ele = (
        <input type="email" id={props.id} className={classes.input_field} />
      );
      break;
    case "password":
      ele = (
        <input type="password" id={props.id} className={classes.input_field} />
      );
      break;
    default:
      ele = <input type="text" id={props.id} className={classes.input_field} />;
  }
  return ele;
}

export default Input;
