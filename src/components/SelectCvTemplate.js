import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { MainContext, useContext } from "../context"

export default function SelectCvTemplate(props) {
    const { setLoginCase} = useContext(MainContext)
    const [id, setId] = useState(props.match.params.id)
    let history = useHistory();

    useEffect(() => {
        setLoginCase(true)
    }, [])

    const home = () => {
        history.push(`/home/${id}`)
    }
    return (
        <div>
            <div class="container-bar">
                <Button variant="warning" className="resume-home-btn" onClick={() => home()}>❰❰❰ Ana Sayfa</Button>
                <ul class="progressbar">
                    <li class="active">Kişisel</li>
                    <li class="active">Deneyimler</li>
                    <li class="active">Şablon</li>
                </ul>
            </div>
            <div className="templates-container">
                <h1>
                    CV şablonunuzu seçiniz
                </h1>
                <p>Şablonunuzu seçtikten sonra CV'nizin son halini görüntüleyebilirsiniz.</p>
                <hr />
                <div className="select-cv-templates">
                    <ul className="listUl listLi">
                        <li className="templates-card"><button><img src="https://pngimg.com/uploads/cv/cv_PNG38.png" className="templates-icons"></img></button></li>
                        <li className="templates-card"><button><img src="https://pngimg.com/uploads/cv/cv_PNG38.png" className="templates-icons"></img></button></li>
                        <li className="templates-card"><button><img src="https://pngimg.com/uploads/cv/cv_PNG38.png" className="templates-icons"></img></button></li>
                    </ul>
                </div>
                <div className="templates-alt"></div>
            </div>
        </div>
    )
}
