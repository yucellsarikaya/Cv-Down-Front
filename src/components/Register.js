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
            personService.register(person).then(res => (alertify.success("Kayıt Başarılı", 2),  history.push("/"))).catch(err => alertify.error("Kayıt Başarısız", 2), history.push("/register"))
        } else {
            alertify.error("Şifreler aynı değil , lütfen aynı giriniz", 1)
        }
    }
    const login = () => {
        history.push("/")
    }
    return (
        <div >
            <Form>
                <div className=" col-md-6 offset-md-3 offset-md-3">
                    <h1>
                        <GrContract />
                        Kayıt Ol
                    </h1>
                    <p>Bir hesap oluşturmak için lütfen bu formu doldurun.</p>
                    <hr />

                    <label for="name"><MdPerson size={40} /><b>İsim</b></label>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="İsim Giriniz"
                            required
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <label for="surname"><MdPerson size={40} /><b>Soyisim</b></label>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Soyisim Giriniz"
                            required
                            onChange={e => setSurname(e.target.value)}
                        />
                    </div>

                    <label for="email"><MdEmail size={40} /><b>Mail</b></label>
                    <div>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Mail Giriniz"
                            required
                            onChange={e => setMail(e.target.value)}
                        />
                    </div>

                    <br /><label for="psw"><RiLockPasswordLine size={40} /><b>Şifre</b></label>
                    <div>
                        <input
                            type="password"
                            placeholder="Şifre giriniz"
                            name="psw"
                            id="psw"
                            required
                            onChange={e => setPass(e.target.value)}
                        />
                    </div>

                    <label for="psw-repeat"><RiLockPasswordLine size={40} /><b>Şifre Tekrar</b></label>
                    <div>
                        <input
                            type="password"
                            placeholder="Şifre Tekrar Giriniz"
                            name="psw-repeat"
                            id="psw-repeat"
                            required
                            onChange={e => setRepeatPass(e.target.value)}
                        />
                    </div>
                </div>
            </Form>
            <div className=" col-md-6 offset-md-3 offset-md-3">
                <button class="registerbtn" onClick={() => save()}><GrContract />Kayıt ol</button>
                <div class="container signin">
                    <p>Zaten hesabınız var mı? <a onClick={() => login()} className="btn btn-success "><BiLogIn />Giriş yap</a></p>
                </div>
            </div>
        </div>
    )
}
