import React from 'react';
import { useDispatch } from 'react-redux';

const MessageInput = () => {

    const dispatch = useDispatch();

    const onMessage = (e) => {

        if (e.key === 'Enter') {

            dispatch({ type: 'messages/sendMessage', payload: e.target.value });
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