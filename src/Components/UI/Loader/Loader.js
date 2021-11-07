import React from "react";
import { BiLoaderAlt } from "react-icons/bi";
import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes.Loader}>
      <BiLoaderAlt />
    </div>
  );
}

export default Loader;
