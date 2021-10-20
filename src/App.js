import React, { useState } from "react";
import "./App.css";
import Main from "./Containers/Main/Main";

// // create a context
// const ThemeContext = createContext("none");
function App() {
  const [isDarkMode, setDarkMode] = useState("true");

  // Change Color Mode
  const changeColoMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "Main dark" : "Main"}>
      <Main isDarkMode={isDarkMode} toggleMode={changeColoMode} />
    </div>
  );
}

export default App;
