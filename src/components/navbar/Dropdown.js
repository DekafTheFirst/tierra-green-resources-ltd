import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Dropdown = ({submenus, dropdown, show, setShow}) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index)=>
            <li key={index} className='nav-item'>
                <NavLink className='nav-link' to={`/services/${submenu.url}`} onClick={()=>{setShow(false)}}>{submenu.title}</NavLink>
            </li>
        )}  
    </ul>
  )
}

export default Dropdown