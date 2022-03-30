import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignupPage = () => {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        axios.post('http://localhost:5000/auth/signup', data).then(response => {
            console.log(response);

            if (response.status === 200 || response.status === 201) {
                navigate('/join/success');
                dispatch({ type: 'user/setUser', payload: response.data });
            } else if (response.status === 409) {
                console.log('Sorry, but this Secreci tag is taken.');
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
                        <input className="signup__input" type="text" placeholder="Username (This will be your Secreci Tag)" {...register('username')} />
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