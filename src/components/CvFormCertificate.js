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
            <div className="row">
                <div class="col">
                    <input
                        placeholder="Sertifikalarınızı Giriniz"
                        type="text"
                        className="form-control"
                        value={certificate}
                        onChange={e => setCertificate(e.target.value)}
                    />
                </div>
                <div class="col-md-auto " >
                    <AiFillPlusCircle size={50} onClick={() => add()} />
                </div>
            </div>
            <Container>
                <ul class="list-group">
                    {
                        data.filter(form => form.cvform_id == id).map((key) => (
                            <li className="list-group-item list-group-item-dark"><div class="row">
                                <div class="col-md-11">{key.certificate}</div>
                                <div class="col-md-1 text-right"><AiTwotoneDelete size={20}  onClick={() => del(key.id)}/></div>
                            </div></li>
                        ))
                    }
                </ul>
            </Container>
        </div>
    )
}
