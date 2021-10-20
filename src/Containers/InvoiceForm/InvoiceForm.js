import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../Components/UI/Button/Button";
import classes from "./InvoiceForm.module.css";

function InvoiceForm({ onClick }) {
  return (
    <section className={classes.InvoiceForm}>
      <div className={classes.InvoiceForm__background} onClick={onClick}></div>
      <div className={classes.InvoiceForm__inner}>
        <div className={classes.InvoiceForm__header}>
          <Button className="btn-plain" onClick={onClick}>
            <IoIosArrowBack /> <span>Go Back </span>
          </Button>
        </div>
        <div>
          <h3 className={classes.InvoiceForm__heading}>New Invoice</h3>
          <div className={classes["InvoiceForm__sub-section"]}>
            <h4 className={classes["InvoiceForm__sub-heading"]}>Bill To</h4>
            <div className={classes["InvoiceForm__form-field"]}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvoiceForm;
