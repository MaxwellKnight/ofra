import { React } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import '../css/navBar.css'

/**
     * printNav is responsible for printing the navigation in relation
     * to mobile/desktop
     */
const printNav = (toggleIsMobile, isMobile, toggle, changeIsMobile, data) => {
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

export { printNav }