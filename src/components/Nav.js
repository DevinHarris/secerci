import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
           {
               location.pathname === "/" ? (
                    <ul>
                        <li className="navbar__link">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="navbar__link">
                            <NavLink to="support">Support</NavLink>
                        </li>
                        <li className="navbar__link">
                            <NavLink to="signup">Signup</NavLink>
                        </li>
                        <li className="navbar__link">
                            <NavLink to="faqs">FAQs</NavLink>
                        </li>
                 </ul>
               ) : <NavLink to="/profile">
                   <h2 className="navbar__logo">Secreci</h2>
               </NavLink>
           }
        </nav>
    )
}

export default Nav;