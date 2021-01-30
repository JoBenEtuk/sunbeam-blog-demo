import React from 'react'
import logo from "../../assets/images/Logo.png"

function Header() {
    return (
        <div className="Header">
            <a  href='/'><span><i className='icon-arrow-left-line'></i></span></a>
            <span><img src={logo} alt='logo'/> </span>
        </div>
    )
}

export default Header
