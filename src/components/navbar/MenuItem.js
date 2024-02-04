import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'

const MenuItem = ({item, show, setShow, navItemSpecial}) => {
  const [dropdown, setDropdown] = useState(true)
  return (
    <li className={`nav-item ${navItemSpecial && 'nav-item-special'}`}>
        {item.submenu ? (
            <>
              <li
                className="nav-link"
                // aria-expanded={dropdown ? "true" : "false"}
                onClick={() => setDropdown((prev) => !prev)}
              >
                {item.title}{" "}
              </li>
              <Dropdown submenus={item.submenu} dropdown={dropdown} />
            </>  
        ):(
            <NavLink to={item.url} className="nav-link" onClick={()=>{setShow(false)}}>{item.title}</NavLink>
        )}
    </li>
  )
}

export default MenuItem