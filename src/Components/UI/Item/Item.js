import React, { useState } from "react";
import Input from "../Input/Input";
import IconDelete from "../IconDelete/IconDelete";
import classes from "./Item.module.css";

function Item({ handleName, handlePrice, handleQty, handleTotal }) {
  return (
    <>
      <div className={classes["ItemList__item_first"]}>
        <Input
          type="text"
          id="itemList"
          className="BillFrom__input BillFrom__input--fullWidth"
          onChange={e => handleName(e.target.value)}
          required={true}
          placeholder="e.g. Graphic Design"
        />
      </div>
      <div className={classes["ItemList__item_second"]}>
        <Input
          type="text"
          id="Quantity"
          className="BillFrom__input BillFrom__input--fullWidth"
          onChange={e => handleQty(e.target.value)}
          required={true}
          placeholder="e.g. 2"
        />
      </div>
      <div className={classes["ItemList__item_third"]}>
        <Input
          type="text"
          id="Price"
          className="BillFrom__input BillFrom__input--fullWidth"
          onChange={e => handlePrice(e.target.value)}
          required={true}
          placeholder="e.g. 200"
        />
      </div>
      <div className={classes["ItemList__item_fourth"]}>
        <Input
          type="text"
          id="total"
          className="BillFrom__input BillFrom__input--fullWidth"
          onChange={e => handleTotal(e.target.value)}
          required={true}
          placeholder="e.g. 400"
        />
      </div>
      {/* <div className={classes["ItemList__item_fifth"]}>
        <IconDelete />
      </div> */}
    </>
  );
}

export default Item;
