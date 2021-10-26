import React from "react";
import ArrowRight from "../UI/ArrowRight/ArrowRight";
import classes from "./InvoiceList.module.css";
import { BsDot } from "react-icons/bs";

function InvoiceList() {
  return (
    <div className={classes.InvoiceList}>
      <p className={classes["InvoiceList__id"]}>RT3080</p>
      <p className={classes["InvoiceList__date"]}>Due 19 Aug 2021</p>
      <p className={classes["InvoiceList__name"]}>Jesan Huang</p>
      <p className={classes["InvoiceList__price"]}>
        <span>&pound;</span>1800.90
      </p>

      <p
        className={
          classes["InvoiceList__status"] +
          " " +
          classes["InvoiceList__status--paid"]
        }
      >
        <BsDot /> Paid
      </p>
      <p className={classes["InvoiceList__next"]}>
        <ArrowRight />
      </p>
    </div>
  );
}

export default InvoiceList;
