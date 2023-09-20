import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainNavigation() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
                <NavLink to="/query">Query Page</NavLink>
            </li>
        </ul>
    </nav>
  )
}
