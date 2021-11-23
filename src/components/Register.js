import React, { useState } from 'react'
import { GrContract } from "react-icons/gr";
import { MdPerson, MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiLogIn } from "react-icons/bi";
import alertify from "alertifyjs"
import personService from '../services/personService';
import { Form } from 'reactstrap';
import { useHistory } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [repeatPass, setRepeatPass] = useState("")
    let history = useHistory();

    const save = () => {
        if (pass === repeatPass) {
            let person = { name: name, surname: surname, mail: mail, pass: pass }
            personService.register(person).then(res => (alertify.success("Kayıt Başarılı", 2), history.push("/"))).catch(err => alertify.error("Kayıt Başarısız", 2), history.push("/register"))
        } else {
            alertify.error("Şifreler aynı değil , lütfen aynı giriniz", 1)
        }
    }
    const login = () => {
        history.push("/login")
    }
    return (
        <div className="site-card">
            <Form>
                <div>
                    <h1>
                        Kaydolun ve CV'nizi oluşturun
                    </h1>
                    <hr />

                    <div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Adın"
                            required
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Soyadın"
                            required
                            onChange={e => setSurname(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="E-posta adresin"
                            required
                            onChange={e => setMail(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Yeni şifre"
                            name="psw"
                            id="psw"
                            required
                            onChange={e => setPass(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Şifre tekrar giriniz"
                            name="psw-repeat"
                            id="psw-repeat"
                            required
                            onChange={e => setRepeatPass(e.target.value)}
                        />
                    </div>
                </div>
            </Form>
            <div>
                <button className="register-btn" onClick={() => save()}>Kaydol</button>
                <hr />
                <div className="register-button-frame">
                    <p>Zaten bir hesabınız var mı? <a onClick={() => login()} className="btn btn-success ">Giriş yap</a></p>
                </div>
            </div>
        </div>
    )
}
