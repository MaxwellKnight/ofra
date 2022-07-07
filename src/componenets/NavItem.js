import { React, useEffect } from "react"
import "../css/navItem.css"
import Books from '../componenets/Books'
import About from '../componenets/About'
import Guidence from '../componenets/Guidence'
import Concepts from "./Concepts"

export default function NavItem(props) {
    const seprateComponent = [0, 1, 3, 8, 9, 2] //checks which sections use different component
    const { data } = props

    useEffect(() => {
        console.log('logged item');
    }, [])

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
            case 2: return <Concepts />
            case 3: return <Guidence />
            case 1: return <Books />
            default:
        }
    }

    return (
        <div key={data.id} className="item" dir="rtl">
            {(!seprateComponent.includes(data.id)) ? <h1 className="item-title">{data.title}</h1> : ""}
            {(!seprateComponent.includes(data.id)) ? <p id="main-text" className="item-main-text">{data.mainText}</p> : ""}
            {data.hasOwnProperty('list') ? printList(data.list) : ""}
            {itemToDisplay()}
        </div>
    )
}