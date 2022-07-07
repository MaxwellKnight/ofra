import { React, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import '../css/navBar.css'

const Navbar = props => {

    const { data, toggle } = props
    const [isMobile, changeIsMobile] = useState(false)

    /* change isMobile  */
    const toggleIsMobile = () => {
        changeIsMobile(prevIsMobile => !prevIsMobile)
    }
    /**
     * printNav is responsible for printing the navigation in relation
     * to the viewport mobile/desktop
     */
    const printNav = () => {
        return (
            <>
                <FontAwesomeIcon onClick={toggleIsMobile} className="navigation-bar" icon={faBars} />
                <ul className={isMobile ? "nav-list-mobile" : "navigation-list"}>
                    {/* Printing */}
                    {isMobile ? <FontAwesomeIcon className="close" icon={faWindowClose} onClick={toggleIsMobile} /> : ""}
                    <li className={isMobile ? "nav-item-mobile" : "navigation-item"} onClick={() => {
                        changeIsMobile()
                        return toggle(true)
                    }}> דף הבית</li>

                    {data.map(item => {
                        return (
                            <li className={isMobile ? "nav-item-mobile" : "navigation-item"}
                                key={item.id}
                                onClick={() => {
                                    changeIsMobile()
                                    return toggle(false, item.id)
                                }}
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
                return toggle(true)
            }} />
            {printNav()}
        </nav>
    )
}

export default Navbar;