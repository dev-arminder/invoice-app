import React from "react";
import classes from "./Sidebar.module.css";

import Logo from "../../Components/UI/Logo/Logo";
import ProfileImage from "../../Components/UI/ProfileImage/ProfileImage";
import Moon from "../UI/Moon/Moon";
import Sun from "../UI/Sun/Sun";

function Sidebar({ isDarkMode, toggleMode }) {
  return (
    <nav className={classes.Navbar}>
      <div>
        <Logo />
      </div>
      <div className={classes.Navbar__images}>
        <div className={classes.Navbar__toggler} onClick={toggleMode}>
          {isDarkMode ? <Moon /> : <Sun />}
        </div>
        <ProfileImage />
      </div>
    </nav>
  );
}
export default Sidebar;
