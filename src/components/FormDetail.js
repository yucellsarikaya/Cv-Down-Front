import React, { useEffect, useState } from 'react'
import cvFormEducationService from '../services/cvFormEducationService';
import cvFormAreasOfİnterestService from '../services/cvFormAreasOfİnterestService';
import cvFormCertificateService from '../services/cvFormCertificateService';
import cvFromLinkService from '../services/cvFromLinkService.';
import cvFormSkilsService from '../services/cvFormSkilsService';

export default function FormDetail(props) {
    const [dataEgitim, setDataEgitim] = useState([])
    const [dataIilgi, setDataIlgi] = useState([])
    const [dataSertifika, setDataSertifika] = useState([])
    const [dataLink, setDataLink] = useState([])
    const [dataSkil, setDataSkil] = useState([])
    useEffect(() => {
        cvFormEducationService.cvFormEducationList().then(res => { setDataEgitim(res.data) })
        cvFormAreasOfİnterestService.cvFormAreasOfİnterestList().then(res => { setDataIlgi(res.data) })
        cvFormCertificateService.cvFormCertificateList().then(res => { setDataSertifika(res.data) })
        cvFromLinkService.cvFromLinkList().then(res => { setDataLink(res.data) })
        cvFormSkilsService.cvFormSkilsServiceList().then(res => { setDataSkil(res.data) })
    }, [])
    return (
        <div>
            <h3><b>Kişisel Bilgileri</b></h3>
            <h5>{props.idForm.name_surname}</h5>
            <p>{props.idForm.job}</p>
            <p>{props.idForm.phone}</p>
            <p>{props.idForm.mail}</p>
            <p>{props.idForm.location}</p>
            <p>{props.idForm.cover_letter}</p>
            <p>Ehliyet {props.idForm.driving_license}</p>
            <hr />
            <h3><b>Eğitim Bilgileri</b></h3>
            <ul className="list-group">
                {
                    dataEgitim.filter(form => form.cvform_id == props.idForm.id).map((key) => (
                        <li>{key.educational_background}</li>
                    ))
                }
            </ul>
            <hr />
            <h3><b>İlgi Alanları</b></h3>
            <ul className="list-group">
                {
                    dataIilgi.filter(form => form.cvform_id == props.idForm.id).map((key) => (
                        <li>{key.areas_of_interest}</li>
                    ))
                }
            </ul>
            <hr />
            <h3><b>Sertifikaları</b></h3>
            <ul className="list-group">
                {
                    dataSertifika.filter(form => form.cvform_id == props.idForm.id).map((key) => (
                        <li>{key.certificate}</li>
                    ))
                }
            </ul>
            <hr />
            <h3><b>Bağlantı Linkleri</b></h3>
            <ul className="list-group">
                {
                    dataLink.filter(form => form.cvform_id == props.idForm.id).map((key) => (
                        <li><div className="col-md-11"><a href={key.link} target="_blank">{key.link}</a></div></li>
                    ))
                }
            </ul>
            <hr />
            <h3><b>Yetenekleri</b></h3>
            <ul className="list-group">
                {
                    dataSkil.filter(form => form.cvform_id == props.idForm.id).map((key) => (
                        <li>{key.skills}</li>
                    ))
                }
            </ul>
        </div>
    )
}
