import React, { useState, useEffect } from "react";
import classes from "./MainSection.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button from "../../Components/UI/Button/Button";
import NoInvoice from "../../Components/NoInvoice/NoInvoice";
import InvoiceForm from "../InvoiceForm/InvoiceForm";
import InvoiceList from "../../Components/InvoiceList/InvoiceList";
import axios from "axios";

// Firebase db
// import { db } from "../../firebase";
// import { collection, addDoc } from "firebase/firestore";

import { getDatabase, ref, set } from "firebase/database";

function MainSection() {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [isOpenNewInvoiceForm, setOpenNewInvoiceForm] = useState(false);
  const [invoicesData, setInvoicesData] = useState(0);

  // // Database functions
  function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl
    });
  }

  // check if any invoice is there for a particular user
  useEffect(() => {
    writeUserData(
      123,
      "arminder",
      "mail.to.arminder.singh@gmail.com",
      "anksjs"
    );
  }, []);

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
