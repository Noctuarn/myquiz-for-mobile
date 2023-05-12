import React from "react";
import { useState } from "react";
import style from "./Header.module.scss"
import logo from "../../../image/logo.svg"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const burgerHandler = () => {
        if(!isOpen){
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }

    }

    return (
        <header className={style.header}>
            <img src={logo} className={style.header__logo} alt="" />
            <h2 className={style.header__title}>Quiz game</h2>

           <div onClick={burgerHandler} className={`${style.burger} ${isOpen ? style.open : ""}`}>
                <div className={style.burger__body}></div>
            </div>
        </header>   
    )
}

export default Header;
