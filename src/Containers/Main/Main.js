import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../../HOC/PrivateRoute";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MainSection from "../MainSection/MainSection";
import Welcome from "../../Components/Welcome/Welcome";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Invoice from "../Invoice/Invoice";
import DefaultPage from "../../Components/404Page/404Page";
// import { useAuth } from "../../Context/AuthContext";

function Main({ isDarkMode, toggleMode }) {
  return (
    <React.Fragment>
      <Sidebar isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <Switch>
        {/* <PrivateRoute path="/home">
          <MainSection />
        </PrivateRoute> */}

        <PrivateRoute path="/home" component={MainSection} />

        <Route path="/signUp">
          <SignUp />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/">
          <Welcome />
        </Route>

        <PrivateRoute path="/invoice/:id" component={Invoice} />

        <Route path="*">
          <DefaultPage />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default Main;
