import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./Invoice.module.css";
import ArrowLeft from "../../Components/UI/ArrowLeft/ArrowLeft";
import Status from "../../Components/UI/Status/Status";
import Button from "../../Components/UI/Button/Button";
import InvoiceFooter from "../../Components/InvoiceFooter/InvoiceFooter";
import Confirm from "../../Components/UI/Confirm/Confirm";
import { useAuth } from "../../Context/AuthContext";
import {
  getInvoices,
  deleteInvoice,
  updateStatusInvoice
} from "../../firebaseFunctions";
import { Link, useHistory } from "react-router-dom";

function Invoice() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showMarked, setShowMarked] = useState(false);
  const [dbData, setDbData] = useState();
  const { id } = useParams();
  const { currentUser } = useAuth();

  const history = useHistory();

  useEffect(() => {
    getInvoices(currentUser.multiFactor.user.uid, "-" + id, setDbData);
  }, []);

  const handleDeleteClick = () => {
    deleteInvoice(currentUser.multiFactor.user.uid, "-" + id);
    history.push("/home");
  };

  const handleStatusChanged = () => {
    updateStatusInvoice(currentUser.multiFactor.user.uid, "-" + id);
    history.push("/home");
  };

  // const handleMarked = () => {
  //   setShowMarked(true);
  // };

  return (
    <section className="primary-section invoice-wrapper">
      {showConfirm ? (
        <Confirm
          heading="Confirm Deletion"
          bodyText={`Are you sure you want to delete invoice #${id}? This action Can not be undone.`}
          action="delete"
          handleCancel={() => setShowConfirm(false)}
          handleMain={handleDeleteClick}
        />
      ) : null}
      {showMarked ? (
        <Confirm
          heading="Confirm Marking"
          bodyText={`Are you sure you want to Mark invoice #${id} as Paid? This action Can not be undone.`}
          action="marked"
          handleCancel={() => setShowMarked(false)}
          handleMain={handleStatusChanged}
        />
      ) : null}
      <header className=" max-width">
        <Link to="/home">
          <ArrowLeft />
          Go Back
        </Link>
        <div className={classes.Invoice__nav}>
          <div>
            <p>Status</p>

            <Status
              value={dbData ? dbData.status : "Paid"}
              modifier={
                dbData
                  ? dbData.status[0].toLowerCase() + dbData.status.slice(1)
                  : "paid"
              }
            />
          </div>
          <div className={classes.Invoice__deskBtn}>
            <Button
              className="btn__invoice btn__invoice--delete"
              onClick={() => setShowConfirm(true)}
            >
              Delete
            </Button>
            <Button
              className="btn__invoice btn__invoice--marked"
              onClick={() => setShowMarked(true)}
            >
              Mark As Paid
            </Button>
          </div>
        </div>
      </header>
      <main className="max-width">
        <div className={classes["Invoice__main-id"]}>
          <h3 className={classes["Invoice__main-heading"]}>
            {id.slice(0, 10)}
          </h3>
          <h4 className={classes["Invoice__main-sub"]}>
            {dbData ? dbData.billItemName : "Graphic Design"}
          </h4>
        </div>
        <div className={classes["Invoice__main-senderAddress"]}>
          <address>
            <ul>
              <li>
                {" "}
                {dbData ? dbData.billFromStreetAddress : "19 Unit Terrace"}
              </li>
              <li>{dbData ? dbData.billFromCity : "London"}</li>
              <li> {dbData ? dbData.billFromPC : "El 3EZ"}</li>
              <li>{dbData ? dbData.billFromCountry : "United Kingdom"}</li>
            </ul>
          </address>
        </div>
        <div className={classes["Invoice__main-invoice-meta"]}>
          <div>
            <p>Invoice Date</p>
            <p>{dbData ? dbData.billDate : "21 Aug 2021"}</p>
          </div>
          <div>
            <p>Payment Due</p>
            <p>{dbData ? dbData.billDueDate : "20 Sep 2021"}</p>
          </div>
        </div>

        <div className={classes["Invoice__main-receiverAddress"]}>
          <h5>Bill To</h5>
          <h4>{dbData ? dbData.billToName : "Alex Grim"}</h4>
          <address>
            <ul>
              <li>{dbData ? dbData.billToAddr : "84 Chruch Way"}</li>
              <li>{dbData ? dbData.billToCity : "Bradford"}</li>
              <li>{dbData ? dbData.billToPC : "BDI 9PB"}</li>
              <li>{dbData ? dbData.billToCountry : "United Kingdom"}</li>
            </ul>
          </address>
        </div>

        <div className={classes["Invoice__main-receiverEmail"]}>
          <h5>Sent To</h5>
          <h4>{dbData ? dbData.billToEmail : "alexgrim@gmail.com"}</h4>
        </div>
        <InvoiceFooter dbData={dbData} />
      </main>
    </section>
  );
}

export default Invoice;
