import React, { useState, useEffect } from 'react'
import CvFormAreasOfİnterest from './CvFormAreasOfİnterest'
import CvFormCertificate from './CvFormCertificate'
import CvFormEducation from './CvFormEducation'
import CvFormSkils from './CvFormSkils'
import CvFromLink from './CvFromLink'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import alertify from "alertifyjs"
import { MainContext, useContext } from "../context"

export default function CvDetail(props) {
    const { setLoginCase} = useContext(MainContext)
    const [id, setId] = useState(props.match.params.id)
    const [personId, setPersonId] = useState(props.match.params.personId)
    let history = useHistory();

    useEffect(() => {
        setLoginCase(true)
    }, [])

    const next = () => {
        history.push(`/templates/${id}`)
    }

    useEffect(() => {
        alertify.success("Kayıt Başarılı", 2)
    }, [])

    return (
        <div>
            <div class="container-bar">
                <ul class="progressbar">
                    <li class="active">Kişisel</li>
                    <li class="active">Deneyimler</li>
                    <li>Şablon</li>
                </ul>
            </div>
            <div className="site-card">
                <h1>
                    CV Bilgilerinizi Giriniz
                </h1>
                <p>Deneyim bilgilerinizi girip sonraki adıma geçebilirsiniz.</p>
                <hr />
                <div className="cv-experience">
                    <CvFormEducation cvId={personId} />
                    <CvFormAreasOfİnterest cvId={personId} />
                    <CvFormCertificate cvId={personId} />
                    <CvFromLink cvId={personId} />
                    <CvFormSkils cvId={personId} />
                    <hr />
                    <div className="next-cv">
                        <Button variant="primary" onClick={() => next()}>Sonraki adım ❱❱</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
