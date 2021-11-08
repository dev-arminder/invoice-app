import React from "react";
import Label from "../UI/Label/Label";
import Input from "../UI/Input/Input";
import classes from "./BillTo.module.css";

function BillFrom({
  handleName,
  handleEmail,
  handleAddr,
  handleCity,
  handlePC,
  handleCountry,
  handleDate,
  handlePD
}) {
  return (
    <React.Fragment>
      <h4 className={classes["Invoice__sub-heading"]}>Bill To</h4>
      <div className={classes["Invoice__form-field"]}>
        <Label for="clientName">CLient's Name</Label>
        <Input
          type="text"
          id="clientName"
          className="BillFrom__input BillFrom__input--fullWidth"
          onChange={e => {
            handleName(e.target.value);
          }}
        />
      </div>
      <div className={classes["Invoice__form-field"]}>
        <Label for="clientEmail">CLient's Email</Label>
        <Input
          type="text"
          id="clientEmail"
          className="BillFrom__input BillFrom__input--fullWidth"
          onChange={e => {
            handleEmail(e.target.value);
          }}
        />
      </div>
      <div className={classes["Invoice__form-field"]}>
        <Label for="streetAddress">Street Address</Label>
        <Input
          type="text"
          id="streetAddress"
          className="BillFrom__input BillFrom__input--fullWidth"
          onChange={e => handleAddr(e.target.value)}
        />
      </div>
      <div className={classes["Invoice__form-group"]}>
        <div className={classes["Invoice__form-field"]}>
          <Label for="city">City</Label>
          <Input
            type="text"
            id="city"
            className="BillFrom__input"
            onChange={e => handleCity(e.target.value)}
          />
        </div>
        <div className={classes["Invoice__form-field"]}>
          <Label for="postCode">Post Code</Label>
          <Input
            type="text"
            id="post Code"
            className="BillFrom__input"
            onChange={e => handlePC(e.target.value)}
          />
        </div>
        <div className={classes["Invoice__form-field"]}>
          <Label for="country">Country</Label>
          <Input
            type="text"
            id="country"
            className="BillFrom__input"
            onChange={e => handleCountry(e.target.value)}
          />
        </div>
      </div>
      {/*   
     option - 1
      <div className={classes["Invoice__form-group"]}>
        <div className={classes["Invoice__form-field"]}>
          <Label for="invoiceDate">Invoice Date</Label>
          <Input type="date" id="invoiceDate" className="BillFrom__input" />
        </div>

        <div className={classes["Invoice__form-field"]}>
          <Label for="dueDate">Due Date</Label>
          <Input type="date" id="dueDate" className="BillFrom__input" />
        </div>
      </div> */}

      {/* Option - 2 */}

      <div className={classes["Invoice__form-field"]}>
        <Label for="dueDate">Due Date</Label>
        <Input
          type="date"
          id="dueDate"
          className="BillFrom__input BillFrom__input--fullWidth"
          onChange={e => handleDate(e.target.value)}
        />
      </div>

      <div className={classes["Invoice__form-field"]}>
        <Label for="projectDescription">Project Description</Label>
        <Input
          type="text"
          id="projectDescription"
          className="BillFrom__input BillFrom__input--fullWidth"
          placeholder="e.g. Graphic Design"
          onChange={e => handlePD(e.target.value)}
        />
      </div>
    </React.Fragment>
  );
}

export default BillFrom;
