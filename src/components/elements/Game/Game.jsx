import React from "react"
import style from "./Game.module.scss"

const Game = (props) => {

    const {step, question, setVariant, length} = props;

    const progresBarPercent = Math.round(step / length * 100); 


    return(
        <div className={style.game}>
            <div className={style.game__body}>
                <div className={style.game__progress_bar}>
                    <div className={style.game__progress_line} style={{"width": `${progresBarPercent}%`}}></div>
                </div>
                <div className={style.game__image}>
                    <img src={question.image} alt="" />
                </div>
                <h2 className={style.game__title}>Question №{question.id}</h2>
                <p className={style.game__question}>{question.title}</p>
            </div>

            <ul className={style.answers}>
                {question.answers.map((el, index) => {
                    return (<li key={index} onClick={() => {setVariant(index)}} className={style.answers__item}>{el}</li>)
                })}
            </ul>
        </div>
    )
    
}

export default Game;
