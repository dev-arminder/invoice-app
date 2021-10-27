import React from "react";
import classes from "./Invoice.module.css";
import ArrowLeft from "../../Components/UI/ArrowLeft/ArrowLeft";
import Status from "../../Components/UI/Status/Status";
import Button from "../../Components/UI/Button/Button";
import { Link } from "react-router-dom";

function Invoice() {
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
            <Button className="btn__invoice btn__invoice--delete">
              Delete
            </Button>
            <Button className="btn__invoice btn__invoice--marked">
              Mark As Paid
            </Button>
          </div>
        </div>
      </header>
      <main></main>
    </section>
  );
}

export default Invoice;
