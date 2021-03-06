import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import cvFormService from '../services/cvFormService'
import FormDetail from './FormDetail'
import { GrClose } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import alertify from "alertifyjs"
import { MainContext, useContext } from "../context"

export default function CvList(props) {
    const { setLoginCase} = useContext(MainContext)
    const [id, setId] = useState(props.match.params.id)
    const [cvData, setCvData] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [formId, setFormId] = useState()
    let history = useHistory();

    useEffect(() => {
        setLoginCase(true)
    }, [])

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
    },[])

    return (
        <div className="site-card">
            <div>
                <Button variant="warning" className="resume-home-btn" onClick={() => home()}>❰❰❰ Ana Sayfa</Button>
                 {
                    cvData.filter(formLists => formLists.person_id == id).map((key, index) => (
                        <div className="resume-card">
                            <div className="resume-on">
                                <div className="resume-content">
                                    <h5 className="card-title">{key.name_surname}</h5>
                                    <li className="card-text">{key.phone}</li>
                                    <li className="card-text">{key.mail}</li>
                                </div>
                                <div className="cvlist-btns">
                                    <a className="primary-btn" onClick={() => toggleModal(key)}>Özgeçmiş Ayrıntılarını Gör</a>
                                    <Button className="resume-delete-btn" onClick={() => cfFormDel(key.id)}>Özgeçmişi Sil<AiTwotoneDelete className="modal-close-btn garbage" /></Button>
                                </div>
                            </div>
                        </div>
                    ))
                } 
                <a className="primary-btn" onClick={() => toggleModal(5)}>Özgeçmiş Ayrıntılarını Gör</a>
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