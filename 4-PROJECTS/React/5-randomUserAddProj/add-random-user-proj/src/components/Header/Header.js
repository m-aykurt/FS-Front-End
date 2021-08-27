import React from 'react'
import logo from "../../assets/cw.svg"
import style from "./Header.module.css"

function Header() {
    return (
        <div>
            <img className={style.logo} src={logo} alt="clarus-logo" />
        </div>
    )
}

export default Header
