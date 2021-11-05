import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  let ele;
  switch (props.type) {
    case "text":
      ele = (
        <input
          type="text"
          id={props.id}
          className={`${
            props.className
              ? props.className + " " + classes.input_field
              : classes.input_field
          }`}
          {...props}
        />
      );
      break;
    case "email":
      ele = (
        <input
          type="email"
          id={props.id}
          className={classes.input_field}
          {...props}
        />
      );
      break;
    case "password":
      ele = (
        <input
          type="password"
          id={props.id}
          className={classes.input_field}
          {...props}
        />
      );
      break;
    case "date":
      ele = (
        <input
          type="date"
          id={props.id}
          className={classes.input_field}
          {...props}
        />
      );
      break;
    default:
      ele = (
        <input
          type="text"
          id={props.id}
          className={classes.input_field}
          {...props}
        />
      );
  }
  return ele;
}

export default Input;
