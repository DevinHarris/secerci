import React from 'react';

const SignupPage = () => {
    return (
        <div className="signup">
            <form className="signup__form">
                <div className="signup__form-container">
                    <input className="signup__input" type="text" placeholder="Name" />
                    <input className="signup__input" type="text" placeholder="Username"/>
                    <input className="signup__input" type="password" placeholder="Password"/>
                </div>
                <button className="signup__btn" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignupPage;