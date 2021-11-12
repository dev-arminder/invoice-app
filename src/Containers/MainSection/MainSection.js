import React, { useState, useEffect } from "react";
import classes from "./MainSection.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button from "../../Components/UI/Button/Button";
import NoInvoice from "../../Components/NoInvoice/NoInvoice";
import InvoiceForm from "../InvoiceForm/InvoiceForm";
import InvoiceList from "../../Components/InvoiceList/InvoiceList";
import { writeUserData, readUserData } from "../../firebaseFunctions";
import { useAuth } from "../../Context/AuthContext";

function MainSection() {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [isOpenNewInvoiceForm, setOpenNewInvoiceForm] = useState(false);
  const [databaseData, setDatabaseData] = useState(0);
  const [invoices, setInvoices] = useState([]);
  const { currentUser } = useAuth();

  // check if any invoice is there for a particular user
  const userData = {
    userID: currentUser.multiFactor.user.uid,
    email: currentUser.multiFactor.user.email
  };
  useEffect(() => {
    readUserData(userData.userID, setDatabaseData, setInvoices);
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
  if (invoices.length > 0) {
    bodyEl = <InvoiceList />;
  } else {
    bodyEl = <NoInvoice />;
  }

  if (isOpenNewInvoiceForm) {
    newInvoiceForm = (
      <InvoiceForm onClick={removeInvoceForm} databaseData={databaseData} />
    );
  }
  // console.log(newInvoiceForm);
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
