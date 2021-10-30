import React from "react";
import classes from "./InvoiceFooter.module.css";
function InvoiceFooter() {
  return (
    <React.Fragment>
      <footer className={classes["Invoice__main-footer"]}>
        <ul className={classes["Invoice__footer_list"]}>
          <li className={classes["Invoice__footer-col1"]}>Item Name</li>
          <li className={classes["Invoice__footer-col2"]}>Qty.</li>
          <li className={classes["Invoice__footer-col3"]}>Price</li>
          <li className={classes["Invoice__footer-col4"]}>Total</li>
        </ul>
        <ul className={classes["Invoice__footer_list"]}>
          <li className={classes["Invoice__footer-col1"]}>Banner Design</li>
          <li className={classes["Invoice__footer-col2"]}>1</li>
          <li className={classes["Invoice__footer-col3"]}>&pound; 156.00</li>
          <li className={classes["Invoice__footer-col4"]}>&pound; 156.00</li>
        </ul>
      </footer>
      <ul className={classes["Invoice__footer_foot"]}>
        <li className={classes["Invoice__footer-first"]}>Amount Due</li>
        <li className={classes["Invoice__footer-last"]}>&pound; 156.00</li>
      </ul>
    </React.Fragment>
  );
}

export default InvoiceFooter;
