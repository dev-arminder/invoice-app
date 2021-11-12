import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../UI/ArrowRight/ArrowRight";
import classes from "./InvoiceList.module.css";
import { BsDot } from "react-icons/bs";

function InvoiceList({ billDueDate, billToName, status, billItemTotal, id }) {
  let classNm;
  if (status === "Pending") {
    classNm = `InvoiceList__status--pending`;
  } else if (status === "Paid") {
    classNm = `InvoiceList__status--paid`;
  } else {
    classNm = `InvoiceList__status--draft`;
  }

  return (
    <Link to={`/invoice/${id.slice(1)}`}>
      <div className={classes.InvoiceList}>
        <p className={classes["InvoiceList__id"]}>{id.slice(1, 8)}</p>
        <p className={classes["InvoiceList__date"]}>Due {billDueDate}</p>
        <p className={classes["InvoiceList__name"]}>{billToName}</p>
        <p className={classes["InvoiceList__price"]}>
          <span>&pound; </span>
          {billItemTotal}
        </p>

        <p className={classes["InvoiceList__status"] + " " + classes[classNm]}>
          <BsDot /> {status}
        </p>
        <p className={classes["InvoiceList__next"]}>
          <ArrowRight />
        </p>
      </div>
    </Link>
  );
}

export default InvoiceList;
