import React, { useRef, useState } from "react";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import Alert from "../../Components/UI/Alert/Alert";
import Loader from "../../Components/UI/Loader/Loader";

import { useAuth } from "../../Context/AuthContext";

import classes from "./SignUp.module.css";
import { Link, useHistory } from "react-router-dom";

function SignUp() {
  // Form Data
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userConfirmPassword, setUserConfirmPassword] = useState();

  // Errors
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();
  const history = useHistory();
  const handleSubmit = async e => {
    e.preventDefault();
    if (!userName || !userEmail || !userPassword || !userConfirmPassword) {
      setError("All Fields Are Required!!!!");
      return;
    }
    if (userPassword !== userConfirmPassword) {
      setError("Password and Confirm Password Must be same!!!!");
      return;
    }

    let userInfo = {
      userName,
      userEmail
    };

    try {
      setError("");
      setLoading(true);
      await signUp(userEmail, userPassword);
      history.push("/home");
    } catch {
      setError("Failed to Create An Account! ");
    }
    setLoading(false);
  };

  return (
    <section className="primary-section middle-center signUp">
      <h2 className={classes.signUp__heading}>Sign Up</h2>

      {error ? (
        <Alert
          onClick={() => {
            setError("");
          }}
        >
          {error}
        </Alert>
      ) : null}
      <div className={classes.sigUp__form}>
        <div className={classes.signUP__formfield}>
          <label for="username" className={classes.signUp__label}>
            Username
          </label>
          <Input
            type="text"
            id="username"
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className={classes.signUP__formfield}>
          <label for="email" className={classes.signUp__label}>
            Email
          </label>
          <Input
            type="email"
            id="email"
            onChange={e => setUserEmail(e.target.value)}
          />
        </div>
        <div className={classes.signUP__formfield}>
          <label for="password" className={classes.signUp__label}>
            Password
          </label>
          <Input
            type="password"
            id="passowrd"
            onChange={e => setUserPassword(e.target.value)}
          />
        </div>
        <div className={classes.signUP__formfield}>
          <label for="passwordConfirm" className={classes.signUp__label}>
            Confirm Password
          </label>
          <Input
            type="password"
            id="passwordConfirm"
            onChange={e => setUserConfirmPassword(e.target.value)}
          />
        </div>
        <div className={classes.signUP__formfield}>
          {loading ? (
            <Loader />
          ) : (
            <Button
              className="btn--success btn--full"
              onClick={handleSubmit}
              disabled={loading}
            >
              Sign Up
            </Button>
          )}
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
