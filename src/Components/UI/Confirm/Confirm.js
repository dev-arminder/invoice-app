import React from "react";
import classes from "./Confirm.module.css";
import Button from "../Button/Button";

function Confirm({ heading, bodyText, action, handleCancel, handleMain }) {
  return (
    <div className={classes.Confirm} onClick={handleCancel}>
      <div className={classes.Confirm__inner}>
        <h2 className={classes.Confirm__heading}>{heading}</h2>
        <p className={classes.Confirm__text}>{bodyText}</p>
        <div>
          <Button
            className="btn btn__invoice btn__invoice--edit"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          {action === "delete" ? (
            <Button
              className="btn btn__invoice btn__invoice--delete"
              onClick={handleMain}
            >
              Delete
            </Button>
          ) : (
            <Button
              className="btn btn__invoice btn__invoice--marked"
              onClick={handleMain}
            >
              Marked
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Confirm;
