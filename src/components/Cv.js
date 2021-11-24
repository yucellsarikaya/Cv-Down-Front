import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import CvForm from './CvForm'

export default function Cv(props) {
    const [id, setId] = useState(props.match.params.id)
    //const [id, setId] = useState('')
    return (
        <div>
            <div>
                <CvForm person={id}/>
                {/* <CvForm idGet={setId} /> */}
            </div>
        </div>
    )
}

