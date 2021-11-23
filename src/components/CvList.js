import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import cvFormService from '../services/cvFormService'
import FormDetail from './FormDetail'
import { GrClose } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import alertify from "alertifyjs"

export default function CvList(props) {
    const [deneme, setDeneme] = useState(["Fatih Delice", "İşsiz", "0511 111 11 11", "delicex58@gmail.com", "Sivas", "Ornek yazılımcı", "Yok"])
    const [id, setId] = useState(props.match.params.id)
    const [cvData, setCvData] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [formId, setFormId] = useState()
    let history = useHistory();

    const next = () => {
        history.push(`/home/${id}`)
    }

    const toggleModal = (formId) => {
        setIsOpen(!modalIsOpen);
        setFormId(formId)
    }

    const cfFormDel = (key) => {
        cvFormService.cvFormDel(key).then((res) => (alertify.error("Özgeçmiş Silindi", 2))).catch((res) => (alertify.warning("Özgeçmiş Silinemedi", 2)))
    }

    const home = () => {
        history.push(`/home/${id}`)
    }

    useEffect(() => {
        cvFormService.cvFormList().then((res) => { setCvData(res.data) })
    })

    return (
        <div className="container">
            <Button variant="warning" onClick={() => home()}>Anasayfa</Button>
            {/* {
                cvData.filter(formLists => formLists.person_id == id).map((key, index) => (
                    <div className="divSize">
                        <div className="card-header">
                        <Button size="sm" className="btn btn-danger" onClick={() => cfFormDel(key.id)}><AiTwotoneDelete className="modal-close-btn" />Özgeçmişi Sil</Button>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{key.name_surname}</h5>
                                    <li className="card-text">{key.phone}</li>
                                    <li className="card-text">{key.mail}</li>
                                    <a className="btn btn-primary" onClick={() => toggleModal(key)}>Özgeçmiş Ayrıntılarını Gör</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            } */}
            <div className="divSize">
                <div className="card-header">
                    <Button size="sm" className="btn btn-danger"><AiTwotoneDelete className="modal-close-btn" />Özgeçmişi Sil</Button>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{deneme[0]}</h5>
                            <li className="card-text">{deneme[0]}</li>
                            <li className="card-text">{deneme[0]}</li>
                            <a className="btn btn-primary" onClick={() => toggleModal({ deneme })}>Özgeçmiş Ayrıntılarını Gör</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divSize">
                <div className="card-header">
                    <Button size="sm" className="btn btn-danger"><AiTwotoneDelete className="modal-close-btn" />Özgeçmişi Sil</Button>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{deneme[0]}</h5>
                            <li className="card-text">{deneme[0]}</li>
                            <li className="card-text">{deneme[0]}</li>
                            <a className="btn btn-primary" onClick={() => toggleModal({ deneme })}>Özgeçmiş Ayrıntılarını Gör</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divSize">
                <div className="card-header">
                    <Button size="sm" className="btn btn-danger"><AiTwotoneDelete className="modal-close-btn" />Özgeçmişi Sil</Button>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{deneme[0]}</h5>
                            <li className="card-text">{deneme[0]}</li>
                            <li className="card-text">{deneme[0]}</li>
                            <a className="btn btn-primary" onClick={() => toggleModal({ deneme })}>Özgeçmiş Ayrıntılarını Gör</a>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="about-modal"
                overlayClassName="about-modal-overlay">
                <GrClose onClick={toggleModal} className="modal-close-btn" />
                <FormDetail idForm={formId} />
            </Modal>
        </div>
    )
}
{/* <li class="list-group-item">Özgeçmiş {index+1}</li> */ }