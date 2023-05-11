import React from "react"
import style from "./Game.module.scss"

const Game = () => {

    return(
        <div className={style.game}>
            <div className={style.game__body}>
                <div className={style.game__progress_bar}>
                    <div className={style.game__progress_line}></div>
                </div>
                <img className={style.game__image} src="https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg" alt="" />
                <h2 className={style.game__title}>Answer №1</h2>
                <p className={style.game__question}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eveniet doloribus at cupiditate quae!</p>
            </div>

            <ul className={style.answers}>
                <li className={style.answers__item}>Test text</li>
                <li className={style.answers__item}>Test text</li>
                <li className={style.answers__item}>Test text</li>
                <li className={style.answers__item}>Test text</li>
            </ul>
        </div>
    )
    
}

export default Game;
