import React from 'react'
import Logo from "../assets/react.svg"
import "./Header.css"


function Header() {
    return (
        <div>
            <img className="header" src={Logo} alt="header" />            
        </div>
    )
}

export default Header;
