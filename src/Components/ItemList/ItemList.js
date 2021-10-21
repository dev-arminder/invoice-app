import React from "react";
import classes from "ItemList.module.css";

function ItemList() {
  return (
    <div className={classes.ItemList}>
      <h3 className={classes["ItemList__heading"]}>Item List</h3>
      <div className={classes["ItemList__item-group"]}></div>
    </div>
  );
}

export default ItemList;
