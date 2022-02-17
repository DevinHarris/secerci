import React from 'react';
import { Link } from 'react-router-dom'

const LandingPage = () => {
    
    return (
        <div className="landing-page">
            <div className="landing__main">
                <h1 className="landing__logo">( Secerci )</h1>
                <p className="landing__tagline">a private encryption-based direct message app.</p>
                <Link to="/how" className="landing__how">see how it works</Link>
                <Link to="/join" className="landing__cta">Join</Link>
                <Link to="/profile" className="landing__cta">Login</Link>
            </div>
        </div>
    )
}

export default LandingPage;