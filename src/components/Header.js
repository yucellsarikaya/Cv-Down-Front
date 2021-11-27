import React, { useEffect, useState } from 'react'
import { MainContext, useContext } from "../context"
import LoginAndRegister from './LoginAndRegister'

export default function Header() {
    const { loginCase, userData } = useContext(MainContext)

    return (
        <div className="header-style">
            <ul className="nav">
                <li className="menu-section"><a href="/" className="logo"><b>CV</b>down</a></li>
                {/* {
                    loginCase ?
                        <li className="menu-section"><a className="menu-item">{userData[0].name}&nbsp;{userData[0].surname}</a></li>
                        :
                        <LoginAndRegister />
                } */}
                <li className="menu-section"><a href="https://github.com/yucellsarikaya/Cv-Down-Front" className="menu-item" target="_blank">Github</a></li>
                <li className="menu-section"><a href="https://discord.gg/t7qgzBRr2C" className="menu-item" target="_blank">Discord</a></li>
                <li className="menu-section"><a href="https://www.youtube.com/channel/UCVmNrAcLYZ7RFCLf8dWfvhQ" className="menu-item" target="_blank">Youtube</a></li>
            </ul>
        </div>
    )
}
