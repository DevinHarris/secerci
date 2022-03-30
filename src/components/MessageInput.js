import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const MessageInput = () => {


    const { user } = useSelector(state => state.user);
    const { id } = useParams();
    const dispatch = useDispatch();

    const onMessage = (e) => {

        if (e.key === 'Enter') {

            dispatch({ type: 'user/sendMessage', payload: {
                thread: id,
                from: {
                    name: user.name,
                    username:  user.username
                },
                date: moment().startOf(new Date()).fromNow(),
                message: e.target.value
            } });
            e.target.value = '';

        }
    }

    return (
        <div className="message__input-container">
            <input className="message__input" type="text" placeholder="Send a message..." onKeyPress={(e) => onMessage(e)} />
        </div>
    )
}

export default MessageInput;