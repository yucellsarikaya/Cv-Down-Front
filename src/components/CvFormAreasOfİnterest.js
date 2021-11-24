import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { AiFillPlusCircle, AiTwotoneDelete } from "react-icons/ai";
import cvFormAreasOfİnterestService from '../services/cvFormAreasOfİnterestService';

export default function CvFormAreasOfİnterest(props) {
    const [id, setId] = useState(props.cvId)
    const [data, setData] = useState([])
    const [interest, setInterest] = useState()

    const add = (e) => {
        let areasInterest = { cvform_id: id, areas_of_interest: interest }
        cvFormAreasOfİnterestService.cvFormAreasOfİnterestAdd(areasInterest).then((res) => (console.log("başarılı"))).catch((res) => (console.log("başarısız")))
        setInterest("")
    }

    const del = (id) => {
        cvFormAreasOfİnterestService.cvFormAreasOfİnterestDel(id).then((res) => (console.log("silindi"))).catch((res) => (console.log("silinmedi")))
    }

    useEffect(() => {
        cvFormAreasOfİnterestService.cvFormAreasOfİnterestList().then(res => { setData(res.data) })
    }, [])

    return (
        <div>
            <div>
                <div>
                    <input
                        placeholder="İlgi alanlarınızı ekleyin"
                        type="text"
                        className="form-control"
                        value={interest}
                        onChange={e => setInterest(e.target.value)}
                    />
                    <AiFillPlusCircle className="experience-icon" size={40} onClick={() => add()} />
                </div>
            </div>
            <Container>
                <ul>
                    {
                        data.filter(form => form.cvform_id == id).map((key) => (
                            <li><div>
                                <div>{key.areas_of_interest}</div>
                                <div><AiTwotoneDelete size={20} onClick={() => del(key.id)} /></div>
                            </div></li>
                        ))
                    }
                </ul>
            </Container>
        </div>
    )
}
