import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Header() {
    let history = useHistory();
    const login = () => {
        history.push(`/login`)
    }
    const register = () => {
        history.push(`/register`)
    }
    return (
        <div className="header-style">            
            <ul className="nav">
                <li className="menu-section"><a href="/" className="logo"><b>CV</b>down</a></li>
                <li className="menu-section"><a onClick={() => login() } className="menu-item">Giriş Yap</a></li>
                <li className="menu-section"><a onClick={() => register() } className="menu-item">Kaydol</a></li>
                <li className="menu-section"><a href="https://github.com/yucellsarikaya/Cv-Down-Front" className="menu-item"target="_blank">Github</a></li>
                <li className="menu-section"><a href="https://discord.gg/t7qgzBRr2C" className="menu-item" target="_blank">Discord</a></li> 
            </ul>
        </div>
    )
}
