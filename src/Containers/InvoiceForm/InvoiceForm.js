import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { addInvoice } from "../../firebaseFunctions";
import Button from "../../Components/UI/Button/Button";
import BillFrom from "../../Components/BillFrom/BillFrom";
import BillTo from "../../Components/BillTo/BillTo";
import ItemList from "../../Components/ItemList/ItemList";
import classes from "./InvoiceForm.module.css";

function InvoiceForm({ onClick, databaseData }) {
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

  //billItem

  const [billItemName, setBillItemName] = useState("");
  const [billItemQty, setBillItemQty] = useState("");
  const [billItemPrice, setBillItemPrice] = useState("");
  const [billItemTotal, setBillItemTotal] = useState("");

  const [err, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    let today = new Date().toISOString().slice(0, 10);

    // if (
    //   billFromStreetAddress === "" ||
    //   billFromCity === "" ||
    //   billFromPC === "" ||
    //   billFromCountry === "" ||
    //   billToName === "" ||
    //   billToEmail === "" ||
    //   billToAddr === "" ||
    //   billToCity === "" ||
    //   billToPC === "" ||
    //   billToCountry === "" ||
    //   billDueDate === "" ||
    //   billToPD === "" ||
    //   billItemName === "" ||
    //   billItemQty === "" ||
    //   billItemPrice === "" ||
    //   billItemTotal === ""
    // ) {
    //   setError("true");
    // }
    if (
      billFromStreetAddress !== "" &&
      billFromCity !== "" &&
      billFromPC !== "" &&
      billFromCountry !== "" &&
      billToName !== "" &&
      billToEmail !== "" &&
      billToAddr !== "" &&
      billToCity !== "" &&
      billToPC !== "" &&
      billToCountry !== "" &&
      billDueDate !== "" &&
      billToPD !== "" &&
      billItemName !== "" &&
      billItemQty !== "" &&
      billItemPrice !== "" &&
      billItemTotal !== ""
    ) {
      let invoice = {
        billFromStreetAddress,
        billFromCity,
        billFromPC,
        billFromCountry,
        billToName,
        billToEmail,
        billToAddr,
        billToCity,
        billToPC,
        billToCountry,
        billDueDate,
        billDate: today,
        billToPD,
        billItemName,
        billItemQty,
        billItemPrice,
        billItemTotal,
        userId: databaseData.id,
        userEmail: databaseData.email
      };
      if (e.target.classList.contains("btn--send")) {
        invoice.status = "Pending";
      } else {
        invoice.status = "Draft";
      }

      addInvoice(databaseData.id, invoice);
      onClick();
    } else {
      setError(true);
    }

    // setError("true");

    // if (err === "false") {
    //   let invoice = {
    //     billFromStreetAddress,
    //     billFromCity,
    //     billFromPC,
    //     billFromCountry,
    //     billToName,
    //     billToEmail,
    //     billToAddr,
    //     billToCity,
    //     billToPC,
    //     billToCountry,
    //     billDueDate,
    //     billDate: today,
    //     billToPD,
    //     billItemName,
    //     billItemQty,
    //     billItemPrice,
    //     billItemTotal,
    //     userId: databaseData.id,
    //     userEmail: databaseData.email
    //   };
    //   if (e.target.classList.contains("btn--send")) {
    //     invoice.status = "Pending";
    //   } else {
    //     invoice.status = "Draft";
    //   }

    //   addInvoice(databaseData.id, invoice);
    //   onClick();
    // } else {
    //   alert("FIll Out FOrm Properly");
    //   setError("false");
    // }
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
          <form>
            <BillFrom
              handleStreetAddr={setBillFromStreetAddress}
              handleCity={setBillFromCity}
              handlePC={setBillFromPC}
              handleCountry={setBillFromCountry}
              billFromStreetAddress={billFromStreetAddress}
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
            <ItemList
              handleName={setBillItemName}
              handleQty={setBillItemQty}
              handlePrice={setBillItemPrice}
              handleTotal={setBillItemTotal}
            />

            {err ? (
              <div className={classes.InvoiceForm__errMsg}>
                All Fields Are Mandontary
              </div>
            ) : (
              ""
            )}

            <div className={classes.InvoiceForm__btns}>
              <Button
                className="btn btn-addNew btn--invoiceForm btn--draft"
                onClick={handleSubmit}
              >
                Save as draft
              </Button>
              <Button
                className="btn btn-addNew btn--invoiceForm btn--send"
                onClick={handleSubmit}
              >
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
