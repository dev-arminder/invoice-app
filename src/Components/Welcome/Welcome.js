import React from "react";
import IllustrationEmpty from "../UI/IllustrationEmpty/IllustrationEmpty";
import classes from "./Welcome.module.css";
import ButtonLink from "../UI/ButtonLink/ButtonLink";

function Welcome() {
  return (
    <section className={"primary-section " + classes.Welcome}>
      <IllustrationEmpty />
      <h1 className={classes.Welcome__heading}>
        <span>PRO</span>Invoices
      </h1>
      <p className={classes.Welcome__para}>Manage Your Invoices Like A Pro</p>
      <div>
        <ButtonLink className="success-link" destination="/signUp">
          Sign Up
        </ButtonLink>
        <ButtonLink className="success-link" destination="/login">
          Login
        </ButtonLink>
      </div>
    </section>
  );
}

export default Welcome;
