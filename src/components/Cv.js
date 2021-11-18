import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import CvForm from './CvForm'

export default function Cv(props) {
    const [id, setId] = useState(props.match.params.id)
    //const [id, setId] = useState('')
    return (
        <div>
            <Navbar color="info" light expand="md">
                <NavbarBrand href="">Bilgilerinizi Giriniz</NavbarBrand>
            </Navbar>
            <br />
            <div className="col-md-6 offset-md-3 offset-md-3">
                <Navbar className="blockquote-footer" color="warning" expand="md">Kişisiel Bilgilerinizi Giriniz</Navbar>
                <CvForm person={id}/>
                {/* <CvForm idGet={setId} /> */}
            </div>
        </div>
    )
}

