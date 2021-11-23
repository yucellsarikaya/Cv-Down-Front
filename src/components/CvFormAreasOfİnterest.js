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
            <div className="row">
                <div className="col">
                    <input
                        placeholder="İlgi Alanınız Giriniz"
                        type="text"
                        className="form-control"
                        value={interest}
                        onChange={e => setInterest(e.target.value)}
                    />
                </div>
                <div className="col-md-auto " >
                    <AiFillPlusCircle size={50} onClick={() => add()} />
                </div>
            </div>
            <Container>
                <ul className="list-group">
                    {
                        data.filter(form => form.cvform_id == id).map((key) => (
                            <li className="list-group-item list-group-item-dark"><div className="row">
                                <div className="col-md-11">{key.areas_of_interest}</div>
                                <div className="col-md-1 text-right"><AiTwotoneDelete size={20} onClick={() => del(key.id)} /></div>
                            </div></li>
                        ))
                    }
                </ul>
            </Container>
        </div>
    )
}
