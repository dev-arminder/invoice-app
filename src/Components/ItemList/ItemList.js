import React from "react";
import Label from "../UI/Label/Label";
import Input from "../UI/Input/Input";
import IconDelete from "../UI/IconDelete/IconDelete";
import classes from "./ItemList.module.css";

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
        <div className={classes["ItemList__item_first"]}>
          <Input
            type="text"
            id="itemList"
            className="BillFrom__input BillFrom__input--fullWidth"
          />
        </div>
        <div className={classes["ItemList__item_second"]}>
          <Input
            type="text"
            id="Quantity"
            className="BillFrom__input BillFrom__input--fullWidth"
          />
        </div>
        <div className={classes["ItemList__item_third"]}>
          <Input
            type="text"
            id="Price"
            className="BillFrom__input BillFrom__input--fullWidth"
          />
        </div>
        <div className={classes["ItemList__item_fourth"]}>
          <Input
            type="text"
            id="total"
            className="BillFrom__input BillFrom__input--fullWidth"
          />
        </div>
        <div className={classes["ItemList__item_fifth"]}>
          <IconDelete />
        </div>
      </div>

      <div className={classes["ItemList__item"]}></div>
    </div>
  );
}

export default ItemList;
