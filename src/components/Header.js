import React, { useEffect, useState } from 'react'
import { MainContext, useContext } from "../context"
import personService from '../services/personService'
import LoginAndRegister from './LoginAndRegister'
import { useHistory } from 'react-router-dom'

export default function Header() {
    const { loginCase, userId } = useContext(MainContext)
    const [nameAndSurname, setNameAndSurname] = useState()
    let history = useHistory();

    
    const login = () => {
        history.push(`/login`)
    }

    const register = () => {
        history.push(`/register`)
    }

    useEffect(() => {
        if(loginCase){
            personService.getById(userId).then((res) => { setNameAndSurname(res.data) })
        }else{console.log(false, " ", userId)}
    })

    return (
        <div className="header-style">
            <ul className="nav">
                <li className="menu-section"><a href="/" className="logo"><b>CV</b>down</a></li>
                 {
                    loginCase ? " " :
                     <li className="menu-section"><a onClick={() => login()} className="menu-item">Giriş Yap</a> <a onClick={() => register()} className="menu-item">Kaydol</a></li>
                } 
                <li className="menu-section"><a href="https://github.com/yucellsarikaya/Cv-Down-Front" className="menu-item" target="_blank">Github</a></li>
                <li className="menu-section"><a href="https://discord.gg/t7qgzBRr2C" className="menu-item" target="_blank">Discord</a></li>
                <li className="menu-section"><a href="https://www.youtube.com/channel/UCVmNrAcLYZ7RFCLf8dWfvhQ" className="menu-item" target="_blank">Youtube</a></li>
            </ul>
        </div>
    )
}
