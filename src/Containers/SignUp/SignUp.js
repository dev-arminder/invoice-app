import React from "react";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section className="primary-section middle-center signUp">
      <h2 className={classes.signUp__heading}>Sign Up</h2>
      <div className={classes.sigUp__form}>
        <div className={classes.signUP__formfield}>
          <label for="username" className={classes.signUp__label}>
            Username
          </label>
          <Input type="text" id="username" />
        </div>
        <div className={classes.signUP__formfield}>
          <label for="email" className={classes.signUp__label}>
            Email
          </label>
          <Input type="email" id="email" />
        </div>
        <div className={classes.signUP__formfield}>
          <label for="password" className={classes.signUp__label}>
            Password
          </label>
          <Input type="password" id="passowrd" />
        </div>
        <div className={classes.signUP__formfield}>
          <label for="passwordConfirm" className={classes.signUp__label}>
            Confirm Password
          </label>
          <Input type="password" id="passwordConfirm" />
        </div>
        <div className={classes.signUP__formfield}>
          <Button className="btn--success btn--full">Sign Up</Button>
        </div>
        <div className={classes.signUP__formfield}>
          <p>Already have an Account.</p>
          <Link to="/login">Login Here!</Link>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
