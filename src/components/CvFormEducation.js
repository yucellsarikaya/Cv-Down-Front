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
            <div className="row">
                <div class="col">
                    <input
                        placeholder="Eğitim Bilginizi Giriniz"
                        type="text"
                        className="form-control"
                        value={edu}
                        onChange={e => setEdu(e.target.value)}
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
                                <div class="col-md-11">{key.educational_background}</div>
                                <div class="col-md-1 text-right"><AiTwotoneDelete size={20} onClick={() => del(key.id)}/></div>
                            </div></li>
                        ))
                    }
                </ul>
            </Container>
        </div>
    )
}