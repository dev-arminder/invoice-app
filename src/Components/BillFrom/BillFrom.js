import React from "react";
import Label from "../UI/Label/Label";
import Input from "../UI/Input/Input";
import classes from "./BillFrom.module.css";

function BillFrom({ handleStreetAddr, handleCity, handlePC, handleCountry }) {
  return (
    <React.Fragment>
      <h4 className={classes["Invoice__sub-heading"]}>Bill From</h4>
      <div className={classes["Invoice__form-field"]}>
        <Label for="streetAddress">Street Address</Label>
        <Input
          type="text"
          id="streetAddress"
          className="BillFrom__input BillFrom__input--fullWidth"
          placeholder="e.g 19 React Road"
          onChange={e => handleStreetAddr(e.target.value)}
          required={true}
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
            required={true}
          />
        </div>
        <div className={classes["Invoice__form-field"]}>
          <Label for="postCode">Post Code</Label>
          <Input
            type="text"
            id="post Code"
            className="BillFrom__input"
            onChange={e => handlePC(e.target.value)}
            required={true}
          />
        </div>
        <div className={classes["Invoice__form-field"]}>
          <Label for="country">Country</Label>
          <Input
            type="text"
            id="country"
            className="BillFrom__input"
            onChange={e => handleCountry(e.target.value)}
            required={true}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default BillFrom;
