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
        <div className="site-card">
            <Container fluid>
                <div class="homePage">
                    <h3>Hoşgeldin Yücel</h3>
                    <ul class="listUl listLi">
                        <li class="listLiUl"><button class="label success" onClick={() => cvCreate()}>Cv Oluştur</button></li>
                        <li class="listLiUl"><button class="label success" onClick={() => update()}>Bilgilerinizi Güncelleyin</button></li>  
                        <li class="listLiUl"><button class="label success" onClick={() => cvList()}>Geçmiş CV Bilgileri Gör</button></li>
                        <li class="listLiUl"><button class="label success" onClick={() => cvCreate()}>Cv Şablonları Gör</button></li>
                        <li class="listLiUl"><button class="label success" onClick={() => login()}>Çıkış</button></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

//<button >Cv oluştur</button>
