import React, { useRef, useState, useContext } from "react";
import { ThemeContext } from '../../context'
import Phone from "../../img/Phone.svg";
import Home from "../../img/Home.svg";
import Email from "../../img/Email.svg";
import emailjs from "@emailjs/browser";
import "./Contacts.css";

const Contacts = () => {
  const [done, setDone] = useState("");
  const theme = useContext(ThemeContext);
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_44a69el",
        "template_1h1qhqw",
        formRef.current,
        "yl814LT4Wm33zZvyZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone("Отправлено!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Как связаться со мной?</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="icon-phone" className="c-icon" />{" "}
              +7(951)035-16-14
            </div>
            <div className="c-info-item">
              <img src={Email} alt="icon-email" className="c-icon" />
              aisenov1995@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Home} alt="icon-home" className="c-icon" />
              462830 Оренбургская область, п.Адамовка, ул. Красногвардейская д.3
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>На какое мероприятие ты хочешь пригласить меня?</b> Расскажи о
            нём подробнее. Я всегда открыт интересным предложениям.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: theme.state.darkMode && "#333", transition: 'all 2s ease' }}
              type="text"
              name="user-name"
              placeholder="Имя"
            />
            <input
              style={{ backgroundColor: theme.state.darkMode && "#333", transition: 'all 2s ease' }}
              type="text"
              name="user-subject"
              placeholder="Мероприятие"
            />
            <input
              style={{ backgroundColor: theme.state.darkMode && "#333", transition: 'all 2s ease' }}
              type="email"
              name="user-email"
              placeholder="Email"
            />
            <textarea
              style={{ backgroundColor: theme.state.darkMode && "#333", transition: 'all 2s ease' }}
              name="user-message"
              cols="30"
              rows="5"
              placeholder="Сообщение..."
            ></textarea>
            <button type="submit">Отправить</button>
            {done && <h5>{done}</h5>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
