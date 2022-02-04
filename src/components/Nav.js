import React from "react";
import { NavLink } from 'react-router-dom';

const Nav = () => {

    return (
        <nav className="navbar">
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
        </nav>
    )
}

export default Nav;