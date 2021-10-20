import React from "react";
import IllustrationEmpty from "../UI/IllustrationEmpty/IllustrationEmpty";
import classes from "./NoInvoice.module.css";

function NoInvoice() {
  return (
    <section className={classes.NoInvoice + " middle-center"}>
      <IllustrationEmpty />
      <h2 className={classes.NoInvoice__heading}>There is Nothing Here !!</h2>
      <p className={classes.NoInvoice__para}>
        Create an invoice by clicking the <br />
        <strong>New Invoice</strong> button and get started.
      </p>
    </section>
  );
}

export default NoInvoice;
