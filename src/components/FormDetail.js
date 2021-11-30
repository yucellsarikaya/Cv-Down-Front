import React, { useEffect, useState } from 'react'
import cvFormEducationService from '../services/cvFormEducationService';
import cvFormAreasOfİnterestService from '../services/cvFormAreasOfİnterestService';
import cvFormCertificateService from '../services/cvFormCertificateService';
import cvFromLinkService from '../services/cvFromLinkService.';
import cvFormSkilsService from '../services/cvFormSkilsService';

export default function FormDetail(props) {
    const [deneme, setDeneme] = useState(["Fatih Delice", "İşsiz", "0511 111 11 11", "delicex58@gmail.com", "Sivas", "Ekip ile çalışmaya uyumlu,pratik düşünebilen sürekli yenilikleri takip eden, yeni bilgiler öğrenmeyi ve gelişmeyi seven bir bireyim.", "Yok"])
    const [deneme1, setDeneme1] = useState(["cumhuriyet üniversitesi bilgisayar mühendisliği", "sivas lisesi", "cumhuriyet üniversitesi bilgisayar mühendisliği", "cumhuriyet üniversitesi bilgisayar mühendisliği", "cumhuriyet üniversitesi bilgisayar mühendisliğicumhuriyet üniversitesi bilgisayar mühendisliği"])
    const [deneme2, setDeneme2] = useState(["Kitap okumak", "Spor yapmak", "Kod yazmak"])
    const [deneme3, setDeneme3] = useState(["JAVA İLE PROGRAMLAMAYA GİRİŞ - 2020", "JAVA İLE PROGRAMLAMAYA GİRİŞ - 2020", "JAVA İLE PROGRAMLAMAYA GİRİŞ - 2020", "C# İLE PROGRAMLAMAYA GİRİŞ - 2020"])
    const [deneme4, setDeneme4] = useState(["https://www.youtube.com/channel/UCVmNrAcLYZ7RFCLf8dWfvhQ", "https://discord.com/invite/t7qgzBRr2C", "https://github.com/yucellsarikaya/Cv-Down-Front"])
    const [deneme5, setDeneme5] = useState(["Java", "C#", "HTML", "CSS", "JS", "React", "Mysql"])
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
        console.log(dataEgitim)
    }, [])
    return (
        <div>
            <h3><b>Kişisel Bilgileri</b></h3>
            {/* <h5>{props.idForm.name_surname}</h5>
            <p>{props.idForm.job}</p>
            <p>{props.idForm.phone}</p>
            <p>{props.idForm.mail}</p>
            <p>{props.idForm.location}</p>
            <p>{props.idForm.cover_letter}</p>
            <p>Ehliyet {props.idForm.driving_license}</p> */}
            <h5>{deneme[0]}</h5>
            <p>{deneme[1]}</p>
            <p>{deneme[2]}</p>
            <p>{deneme[3]}</p>
            <p>{deneme[4]}</p>
            <p>{deneme[5]}</p>
            <p>Ehliyet {deneme[6]}</p>
            <hr />
            <h3><b>Eğitim Bilgileri</b></h3>
            <ul className="list-group">
                {/* {
                    dataEgitim.filter(form => form.cvform_id == props.idForm.id).map((key) => (
                        <li>{key.educational_background}</li>
                    ))
                } */}
                {
                    deneme1.map((key) => (
                        <li>{key}</li>
                    ))
                }
            </ul>
            <hr />
            <h3><b>İlgi Alanları</b></h3>
            <ul className="list-group">
                {/* {
                    dataIilgi.filter(form => form.cvform_id == props.idForm.id).map((key) => (
                        <li>{key.areas_of_interest}</li>
                    ))
                } */}
                {
                    deneme2.map((key) => (
                        <li>{key}</li>
                    ))
                }
            </ul>
            <hr />
            <h3><b>Sertifikaları</b></h3>
            <ul className="list-group">
                {/* {
                    dataSertifika.filter(form => form.cvform_id == props.idForm.id).map((key) => (
                        <li>{key.certificate}</li>
                    ))
                } */}
                {
                    deneme3.map((key) => (
                        <li>{key}</li>
                    ))
                }
            </ul>
            <hr />
            <h3><b>Bağlantı Linkleri</b></h3>
            <ul className="list-group">
                {/* {
                    dataLink.filter(form => form.cvform_id == props.idForm.id).map((key) => (
                        <li><div className="col-md-11"><a href={key.link} target="_blank">{key.link}</a></div></li>
                    ))
                } */}
                {
                    deneme4.map((key) => (
                        <li > <a href={key} target="_blank">{key}</a></li>
                    ))
                }
            </ul>
            <hr />
            <h3><b>Yetenekleri</b></h3>
            <ul className="list-group">
                {/* {
                    dataSkil.filter(form => form.cvform_id == props.idForm.id).map((key) => (
                        <li>{key.skills}</li>
                    ))
                } */}
                {
                    deneme5.map((key) => (
                        <li>{key}</li>
                    ))
                }
            </ul>
        </div>
    )
}
