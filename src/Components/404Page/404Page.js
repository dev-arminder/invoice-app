import React from "react";
import IllustrationEmpty from "../UI/IllustrationEmpty/IllustrationEmpty";
import classes from "./404Page.module.css";

function DefaultPage() {
  return (
    <div className={"primary-section middle-center"}>
      <IllustrationEmpty />
      <h2 className={classes.Heading}>
        Page You Are Looking For is Not Found !!!
      </h2>
    </div>
  );
}

export default DefaultPage;
