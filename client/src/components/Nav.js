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
                    null
               ) : <NavLink to="/">
                   <h2 className="navbar__logo">Secreci</h2>
               </NavLink>
           }
        </nav>
    )
}

export default Nav;