import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

const MessageElement = ({ messages }) => {

    const dispatch = useDispatch();

    return (
        messages ? (
            <ul className="message__list">
           {
               messages.map(message => (
                <li key={message.id} className="message__list-item" onClick={() => dispatch({ type: 'messages/getMessage', payload: message.id })}>
                    <Link to={`/message/${message.id}`}>
                        <span className="message__element">
                            <span className="message__avi">
                                <img src="https://upload.wikimedia.org/wikipedia/en/3/3a/Universal_Champion_Roman_Reigns_WWE_Live_event_01-23-2022.jpeg" alt={message.name} />
                            </span>
                            <span>
                                <h2 className="message__meta">{message.name} - {message.timeStamp}</h2>
                                <p className="message__preview">{message.message}</p>
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