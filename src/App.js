import React, { useState } from "react"
import Navbar from './componenets/Navbar'
import Contact from "./componenets/Contact"
import Spinner from "./componenets/Spinner"
import './App.css'

const Homepage = React.lazy(() => import("./componenets/Homepage"))
const NavItem = React.lazy(() => import("./componenets/NavItem"))

export default function App() {

  const [isHome, changeIsHome] = useState(true)
  const [id, changeId] = useState(1)
  const { data } = require('./data/data')

  const [isFormShown, changeIsFormShown] = useState(false)

  const toggleIsFormShown = () => changeIsFormShown(prev => !prev)

  const toggleIsHome = (isVisible, id) => {
    changeIsHome(isVisible)
    changeId(id)
  }

  return (
    <>
      <Contact isFormShown={isFormShown} toggleIsFormShown={toggleIsFormShown} />
      <Navbar data={data} toggle={toggleIsHome} />
      <div className="container">
        <React.Suspense fallback={<Spinner />}>
          {/* Check if the user  returned to the hompage or navigated to a different section */}
          {isHome ? <Homepage data={data} toggle={toggleIsHome} /> : <NavItem data={data[id]} toggle={toggleIsHome} toggleIsFormShown={toggleIsFormShown} />}
        </React.Suspense>
      </div>
    </>
  );
}
