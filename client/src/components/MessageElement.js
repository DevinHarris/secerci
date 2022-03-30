import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Avatar from "./Avatar";

const MessageElement = ({ messages }) => {

    const dispatch = useDispatch();

    return (
        messages ? (
            <ul className="message__list">
           {
               messages.map(message => (
                <li key={message.threadId} className="message__list-item" onClick={() => dispatch({ type: 'user/setCurrentMessage', payload: message.threadId })}>
                    <Link to={`/thread/${message.threadId}`}>
                        <span className="message__element">
                        <Avatar src={message.avi} alt={`${message.name}-avatar`}/>
                            <span>
                                <h2 className="message__meta">{message.messages[0].from.name} - {message.timeStamp}</h2>
                                <p className="message__preview">{message.messages[0].message}</p>
                            </span>
                        </span>
                    </Link>
                </li>
               ))
           }
        </ul>
        ) : <h1>No messages to display :(</h1>
    )

}

export default MessageElement;