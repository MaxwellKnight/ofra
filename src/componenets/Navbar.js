import {React, useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import '../css/navbar.css'
import mandala from "../images/mandala.png"

export default function Navbar(props){

    const { data , toggle } = props
    const [isMobile, changeIsMobile] = useState(false)

    /* change isMobile  */
    function toggleIsMobile(){
        changeIsMobile(prevIsMobile => !prevIsMobile)
    }
    /**
     * printNav is responsible for printing the navigation in relation
     * to the viewport mobile/desktop
     */
    function printNav(){
        return (
            <ul className={isMobile ? "nav-list-mobile": "navigation-list"  }>
                {isMobile ? <FontAwesomeIcon className="close-nav" icon={faWindowClose} onClick={toggleIsMobile}/> : ""}
                {data.map(item => {
                    return (
                        <li className={isMobile ?  "nav-item-mobile" : "navigation-item"} key={item.id} onClick={() => {
                            
                            changeIsMobile(false)
                            return toggle(false, item.id)
                        
                        }}>{item.title}</li>)
                })}
            </ul>
        )
    }
    function css(element, styleToApply){
        for(const property in styleToApply)
            element.style[property] = styleToApply[property]
    }

    /** this function handles the openening the of the nav menu */
    function handleOnNavClick(){

        return(
            console.log("Menu Clicked")
        )
    }
    

    return (
        <nav className="navigation">
            <img className="navigation-logo" src={mandala} alt="logo" onClick={() => toggle(true)} />
            <FontAwesomeIcon onClick={(toggleIsMobile)} className="navigation-bar" icon={faBars}/>
            {printNav()}
        </nav>
    )
}