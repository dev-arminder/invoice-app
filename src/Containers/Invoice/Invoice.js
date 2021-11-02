import React, { useState } from "react";
import classes from "./Invoice.module.css";
import ArrowLeft from "../../Components/UI/ArrowLeft/ArrowLeft";
import Status from "../../Components/UI/Status/Status";
import Button from "../../Components/UI/Button/Button";
import InvoiceFooter from "../../Components/InvoiceFooter/InvoiceFooter";

import { Link } from "react-router-dom";

function Invoice() {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  return (
    <section className="primary-section invoice-wrapper">
      <header className=" max-width">
        <Link to="/home">
          <ArrowLeft />
          Go Back
        </Link>
        <div className={classes.Invoice__nav}>
          <div>
            <p>Status</p>
            <Status value="Pending" modifier="pending" />
          </div>
          <div className={classes.Invoice__deskBtn}>
            <Button className="btn__invoice btn__invoice--edit">Edit</Button>
            <Button
              className="btn__invoice btn__invoice--delete"
              onCLick={handleDeleteClick}
            >
              Delete
            </Button>
            <Button className="btn__invoice btn__invoice--marked">
              Mark As Paid
            </Button>
          </div>
        </div>
      </header>
      <main className="max-width">
        <div className={classes["Invoice__main-id"]}>
          <h3 className={classes["Invoice__main-heading"]}>XM9141</h3>
          <h4 className={classes["Invoice__main-sub"]}>Graphic Design</h4>
        </div>
        <div className={classes["Invoice__main-senderAddress"]}>
          <address>
            <ul>
              <li>19 Unit Terrace</li>
              <li>London</li>
              <li>El 3EZ</li>
              <li>United Kingdom</li>
            </ul>
          </address>
        </div>
        <div className={classes["Invoice__main-invoice-meta"]}>
          <div>
            <p>Invoice Date</p>
            <p>21 Aug 2021</p>
          </div>
          <div>
            <p>Payment Due</p>
            <p>20 Sep 2021</p>
          </div>
        </div>

        <div className={classes["Invoice__main-receiverAddress"]}>
          <h5>Bill To</h5>
          <h4>Alex Grim</h4>
          <address>
            <ul>
              <li>84 Chruch Way</li>
              <li>Bradford</li>
              <li>BDI 9PB</li>
              <li>United Kingdom</li>
            </ul>
          </address>
        </div>

        <div className={classes["Invoice__main-receiverEmail"]}>
          <h5>Sent To</h5>
          <h4>alexgrim@gmail.com</h4>
        </div>
        <InvoiceFooter />
      </main>
    </section>
  );
}

export default Invoice;
