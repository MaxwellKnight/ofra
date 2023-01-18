import { React } from "react"
import "../css/navItem.css"
import { printNavItem } from "../utils/print"

const NavItem = props => {
    const seprateComponent = [0, 1, 2, 3, 8, 9] //id which use different rendering method
    const { data, toggleIsFormShown } = props

    return (
        <div key={data.id} className="item" dir="rtl">
            {printNavItem(seprateComponent, data, toggleIsFormShown)}
        </div>
    )
}

export default NavItem;