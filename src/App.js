import React, { useState } from "react";
import "./App.css";
import Main from "./Containers/Main/Main";

import { AuthProvider } from "./Context/AuthContext";

// // create a context
// const ThemeContext = createContext("none");
function App() {
  const [isDarkMode, setDarkMode] = useState("true");

  // Change Color Mode
  const changeColoMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <AuthProvider>
      <div className={isDarkMode ? "Main dark" : "Main"}>
        <Main isDarkMode={isDarkMode} toggleMode={changeColoMode} />
      </div>
    </AuthProvider>
  );
}

export default App;
