import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfileHeader from "./ProfileHeader";

const MessageThread = () => {

    const { user, currentMessage } = useSelector(state => state.user);
    const { id } = useParams();
    const { threadId, messages } = user.messages.find(message => message.threadId === id);


    return (
        <div className="message__thread">
            <div>
                <div className="message__thread-meta">
                    <ProfileHeader name={currentMessage.messages[0].from.name} username={currentMessage.messages[0].from.username} />
                </div>
                <div className="message__thread-container">
                    {
                        messages.length ? (
                            <ul>
                                {
                                    currentMessage.messages.map(message => (
                                        <li className="message__single">{message.message}</li>
                                    ))
                                }
                            </ul>
                        ) : <h1>Opps looks like an empty thread.</h1>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default MessageThread;