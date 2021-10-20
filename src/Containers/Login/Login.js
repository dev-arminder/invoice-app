import React from "react";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section className="primary-section middle-center login">
      <h2 className={classes.login__heading}>Log In</h2>
      <div className={classes.login__form}>
        <div className={classes.login__formfield}>
          <label for="email" className={classes.login__label}>
            Email
          </label>
          <Input type="email" id="email" />
        </div>
        <div className={classes.login__formfield}>
          <label for="password" className={classes.login__label}>
            Password
          </label>
          <Input type="password" id="passowrd" />
        </div>

        <div className={classes.login__formfield}>
          <Button className="btn--success btn--full">Log In</Button>
        </div>
        <div className={classes.login__formfield}>
          <p>Don't Have an Account Yet.</p>
          <Link to="/signUp">Create an Account Here!</Link>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
