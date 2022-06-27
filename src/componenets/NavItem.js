import { React } from "react"
import "../css/navItem.css"
import Contact from '../componenets/Contact'
import Books from '../componenets/Books'
import About from '../componenets/About'
import Homepage from "./Homepage"

export default function NavItem(props) {
    const seprateComponent = [0, 1, 7, 8]
    const { data } = props

    function printList(list) {
        return (
            <ul className="item-list">
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        )
    }
    if (data.id !== -1) {
        return (
            <div className="main-content item">
                {(!seprateComponent.includes(data.id)) ? <h1 className="item-title">{data.title}</h1> : ""}
                {(!seprateComponent.includes(data.id)) ? <p id="main-text" className="item-main-text">{data.mainText}</p> : ""}
                {data.hasOwnProperty('list') ? printList(data.list) : ""}
                {data.id === 8 ? <Contact /> : ""}
                {data.id === 7 ? <Books /> : ""}
                {data.id === 0 ? <About /> : ""}
            </div>
        )
    }
    return <Homepage />
}