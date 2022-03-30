import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {

    return (
        <div className="container">
            <Nav />
            {children}
        </div>
    )
}

export default Layout;