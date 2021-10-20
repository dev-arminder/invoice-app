import React from "react";

function Button(props) {
  // let btn = (
  //   <button className={"btn " + props.className}>{props.children}</button>
  // );
  // if (props.onClick) btn = <button className={"btn " + props.className} onClick={props.onClick}>{props.children}</button>
  return (
    <button className={"btn " + props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
