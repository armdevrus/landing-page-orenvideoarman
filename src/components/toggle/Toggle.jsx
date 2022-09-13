import React, { useContext } from "react";
import Sun from "../../img/Sun.svg";
import Moon from "../../img/Moon.svg";
import "./Toggle.css";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const dispatch = theme.dispatch;

  const handleClickThemeMode = () => {
    dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={Sun} alt="Sun" className="t-icon" />
      <img src={Moon} alt="Moon" className="t-icon" />
      <div className="t-button" onClick={handleClickThemeMode} style={{ left: theme.state.darkMode ? '25px' : 0, backgroundColor: theme.state.darkMode ? '#222' : 'lightgray'}}></div>
    </div>
  );
};

export default Toggle;
