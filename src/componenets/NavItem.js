import {React, useState} from "react"
import "../css/navItem.css"
import Contact from '../componenets/Contact'

export default function NavItem(props){

    function printList(list){
        return(
            <ul className="item-list">
                {list.map((item, index) => <li  key={index}>* {item} *</li>)}
            </ul>
        )
    }

    return(
            <div className="main-content item">
                <h1 className="item-title">{props.data.title}</h1>
                <p className="item-main-text">{props.data.mainText}</p>
                {props.data.hasOwnProperty('list') ? printList(props.data.list) : ""}
                {props.data.id === 6 ?  <Contact /> : ""}
            </div>
    )
}