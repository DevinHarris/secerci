import React from "react";
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
    const { user } = useSelector(state => state.user)
    const location = useLocation();

    return (
        <nav className="navbar">
           {
               location.pathname === "/" && !user.isSignedIn ? (
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
               ) : <NavLink to="/">
                   <h2 className="navbar__logo">Secreci</h2>
               </NavLink>
           }
        </nav>
    )
}

export default Nav;