import { React, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import '../css/navBar.css'

export default function Navbar(props) {

    const { data, toggle } = props
    const [isMobile, changeIsMobile] = useState(false)

    /* change isMobile  */
    function toggleIsMobile() {
        changeIsMobile(prevIsMobile => !prevIsMobile)
    }
    /**
     * printNav is responsible for printing the navigation in relation
     * to the viewport mobile/desktop
     */
    function printNav() {
        return (
            <>
                <FontAwesomeIcon onClick={toggleIsMobile} className="navigation-bar" icon={faBars} />
                <ul className={isMobile ? "nav-list-mobile" : "navigation-list"}>
                    {/* Printing the return to Homepage item */}
                    {isMobile ? <FontAwesomeIcon className="close" icon={faWindowClose} onClick={toggleIsMobile} /> : ""}
                    <li className={isMobile ? "nav-item-mobile" : "navigation-item"} onClick={() => {
                        //refresh the page and return to Homepage
                        window.location.reload(false)
                        return toggle(true)
                    }}> דף הבית</li>

                    {/* Creating and returning all the navigation items */}
                    {data.map(item => {
                        return (
                            <li className={isMobile ? "nav-item-mobile" : "navigation-item"}
                                key={item.id}
                                onClick={() => toggle(false, item.id)}
                            >{item.title}</li>
                        )
                    })}
                </ul>
            </>
        )
    }


    return (
        <nav className="navigation">
            <img className="navigation-logo" src={require('../images/mandala.png')} alt="logo" onClick={() => {
                //refresh the page and return to Homepage
                window.location.reload(false)
                return toggle(true)
            }} />
            {printNav()}
        </nav>
    )
}