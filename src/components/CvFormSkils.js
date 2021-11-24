import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { AiFillPlusCircle, AiTwotoneDelete } from "react-icons/ai";
import cvFormSkilsService from '../services/cvFormSkilsService';

// {
//     "id": 1,
//     "cvform_id": 1,
//     "skills": "Java"
// }

export default function CvFormSkils(props) {
    const [id, setId] = useState(props.cvId)
    const [data, setData] = useState([])
    const [skil, setSkil] = useState()

    const add = (e) => {
        let skils = { cvform_id: id, skills: skil }
        cvFormSkilsService.cvFormSkilsServiceAdd(skils).then((res) => (console.log("başarılı"))).catch((res) => (console.log("başarısız")))
        setSkil("")
    }

    const del = (id) => {
        cvFormSkilsService.cvFormSkilsServiceDel(id).then((res) => (console.log("silindi"))).catch((res) => (console.log("silinmedi")))
    }

    useEffect(() => {
        cvFormSkilsService.cvFormSkilsServiceList().then(res => { setData(res.data) })
    }, [])

    return (
        <div>
            <div>
                <div>
                    <input
                        placeholder="Yeteneklerinzi ekleyin"
                        type="text"
                        className="form-control"
                        value={skil}
                        onChange={e => setSkil(e.target.value)}
                    />
                    <AiFillPlusCircle className="experience-icon"size={40} onClick={() => add()} />
                </div>
            </div>
            <Container>
                <ul>
                    {
                        data.filter(form => form.cvform_id == id).map((key) => (
                            <li><div>
                                <div><a href={key.link}>{key.skills}</a></div>
                                <div><AiTwotoneDelete size={20} onClick={() => del(key.id)} /></div>
                            </div></li>
                        ))
                    }
                </ul>
            </Container>
        </div>
    )
}
