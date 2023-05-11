import React from "react";
import style from "./Result.module.scss"
import congratulation from "../../../image/congrats.png"

const Result = () => {
    return ( 
      <div className={style.result}>
        <img className={style.result__img} src={congratulation} alt="" />
        <h2 className={style.result__title}>Congratulations !!!</h2>
        <p className={style.result__text}>You have answered 3 out of 10 correctly</p>

        <div className={style.result__buttons}>
            <a href="/" className={style.btn_tryagain}>Try again</a>
            <a href="/" className={style.btn_menu}>Back</a>
        </div>
      </div>  
    );
}

export default Result;