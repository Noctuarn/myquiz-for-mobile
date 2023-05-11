import React from "react";
import style from "./Header.module.scss"
import logo from "../../../image/logo.svg"

const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} className={style.header__logo} alt="" />
            <h2 className={style.header__title}>Quiz game</h2>

            <div className={style.burger}>
                <div className={style.burger__body}></div>
            </div>
        </header>   
    )
}

export default Header;


// const burger = document.querySelector('.burger'),
    //   windowMenu = document.querySelector(".window");

// let menuOpen = false;

// burger.addEventListener('click', ()=> {
//     if(!menuOpen) {
//         burger.classList.add('open');
//         menuOpen=true;
//         windowMenu.style.display = "block";
//         windowMenu.style.overflow = "block";
//     }
//     else {
//         burger.classList.remove('open');
//         menuOpen=false;
//         windowMenu.style.display = "none";
//     }
// })