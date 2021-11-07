import React, { useState } from "react";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import Alert from "../../Components/UI/Alert/Alert";
import classes from "./Login.module.css";
import Loader from "../../Components/UI/Loader/Loader";

import { useAuth } from "../../Context/AuthContext";

import { Link, useHistory } from "react-router-dom";

function SignUp() {
  // Form
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  // Errors
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    if (!userEmail || !userPassword) {
      setError("All Fields Are Required!!!!");
      return;
    }
    try {
      setError("");
      setLoading(true);
      await login(userEmail, userPassword);
      history.push("/home");
    } catch {
      setError("Please Create Your Account First ");
    }
    setLoading(false);
  };

  return (
    <section className="primary-section middle-center login">
      <h2 className={classes.login__heading}>Log In</h2>
      {error ? (
        <Alert
          onClick={() => {
            setError("");
          }}
        >
          {error}
        </Alert>
      ) : null}
      <div className={classes.login__form}>
        <div className={classes.login__formfield}>
          <label for="email" className={classes.login__label}>
            Email
          </label>
          <Input
            type="email"
            id="email"
            onChange={e => setUserEmail(e.target.value)}
          />
        </div>
        <div className={classes.login__formfield}>
          <label for="password" className={classes.login__label}>
            Password
          </label>
          <Input
            type="password"
            id="passowrd"
            onChange={e => setUserPassword(e.target.value)}
          />
        </div>

        <div className={classes.login__formfield}>
          {loading ? (
            <Loader />
          ) : (
            <Button className="btn--success btn--full" onClick={handleSubmit}>
              Log In
            </Button>
          )}
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
