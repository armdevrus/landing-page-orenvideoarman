import React from 'react';
import Me from '../../img/me.png'
import ScrollDown from "../../img/scroll-down-icon.svg";
import './Intro.css'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h1 className="i-name">Видеограф Арман</h1>
                    <h2 className="i-intro">
                        Сделаю классный видеоролик для тебя
                    </h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Реклама</div>
                            <div className="i-title-item">Видеопортрет</div>
                            <div className="i-title-item">Свадьбы</div>
                            <div className="i-title-item">Дни рождения</div>
                            <div className="i-title-item">Выписки</div>
                            <div className="i-title-item">Интервью</div>
                            <div className="i-title-item">
                                Нелинейный видеомонтаж
                            </div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Веду деятельность в видеографии с 2012 года: всё
                        началось с изучения основ операторского искусства и
                        нелинейного видеомонтажа. В настоящее время активно
                        работаю во фрилансе и сотрудничаю с интересными людьми,
                        предприятиями.
                    </p>
                </div>
                <img src={ScrollDown} alt="scrollDown" className='i-scroll-down'/>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="me" className="i-img" />
            </div>
        </div>
    );
}

export default Intro;
