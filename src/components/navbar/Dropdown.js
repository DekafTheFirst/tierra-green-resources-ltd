import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Dropdown = ({submenus, dropdown}) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index)=>
            <li key={index} className='nav-item'>
                <NavLink className='nav-link' to={`/services/${submenu.url}`} >{submenu.title}</NavLink>
            </li>
        )}  
    </ul>
  )
}

export default Dropdown