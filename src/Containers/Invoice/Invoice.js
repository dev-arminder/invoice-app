import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./Invoice.module.css";
import ArrowLeft from "../../Components/UI/ArrowLeft/ArrowLeft";
import Status from "../../Components/UI/Status/Status";
import Button from "../../Components/UI/Button/Button";
import InvoiceFooter from "../../Components/InvoiceFooter/InvoiceFooter";
import Confirm from "../../Components/UI/Confirm/Confirm";
import { useAuth } from "../../Context/AuthContext";
import { getInvoices, deleteInvoice } from "../../firebaseFunctions";
import { Link, useHistory } from "react-router-dom";

function Invoice() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showMarked, setShowMarked] = useState(false);
  const [dbData, setDbData] = useState();
  const { id } = useParams();
  const { currentUser } = useAuth();

  const history = useHistory();

  useEffect(() => {
    getInvoices(currentUser.multiFactor.user.uid, "-" + id);
  }, []);

  const handleDeleteClick = () => {
    deleteInvoice(currentUser.multiFactor.user.uid, "-" + id);
    history.push("/home");
  };

  const handleMarked = () => {
    setShowMarked(true);
  };

  return (
    <section className="primary-section invoice-wrapper">
      {showConfirm ? (
        <Confirm
          heading="Confirm Deletion"
          bodyText={`Are you sure you want to delete invoice #${id}? This action Can not be undone.`}
          action="delete"
          handleCancel={() => setShowConfirm(false)}
          handleDelete={handleDeleteClick}
        />
      ) : null}
      {showMarked ? (
        <Confirm
          heading="Confirm Marking"
          bodyText={`Are you sure you want to Mark invoice #${id} as Paid? This action Can not be undone.`}
          action="marked"
          handleCancel={() => setShowMarked(false)}
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
            <Status value="Pending" modifier="pending" />
          </div>
          <div className={classes.Invoice__deskBtn}>
            <Button className="btn__invoice btn__invoice--edit">Edit</Button>
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
