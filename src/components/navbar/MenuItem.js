import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'

const MenuItem = ({item, show, setShow, navItemSpecial}) => {
  const [dropdown, setDropdown] = useState(true)
  return (
    <li className={`nav-item ${navItemSpecial ? 'nav-item-special':''}`}>
        {item.submenu ? (
            <>
              <span
                className="nav-link"
                // aria-expanded={dropdown ? "true" : "false"}
                onClick={() => setDropdown((prev) => !prev)}
              >
                {item.title}
              </span>
              <Dropdown submenus={item.submenu} dropdown={dropdown} show={show} setShow={setShow}/>
            </>  
        ):(
            <NavLink to={item.url} className="nav-link" onClick={()=>{setShow(false)}}>{item.title}</NavLink>
        )}
    </li>
  )
}

export default MenuItem