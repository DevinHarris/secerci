import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignupPage = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        axios.post('http://localhost:5000/auth/signup', data).then(response => {
            console.log(response);

            if (response.status === 200) {
                navigate('/join/success');
            }

        }).catch(err => console.log(err))

    }

    return (
        <div className="signup">
            <form className="signup__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="signup__form-container">
                    <div className="signup__form-field">
                        <input className="signup__input" type="text" placeholder="Name" {...register('name')} />
                    </div>
                    <div className="signup__form-field">
                        <input className="signup__input" type="text" placeholder="Username" {...register('username')} />
                    </div>
                    <div className="signup__form-field">
                        <input className="signup__input" type="password" placeholder="Password" {...register('password')} />
                    </div>
                    <button className="signup__btn" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignupPage;