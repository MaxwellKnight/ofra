import React, {useState} from "react"

import Navbar from './componenets/Navbar'
import MainContent from "./componenets/MainContent";
import './App.css'
import NavItem from "./componenets/NavItem"
import Footer from "./componenets/Footer";


export default function App() {

  const [isHome , changeIsHome] = useState(true)
  const [id , changeId] = useState(1)
  const { data } = require('./data')

  function toggleIsHome(isVisible, id){
    changeIsHome(isVisible)
    changeId(id)
  }

  return (
    <div className="page-wrapper">
      <Navbar data={data} toggle={toggleIsHome}/>
      <div className="container">
        {isHome ? <MainContent data={data} toggle={toggleIsHome} /> : <NavItem data={data[id]} toggle={toggleIsHome}/>}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
