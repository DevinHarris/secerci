import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const SignupSuccess = () => {
    const { user } = useSelector(state => state.user);

    console.log(user);

    return (
        <div className="signup__success">
            <h1>Welcome to <span className="signup__logo">SECRECI.</span></h1>
            <p>Start sharing your Secreci tag <b>(@{ user.username })</b> with others to start chatting privately.</p>
            <p>Otherwise <Link to="/profile">click here</Link> to visit your new profile.</p>
        </div>
    )
}

export default SignupSuccess;