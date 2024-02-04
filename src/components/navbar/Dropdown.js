import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({submenus, dropdown}) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index)=>
            <li key={index} className='nav-item'>
                <Link className="nav-link" to={`/services/${submenu.url}`}>{submenu.title}</Link>
            </li>
        )}  
    </ul>
  )
}

export default Dropdown