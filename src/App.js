import React, { useState } from "react"

import Navbar from './componenets/Navbar'
import Homepage from "./componenets/Homepage"
import './App.css'
import NavItem from "./componenets/NavItem"
import Contact from "./componenets/Contact"


export default function App() {

  const [isHome, changeIsHome] = useState(true)
  const [id, changeId] = useState(1)
  const { data } = require('./data')

  function toggleIsHome(isVisible, id) {
    changeIsHome(isVisible)
    changeId(id)
  }

  return (
    <>
      <Contact />
      <Navbar data={data} toggle={toggleIsHome} />
      <div className="container">
        {/* Check if the user  returned to the hompage or navigated to a different section */}
        {isHome ? <Homepage data={data} toggle={toggleIsHome} /> : <NavItem data={data[id]} toggle={toggleIsHome} />}
      </div>
    </>
  );
}
