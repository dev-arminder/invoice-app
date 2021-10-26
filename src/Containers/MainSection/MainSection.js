import React, { useState } from "react";
import classes from "./MainSection.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button from "../../Components/UI/Button/Button";
import NoInvoice from "../../Components/NoInvoice/NoInvoice";
import InvoiceForm from "../InvoiceForm/InvoiceForm";
import InvoiceList from "../../Components/InvoiceList/InvoiceList";

function MainSection() {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [isOpenNewInvoiceForm, setOpenNewInvoiceForm] = useState(false);
  const [invoicesData, setInvoicesData] = useState(0);

  const handleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  const handleNewInvoice = () => {
    alert("open");
    setOpenNewInvoiceForm(true);
  };

  const removeInvoceForm = () => {
    alert("closgin");
    setOpenNewInvoiceForm(false);
  };

  // Depends Upon firebase Data;
  let bodyEl = null;
  let newInvoiceForm = null;
  if (invoicesData) {
  } else {
    // bodyEl = <NoInvoice />;
    bodyEl = <InvoiceList />;
  }

  if (isOpenNewInvoiceForm) {
    newInvoiceForm = <InvoiceForm onClick={removeInvoceForm} />;
  }
  console.log(newInvoiceForm);
  return (
    <section className={classes.Home + " primary-section "}>
      <div className={classes.Home__header + " max-width"}>
        <div className={classes.Home__heading}>
          <h3>Invoices</h3>
          <span>No Invoices</span>
        </div>
        <div className={classes.Home__menus}>
          <div className={classes.Home__filter} onClick={handleDropDown}>
            <span>Filter By Status</span>
            <span>
              {isDropDownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          <div
            className={
              classes.Home__dropDown +
              `${isDropDownOpen ? " show-me" : " hide-me"}`
            }
          >
            <ul>
              <li>Draft</li>
              <li>Pending</li>
              <li>Paid</li>
              <li>All</li>
            </ul>
          </div>
          <Button className="btn-addNew" onClick={handleNewInvoice}>
            New Invoice
          </Button>
        </div>
      </div>
      <div className={classes.Home__body}>{bodyEl}</div>

      {newInvoiceForm}
    </section>
  );
}

export default MainSection;
