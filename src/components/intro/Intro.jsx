import React, { useContext } from "react";
import { ThemeContext } from "../../context";
import Me from "../../img/me.png";
import ScrollDown from "../../img/scroll-down-icon.svg";
import "./Intro.css";

const Intro = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-name">Видеограф Арман</h1>
          <h2 className="i-intro">Сделаю классный видеоролик для тебя</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Реклама</div>
              <div className="i-title-item">Видеопортрет</div>
              <div className="i-title-item">Свадьбы</div>
              <div className="i-title-item">Дни рождения</div>
              <div className="i-title-item">Нелинейный видеомонтаж</div>
            </div>
          </div>
          <p className="i-desc">
            Веду деятельность в видеографии с 2012 года: всё началось с изучения
            основ операторского искусства и нелинейного видеомонтажа. В
            настоящее время активно работаю во фрилансе и сотрудничаю с
            интересными людьми, предприятиями.
          </p>
        </div>
        <style>
            {`.i-scroll-down::after{
                background-color:${theme.state.darkMode ? "white" : "black"};

          }`}
          </style>
        <div
          className="i-scroll-down"
          style={{
            border: theme.state.darkMode ? "1px solid white" : "1px solid #333",
          }}
        ></div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="me" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
