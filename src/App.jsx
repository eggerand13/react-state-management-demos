import React from "react";
import "./App.css";
import Name from "./Name";
import useRandomName from "./hooks/useRandomName";
// import useTheme from "./hooks/useTheme";
import { useThemeContext } from "./contexts/ThemeContext";

function App(props) {
  const name = useRandomName();
  const {theme, toggleTheme} = useThemeContext();

  const toggleClick = React.useCallback(() => {
    toggleTheme()
  },[toggleTheme])

  return (
    
      <div className={`App flex flex-col justify-center ${theme === "dark" ? "App_bg_dark" : "App_bg"}`}>
        <div>
        <h1
          className={`text-3xl font-bold ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          Hello chapter. Greetings go to <Name name={name} />
        </h1>
        <button
          className={`border-gray-400 border-y-4 rounded mt-4 ${
            theme === "dark" ? "text-white" : ""
          }`}
          onClick={toggleClick}
        >
          {"Switch theme"}
        </button>
        </div>
      </div>
  );
}

export default App;
