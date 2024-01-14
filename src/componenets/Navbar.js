import { React, useState } from "react"
import { printNav } from '../utils/print'
import '../css/navbar.css'

const Navbar = props => {

    const { data, toggle } = props
    const [isMobile, changeIsMobile] = useState(false)

    /* change isMobile  */
    const toggleIsMobile = () => {
        changeIsMobile(prevIsMobile => !prevIsMobile)
    }

    return (
        <nav className="navigation">
            <img
                className="navigation-logo"
                src={require('../images/mandala.png')}
                alt="logo" onClick={() => toggle(true)}
            />

            {printNav(toggleIsMobile, isMobile, toggle, changeIsMobile, data)}
        </nav>
    )
}

export default Navbar;