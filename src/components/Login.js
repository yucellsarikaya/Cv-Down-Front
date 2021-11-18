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
        <div>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h1>
                        <FiLogIn />
                        Giriş Yap
                    </h1>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label for="email"><MdEmail size={40} /><b>Mail</b></label>
                                <input
                                    type="email"
                                    placeholder="E-posta Adresinizi Giriniz"
                                    className="form-control"
                                    onChange={e => setMail(e.target.value)}
                                    value={mail}
                                />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label for="psw"><RiLockPasswordLine size={40} /><b>Şifre</b></label>
                                <input
                                    placeholder="Şifrenizi Giriniz"
                                    className="form-control"
                                    type="Password"
                                    onChange={e => setPass(e.target.value)}
                                    value={pass}
                                />
                            </div>
                            <br />
                        </form>
                        <button className="btn btn-info float-lg-end" onClick={() => register()}><GrContract />Kayıt Ol</button>
                        <button className="btn btn-success " onClick={() => login()}><FiLogIn />Giriş Yap</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
