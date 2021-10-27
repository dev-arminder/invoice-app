import React from "react";
import { BsDot } from "react-icons/bs";

function Status(props) {
  let className = `status status--${props.modifier}`;

  return (
    <p className={className}>
      <BsDot /> {props.value}
    </p>
  );
}

export default Status;
