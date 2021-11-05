import React from "react";
import IconDelete from "../IconDelete/IconDelete";
import classes from "./Alert.module.css";

function Alert(props) {
  return (
    <div className={classes.Alert}>
      {props.children}{" "}
      <span onClick={props.onClick}>
        <IconDelete />
      </span>
    </div>
  );
}

export default Alert;
