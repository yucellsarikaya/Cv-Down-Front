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
        <div id="drag" className="cv instaFade wrap">
            <div className="mainDetails">
                <div id="headshot" className="">
                    <img src="https://avatars2.githubusercontent.com/u/24512843?s=400&v=4" title="Hi, I'm Jenny!" alt="Jennifer Mogan" />
                </div>

                <div id="name">
                    <h1 className="quickFade delayTwo">{deneme[0]}</h1>
                    <h4 className="quickFade delayThree">TR, EN</h4>
                    <h4 className="quickFade delayThree">Computer Engineer</h4>
                </div>

                <div id="contactDetails" className="quickFade delayFour">
                    <ul>

                        <li><a href="//linkedin.com/in/jennifermogan" title="LinkedIn"><i className="fa fa-print" aria-hidden="true"></i></a></li>
                        <li><a href="//linkedin.com/in/jennifermogan" title="LinkedIn"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>

                    </ul>
                </div>
                <div className="clear"></div>
            </div>

            <div id="mainArea" className="quickFade delayFive">

                <section>
                    <article>
                        <div className="sectionTitle">
                            <h1>Kişisel Bilgileri</h1>
                        </div>

                        <div className="sectionContent">
                            <h5>{deneme[0]}</h5>
                            <p>{deneme[1]}</p>
                            <p>{deneme[2]}</p>
                            <p>{deneme[3]}</p>
                            <p>{deneme[4]}</p>
                            <p>{deneme[5]}</p>
                            <p>Ehliyet {deneme[6]}</p>
                        </div>
                    </article>
                    <div className="clear"></div>
                </section>


                <section>
                    <div className="sectionTitle">
                        <h1>Eğitim Bilgileri</h1>
                    </div>

                    <div className="sectionContent">
                        <ul classNameName="list-group">
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

                    </div>


                    <div className="clear"></div>
                </section>


                <section>
                    <div className="sectionTitle">
                        <h1>İlgi Alanları</h1>
                    </div>

                    <div className="sectionContent">
                        <ul classNameName="keySkills">
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
                    </div>
                    <div className="clear"></div>
                </section>


                <section id="Education">
                    <div className="sectionTitle">
                        <h1>Sertifikalar</h1>
                    </div>

                    <div className="sectionContent">
                        <ul classNameName="list-group">
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
                    </div>
                    <div className="clear"></div>
                </section>


                <section id="Education">
                    <div className="sectionTitle">
                        <h1>Bağlantı Linkleri</h1>
                    </div>

                    <div className="sectionContent">

                        <ul classNameName="list-group">
                            {/* {
                                dataLink.filter(form => form.cvform_id == props.idForm.id).map((key) => (
                                    <li><div classNameName="col-md-11"><a href={key.link} target="_blank">{key.link}</a></div></li>
                                ))
                            } */}
                            {
                                deneme4.map((key) => (
                                    <li > <a href={key} target="_blank">{key}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="clear"></div>
                </section>
                <section id="Education">
                    <div className="sectionTitle">
                        <h1>Yetenekler</h1>
                    </div>

                    <div className="sectionContent">
                        <ul classNameName="keySkills">
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
                    <div className="clear"></div>
                </section>



            </div>
        </div>
    )
}
