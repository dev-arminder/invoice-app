import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../Components/UI/Button/Button";
import BillFrom from "../../Components/BillFrom/BillFrom";
import BillTo from "../../Components/BillTo/BillTo";
import ItemList from "../../Components/ItemList/ItemList";
import classes from "./InvoiceForm.module.css";

function InvoiceForm({ onClick }) {
  // Bill From state
  const [billFromStreetAddress, setBillFromStreetAddress] = useState("");
  const [billFromCity, setBillFromCity] = useState("");
  const [billFromPC, setBillFromPC] = useState("");
  const [billFromCountry, setBillFromCountry] = useState("");

  // Bill To State
  const [billToName, setBillToName] = useState("");
  const [billToEmail, setBillToEmail] = useState("");
  const [billToAddr, setbillToAddr] = useState("");
  const [billToCity, setBillToCity] = useState("");
  const [billToPC, setBillToPC] = useState("");
  const [billToCountry, setBillToCountry] = useState("");
  const [billDueDate, setBillDueDate] = useState("");
  const [billToPD, setBillToPD] = useState("");

  const [itemListLength, setItemListLength] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
  }
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
          <form onSubmit={e => handleSubmit(e)}>
            <BillFrom
              handleStreetAddr={setBillFromStreetAddress}
              handleCity={setBillFromCity}
              handlePC={setBillFromPC}
              handleCountry={setBillFromCountry}
            />
            <BillTo
              handleName={setBillToName}
              handleEmail={setBillToEmail}
              handleAddr={setbillToAddr}
              handleCity={setBillToCity}
              handlePC={setBillToPC}
              handleCountry={setBillToCountry}
              handleDate={setBillDueDate}
              handlePD={setBillToPD}
            />
            <ItemList />

            <div className={classes.InvoiceForm__btns}>
              <Button className="btn btn-addNew btn--invoiceForm btn--draft">
                Save as draft
              </Button>
              <Button className="btn btn-addNew btn--invoiceForm btn--send">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default InvoiceForm;
