import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { AiFillPlusCircle, AiTwotoneDelete } from "react-icons/ai";
import cvFromLinkService from '../services/cvFromLinkService.';

// {
//     "id": 1,
//     "cvform_id": 1,
//     "link": "https://github.com/yucellsarikaya"
// }

export default function CvFromLink(props) {
    const [id, setId] = useState(props.cvId)
    const [data, setData] = useState([])
    const [link, setLink] = useState()

    const add = (e) => {
        let links = { cvform_id: id, link: link }
        cvFromLinkService.cvFromLinkAdd(links).then((res) => (console.log("başarılı"))).catch((res) => (console.log("başarısız")))
        setLink("")
    }

    const del = (id) => {
        cvFromLinkService.cvFromLinkDel(id).then((res) => (console.log("silindi"))).catch((res) => (console.log("silinmedi")))
    }

    useEffect(() => {
        cvFromLinkService.cvFromLinkList().then(res => { setData(res.data) })
    }, [])

    return (
        <div>
            <div>
                <div>
                    <input
                        placeholder="Sosyal medya bağlantılarınızı ekleyin"
                        type="url"
                        className="form-control"
                        value={link}
                        onChange={e => setLink(e.target.value)}
                    />
                    <AiFillPlusCircle className="experience-icon" size={40} onClick={() => add()} />
                </div>
            </div>
            <Container>
                <ul>
                    {
                        data.filter(form => form.cvform_id == id).map((key) => (
                            <li><div>
                                <div><a href={key.link} target="_blank">{key.link}</a></div>
                                <div><AiTwotoneDelete size={20} onClick={() => del(key.id)}/></div>
                            </div></li>
                        ))
                    }
                </ul>
            </Container>
        </div>
    )
}
