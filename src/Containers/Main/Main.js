import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MainSection from "../MainSection/MainSection";
import Welcome from "../../Components/Welcome/Welcome";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Invoice from "../Invoice/Invoice";

function Main({ isDarkMode, toggleMode }) {
  return (
    <React.Fragment>
      <Sidebar isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <Switch>
        <Route path="/home">
          <MainSection />
        </Route>

        <Route path="/signUp">
          <SignUp />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/">
          <Welcome />
        </Route>

        <Route path="/invoice">
          <Invoice />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default Main;
