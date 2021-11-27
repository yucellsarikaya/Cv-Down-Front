import React from 'react'
import { useHistory } from 'react-router-dom'

export default function LoginAndRegister() {
    let history = useHistory();

    const login = () => {
        history.push(`/login`)
    }

    const register = () => {
        history.push(`/register`)
    }
    return (
        <div>
            <li className="menu-section"><a onClick={() => login()} className="menu-item">Giriş Yap</a></li>
            <li className="menu-section"><a onClick={() => register()} className="menu-item">Kaydol</a></li>
        </div>
    )
}
