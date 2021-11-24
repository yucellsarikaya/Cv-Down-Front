import React, { useState, useEffect } from 'react'
import CvFormAreasOfİnterest from './CvFormAreasOfİnterest'
import CvFormCertificate from './CvFormCertificate'
import CvFormEducation from './CvFormEducation'
import CvFormSkils from './CvFormSkils'
import CvFromLink from './CvFromLink'
import { Navbar, NavbarBrand } from 'reactstrap'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import alertify from "alertifyjs"

export default function CvDetail(props) {
    const [id, setId] = useState(props.match.params.id)
    const [personId, setPersonId] = useState(props.match.params.personId)
    let history = useHistory();

    const next = () => {
        history.push(`/home/${personId}`)
    }

    useEffect(() => {
        alertify.success("Kayıt Başarılı", 2)
    }, [])

    return (
        <div className="site-card">
            <Navbar color="info" light expand="md">
                <NavbarBrand href="">Bilgilerinizi Giriniz</NavbarBrand>
            </Navbar>
            <br />
            <div className="col-md-6 offset-md-3 offset-md-3">
                <Navbar className="blockquote-footer" color="warning" expand="md">Eğitim Bilgilerinizi Giriniz</Navbar>
                <CvFormEducation cvId={id} />
                <hr /><hr /><br />
                <Navbar className="blockquote-footer" color="warning" expand="md">İlgi Alanlarınızı Giriniz</Navbar>
                <CvFormAreasOfİnterest cvId={id} />
                <hr /><hr /><br />
                <Navbar className="blockquote-footer" color="warning" expand="md">Sertifikalarınızı Giriniz</Navbar>
                <CvFormCertificate cvId={id} />
                <hr /><hr /><br />
                <Navbar className="blockquote-footer" color="warning" expand="md">Bağlantılarınızı Giriniz</Navbar>
                <CvFromLink cvId={id} />
                <hr /><hr /><br />
                <Navbar className="blockquote-footer" color="warning" expand="md">Yeteneklerinzi Giriniz</Navbar>
                <CvFormSkils cvId={id} />
                <Button variant="primary" onClick={() => next()}>Devam</Button>
            </div>
        </div>
    )
}
