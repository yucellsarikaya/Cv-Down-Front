import React, { useState, useEffect } from 'react'
import { Form, Button } from 'reactstrap'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useHistory } from 'react-router-dom';
import { GrNext } from "react-icons/gr";
import cvFormService from '../services/cvFormService';
import personService from '../services/personService';
import alertify from "alertifyjs"

function CvForm(props) {
    const [nameSurname, setNameSurname] = useState()
    const [phone, setPhone] = useState()
    const [job, setJob] = useState()
    const [mail, setMail] = useState()
    const [location, setLocation] = useState()
    const [cover_letter, setCoverLetter] = useState()
    const [driving_license, setDriving_License] = useState()
    let history = useHistory();

    const next = () => {
        if (nameSurname && phone && job && mail && location && cover_letter && driving_license != null) {
            let data = {
                person_id: props.person,
                name_surname: nameSurname,
                job: job,
                phone: phone,
                mail: mail,
                location: location,
                cover_letter: cover_letter,
                driving_license: driving_license
            }
            console.log(data)
            cvFormService.cvformSave(data).
                then((res) => (personService.getId().then((resData) => history.push(`/cvFormDetail/${resData.data[0].id}/${props.person}`))))
                .catch((res) => (alertify.error("Kayıt Başarısız", 2)))
        } else {
            alertify.error("Eksik yerleri giriniz", 2)
        }

    }

    return (
        <div>
            <div class="container-bar">
                <ul class="progressbar">
                    <li class="active">Kişisel</li>
                    <li>Deneyimler</li>
                    <li>Şablon</li>
                </ul>
            </div> 
            <div className="site-card">
                <h1>
                    CV Bilgilerinizi Giriniz
                </h1>
                <p>Kişisel bilgilerinizi girip sonraki adıma geçebilirsiniz.</p>
                <hr />
                <Form>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="İsim Soyisim Giriniz"
                        required
                        onChange={e => setNameSurname(e.target.value)}
                    />
                    <br />
                    <PhoneInput
                        placeholder="Telefon Giriniz"
                        value={phone}
                        required
                        onChange={setPhone}
                        className="phone-input"
                    />
                    <br />
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Mail Giriniz"
                        required
                        onChange={e => setMail(e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Mesleğinizi Giriniz"
                        required
                        onChange={e => setJob(e.target.value)}
                    />
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Adresinizi Giriniz"
                        required
                        onChange={e => setLocation(e.target.value)}
                    />
                    <br />
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Önyazı Giriniz"
                        required
                        onChange={e => setCoverLetter(e.target.value)}
                    />
                    <br />
                    <div className="radio-text">
                        <label type="text">Ehliyet:&nbsp;&nbsp;</label>
                        <input type="radio" name="gender" onChange={e => setDriving_License("Var")} /> Var&nbsp;&nbsp;
                        <input type="radio" name="gender" onChange={e => setDriving_License("Yok")} /> Yok
                    </div>
                </Form>
                <div  className="next-cv">
                    <Button onClick={() => next()}>Sonraki adım ❱❱</Button>
                </div>
            </div>
        </div>
    )
}

export default CvForm