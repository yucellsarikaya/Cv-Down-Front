import React, { useState } from 'react'
import { FiLogIn } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { GrContract } from "react-icons/gr";
import { useHistory } from "react-router-dom";
import personService from '../services/personService';
import alertify from "alertifyjs"

export default function Login() {
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    let history = useHistory();

    const login = () => {
        personService.login(mail, pass).then((res) => {
            let person = res.data;
            //console.log(person)
            if (person[0] == null) {
                alertify.error("Giriş Başarısız", 2)
                setMail("")
                setPass("")
            } else {
                //console.log(person[0].id)
                alertify.success("Giriş Başarılı", 2)
                history.push(`/home/${person[0].id}`)
            }
        })
    }
    const register = () => {
        history.push(`/register`)
    }

    return (
        <div className="site-card">
            <h1>
                Giriş Yap
            </h1>
            <p>Giriş yapmak için e-posta adresinizi ve şifrenizi girin</p>
            <hr />
            <div className="">
                <form>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="E-posta Adresinizi Giriniz"
                            className="form-control"
                            onChange={e => setMail(e.target.value)}
                            value={mail}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            placeholder="Şifrenizi Giriniz"
                            className="form-control"
                            type="Password"
                            onChange={e => setPass(e.target.value)}
                            value={pass}
                        />
                    </div>
                </form>
                <hr />
                <button className="login-btn" onClick={() => login()}>Giriş Yap</button>
                <button className="register-btn" onClick={() => register()}>Kaydol</button>
            </div>
        </div>
    )
}
