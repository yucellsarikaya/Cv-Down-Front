import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { AiFillPlusCircle, AiTwotoneDelete } from "react-icons/ai";
import cvFormEducationService from '../services/cvFormEducationService';

export default function CvFormEducation(props) {
    const [id, setId] = useState(props.cvId)
    const [edu, setEdu] = useState()
    const [data, setData] = useState([])

    const add = () => {
        let eduForm = { cvform_id: id, educational_background: edu }
        cvFormEducationService.cvFormEducationAdd(eduForm).then((res) => (console.log("başarılı"))).catch((res) => (console.log("başarısız")))
        setEdu("")
    }

    const del = (id) => {
        cvFormEducationService.cvFormEducationDel(id).then((res) => (console.log("silindi"))).catch((res) => (console.log("silinmedi")))
    }

    useEffect(() => {
        cvFormEducationService.cvFormEducationList().then(res => { setData(res.data) })
    }, [])

    return (
        <div>
            <div>
                <div>
                    <input
                        placeholder="Eğitim bilgilerinizi ekleyin"
                        type="text"
                        className="form-control"
                        value={edu}
                        onChange={e => setEdu(e.target.value)}
                    />
                    <AiFillPlusCircle className="experience-icon" size={40} onClick={() => add()} />
                </div>
            </div>

            <ul className="form-link-container">
                {
                    data.filter(form => form.cvform_id == id).map((key) => (
                        <li>
                            <a>{key.educational_background}</a>
                            <AiTwotoneDelete className="form-link-icon" size={20} onClick={() => del(key.id)} />
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}