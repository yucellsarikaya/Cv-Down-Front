import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap';

export default function Home(props) {
    const [id, setId] = useState(props.match.params.id)
    let history = useHistory();

    const cvCreate = () => {
        history.push(`/cvForm/${id}`)
    }

    const login = () => {
        history.push(`/`)
    }

    const update = () => {
        history.push(`/home/${id}/update`)
    }

    const cvList = () => {
        history.push(`/cvList/${id}`)
    }

    return (
        <div className="home-card">
            <Container fluid>
                <div className="homePage">
                    <h3>Hoşgeldin Yücel</h3>
                    <p>Profesyonel CV'ni buradan oluşturabilirsin</p>
                    <ul className="listUl listLi">
                        <li className="listLiUl"><button class="createCv" onClick={() => cvCreate()}>CV'nizi Oluşturun</button></li>
                        <li className="listLiUl"><button class="success" onClick={() => update()}><img className="succes-image" src="https://r.resimlink.com/JKnk.png"></img><h2> Bilgilerinizi Güncelleyin</h2></button></li>  
                        <li className="listLiUl"><button class="success" onClick={() => cvList()}><img className="succes-image" src="https://icons.iconarchive.com/icons/inipagi/job-seeker/1024/cv-icon.png"></img><h2>Geçmiş CV Bilgilerinizi Görün</h2></button></li>
                        <li className="listLiUl"><button class="success" onClick={() => cvCreate()}><img className="succes-image" src="https://r.resimlink.com/MIva.png"></img><h2>Cv Şablonlarını Görün</h2></button></li>
                        <li className="listLiUl"><button class="success" onClick={() => login()}><img className="succes-image" src="https://www.freeiconspng.com/uploads/x-png-15.png"></img><h2>Çıkış</h2></button></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

//<button >Cv oluştur</button>
