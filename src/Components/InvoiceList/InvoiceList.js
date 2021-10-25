import React from "react";
import classes from "./InvoiceList.module.css";

function InvoiceList() {
  return (
    <div className={classes.InvoiceList}>
      <p className={classes["InvoiceList__id"]}>RT3080</p>
      <p className={classes["InvoiceList__date"]}>Due 19 Aug 2021</p>
      <p className={classes["InvoiceList__name"]}>Jesan Huang</p>
      <p className={classes["InvoiceList__price"]}>1800.90</p>
      <p className={classes["InvoiceList__status"]}>Paid</p>
    </div>
  );
}

export default InvoiceList;
