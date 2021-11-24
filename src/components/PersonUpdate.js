import React, { useEffect, useState } from 'react'
import { GrContract } from "react-icons/gr";
import { MdPerson, MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import personService from '../services/personService';
import { Form } from 'reactstrap';
import alertify from "alertifyjs"
import { useHistory } from 'react-router-dom'

export default function PersonUpdate(props) {
    const [id, setId] = useState(props.match.params.id)
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [repeatPass, setRepeatPass] = useState("")
    const [data, setData] = useState([])
    let history = useHistory();

    useEffect(() => {
        personService.getById(id).then((res) => { setData(res.data) })
        setName(data.name)
        setSurname(data.surname)
        setMail(data.mail)
    })

    const save = () => {
        if (pass === repeatPass) {
            let person = { id: id, name: name, surname: surname, mail: mail, pass: pass }
            personService.update(person).then(res => (alertify.success("Güncelleme Başarılı", 2), history.push(`/home/${id}`))).catch(err => alertify.error("Güncelleme Başarısız", 2))
        } else {
            alertify.error("Şifreler aynı değil , lütfen aynı giriniz", 1)
        }
    }


    return (
        <div>
            <div  className="site-card">
                <Form>
                    <div>
                        <h1>
                            Bilgileri Güncelle
                        </h1>
                        <p>Bilgilerinizi güncellemek için lütfen bu formu doldurun.</p>
                        <hr />

                        <div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Adın"
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Soyadın"
                                required
                                value={surname}
                                onChange={e => setSurname(e.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="E-posta adresin"
                                required
                                value={mail}
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
                                placeholder="Yeni şifrenizi tekrar giriniz"
                                name="psw-repeat"
                                id="psw-repeat"
                                required
                                onChange={e => setRepeatPass(e.target.value)}
                            />
                        </div>
                    </div>
                </Form>
                <div className=" col-md-6 offset-md-3 offset-md-3">
                    <button className="register-btn" onClick={() => save()}>Bilgileri Güncelle</button>
                </div>
            </div>
        </div>
    )
}
