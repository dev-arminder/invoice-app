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
  const [dropDownValue, setDropDownValue] = useState("All");
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
    console.log(userData);
    readUserData(userData.userID, setDatabaseData, setInvoices);
  }, []);

  const handleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  const handleNewInvoice = () => {
    setOpenNewInvoiceForm(true);
  };

  const removeInvoceForm = () => {
    setOpenNewInvoiceForm(false);
  };

  // Depends Upon firebase Data;
  let bodyEl = [];

  let newInvoiceForm = null;
  if (invoices.length > 0) {
    // bodyEl.map(el => <InvoiceList />);
    invoices.forEach(invoice => {
      if (dropDownValue === "All") {
        bodyEl.push(<InvoiceList key={invoice.id} {...invoice} />);
      } else if (dropDownValue === invoice.status) {
        bodyEl.push(<InvoiceList key={invoice.id} {...invoice} />);
      }
    });
  } else {
    bodyEl = <NoInvoice />;
  }

  if (isOpenNewInvoiceForm) {
    console.log(userData);
    newInvoiceForm = (
      <InvoiceForm
        onClick={removeInvoceForm}
        databaseData={{ id: userData.userID, email: userData.email }}
      />
    );
  }
  // console.log(newInvoiceForm);
  return (
    <section className={classes.Home + " primary-section "}>
      <div className={classes.Home__header + " max-width"}>
        <div className={classes.Home__heading}>
          <h3>Invoices</h3>
          <span>
            <span style={{ color: "var(--red)" }}>
              {bodyEl.length > 0 ? bodyEl.length : "No"}
            </span>{" "}
            Invoices
          </span>
        </div>
        <div className={classes.Home__menus}>
          <div className={classes.Home__filter} onClick={handleDropDown}>
            <span>
              Filter By-
              <span
                style={{
                  color: "var(--red)"
                }}
              >
                {dropDownValue}{" "}
              </span>
            </span>
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
              <li onClick={() => setDropDownValue("Draft")}>Draft</li>
              <li onClick={() => setDropDownValue("Pending")}>Pending</li>
              <li onClick={() => setDropDownValue("Paid")}>Paid</li>
              <li onClick={() => setDropDownValue("All")}>All</li>
            </ul>
          </div>
          <Button className="btn-addNew" onClick={handleNewInvoice}>
            New Invoice
          </Button>
        </div>
      </div>
      <div className={classes.Home__body}>
        {bodyEl.length > 0 ? bodyEl : <NoInvoice />}
      </div>

      {newInvoiceForm}
    </section>
  );
}

export default MainSection;
