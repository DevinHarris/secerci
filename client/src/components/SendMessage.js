import React, { useEffect } from 'react';
import api from '../api';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation, Link, useParams } from 'react-router-dom'; 
import { nanoid } from "nanoid";

const SendMessage = () => {
    const { user } = useSelector(state => state.user);
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const onSend = (data) => {
        const { recipient, message } = data;
        const threadId = nanoid(5);
        const dataToSend = {
            recipient,
            message,
            threadId,
            from: {
                name: user.name,
                username: user.username
            }
        }
        api.put('/api/send', dataToSend).then(response => {
            const { data } = response;
            console.log(data)
            dispatch({ type: 'user/sendMessage', payload: data })
        })

       
    }

    return (
        <div className="message__form">
            <form onSubmit={handleSubmit(onSend)}>
                <div className="message__form-field">
                    <input className="search__input form__input" placeholder="Enter Secreci tag..." type="text" {...register('recipient')} />
                </div>
                <div className="message__form-field">
                    <input type="text" className="message__input form__input" placeholder="Your messsage." {...register('message')} />
                </div>
                <button className="signup__btn" type="submit">Send</button>
            </form>
        </div>
    )
}

export default SendMessage;