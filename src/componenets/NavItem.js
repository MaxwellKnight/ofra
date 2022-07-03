import { React } from "react"
import "../css/navItem.css"
import Contact from '../componenets/Contact'
import Books from '../componenets/Books'
import About from '../componenets/About'
import Guidence from '../componenets/Guidence'
import Concepts from "./Concepts"

export default function NavItem(props) {
    const seprateComponent = [0, 1, 7, 8, 9, 2] //checks which sections use different component
    const { data } = props

    function printList(list) {
        return (
            <ul className="item-list">
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        )
    }
    function itemToDisplay() {
        switch (data.id) {
            case 0: return <About />
            case 1: return <Concepts />
            case 2: return <Guidence />
            case 7: return <Books />
            case 9: return <Contact />
            default:
        }
    }

    return (
        <div className="item" dir="rtl">
            {(!seprateComponent.includes(data.id)) ? <h1 className="item-title">{data.title}</h1> : ""}
            {(!seprateComponent.includes(data.id)) ? <p id="main-text" className="item-main-text">{data.mainText}</p> : ""}
            {data.hasOwnProperty('list') ? printList(data.list) : ""}
            {itemToDisplay()}
        </div>
    )
}