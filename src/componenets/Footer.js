import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
    return (
        <footer className="footer">
            <p>Developed by Maxwell Knight</p>
            <FontAwesomeIcon icon={faCopyright} />
        </footer>
    )
}