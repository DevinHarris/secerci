import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../api';

const LoginPage = () => {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnSubmit = (data) => {
        api.post('/auth/login', data).then(response => {
            dispatch({ type: 'user/setUser', payload: response.data })
            navigate('/');
        }).catch(err => {
            console.log(err);
        })
    }
   
    return (
        <div className="login">
            <form className="signup__form" onSubmit={handleSubmit(handleOnSubmit)}>
                <div className="signup__form-container">
                    <div className="signup__form-field">
                        <input className="signup__input" type="text" placeholder="Secreci Tag" {...register('username')} />
                    </div>
                    <div className="signup__form-field">
                        <input className="signup__input" type="password" placeholder="Password" {...register('password')} />
                    </div>
                    <button className="signup__btn" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;