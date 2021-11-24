import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { AiFillPlusCircle, AiTwotoneDelete } from "react-icons/ai";
import cvFormCertificateService from '../services/cvFormCertificateService';

export default function CvFormCertificate(props) {
    const [id, setId] = useState(props.cvId)
    const [data, setData] = useState([])
    const [certificate, setCertificate] = useState()

    const add = (e) => {
        let certficates = { cvform_id: id, certificate: certificate }
        cvFormCertificateService.cvFormCertificateAdd(certficates).then((res) => (console.log("başarılı"))).catch((res) => (console.log("başarısız")))
        setCertificate("")
    }

    const del = (id) => {
        cvFormCertificateService.cvFormCertificateDel(id).then((res) => (console.log("silindi"))).catch((res) => (console.log("silinmedi")))
    }

    useEffect(() => {
        cvFormCertificateService.cvFormCertificateList().then(res => { setData(res.data) })
    }, [])

    return (
        <div>
            <div>
                <div>
                    <input
                        placeholder="Sertifika bilgilerinizi ekleyin"
                        type="text"
                        className="form-control"
                        value={certificate}
                        onChange={e => setCertificate(e.target.value)}
                    />
                    <AiFillPlusCircle className="experience-icon" size={40} onClick={() => add()} />
                </div>
            </div>
            <Container>
                <ul>
                    {
                        data.filter(form => form.cvform_id == id).map((key) => (
                            <li><div>
                                <div>{key.certificate}</div>
                                <div><AiTwotoneDelete size={20}  onClick={() => del(key.id)}/></div>
                            </div></li>
                        ))
                    }
                </ul>
            </Container>
        </div>
    )
}
