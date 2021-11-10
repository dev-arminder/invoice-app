import React, { useState } from "react";
import Input from "../Input/Input";
import IconDelete from "../IconDelete/IconDelete";
import classes from "./Item.module.css";

function Item() {
  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemTotal, setItemTotal] = useState("");

  return (
    <>
      <div className={classes["ItemList__item_first"]}>
        <Input
          type="text"
          id="itemList"
          className="BillFrom__input BillFrom__input--fullWidth"
          onChange={e => setItemName(e.target.value)}
          required={true}
        />
      </div>
      <div className={classes["ItemList__item_second"]}>
        <Input
          type="text"
          id="Quantity"
          className="BillFrom__input BillFrom__input--fullWidth"
          onChange={e => setItemQty(e.target.value)}
          required={true}
        />
      </div>
      <div className={classes["ItemList__item_third"]}>
        <Input
          type="text"
          id="Price"
          className="BillFrom__input BillFrom__input--fullWidth"
          onChange={e => setItemPrice(e.target.value)}
          required={true}
        />
      </div>
      <div className={classes["ItemList__item_fourth"]}>
        <Input
          type="text"
          id="total"
          className="BillFrom__input BillFrom__input--fullWidth"
          onChange={e => setItemTotal(e.target.value)}
          required={true}
        />
      </div>
      {/* <div className={classes["ItemList__item_fifth"]}>
        <IconDelete />
      </div> */}
    </>
  );
}

export default Item;
