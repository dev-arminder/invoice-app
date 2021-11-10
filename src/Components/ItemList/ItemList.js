import React, { useState } from "react";
import Label from "../UI/Label/Label";
import Input from "../UI/Input/Input";
import IconDelete from "../UI/IconDelete/IconDelete";
import Item from "../UI/Item/Item";
import classes from "./ItemList.module.css";
import Button from "../UI/Button/Button";

function ItemList() {
  return (
    <div className={classes.ItemList}>
      <h3 className={classes["ItemList__heading"]}>Item List</h3>
      <div className={classes["ItemList__item-group"]}>
        <div className={classes["ItemList__item_first"]}>
          <Label>Item Name</Label>
        </div>
        <div className={classes["ItemList__item_second"]}>
          <Label>Qty.</Label>
        </div>
        <div className={classes["ItemList__item_third"]}>
          <Label>Price</Label>
        </div>
        <div className={classes["ItemList__item_fourth"]}>
          <Label>Total</Label>
        </div>
        <div className={classes["ItemList__item_fifth"]}></div>
        <Item />
      </div>
      {/* <Button
        className="btn btn-addNew btn--invoiceForm btn--fullWidth"
        onClick={onClickHandler}
      >
        Add Item
      </Button> */}
    </div>
  );
}

export default ItemList;
