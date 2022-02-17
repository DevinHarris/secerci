import React from 'react';
import { useSelector } from 'react-redux';
import ProfileHeader from "./ProfileHeader";

const MessageThread = () => {

    const { currentMessage } = useSelector(state => state.messages)

    return (
        <div className="message__thread">
            <div>
                <div className="message__thread-meta">
                    {/* <h1>{currentMessage.name} ({ currentMessage.username })</h1> */}
                    <ProfileHeader name={currentMessage.name} username={currentMessage.username} />
                </div>
                <div className="message__thread-container">
                    {
                        currentMessage.thread.length ? (
                            <ul>
                                {
                                    currentMessage.thread.map(message => (
                                        <li className="message__single">{message}</li>
                                    ))
                                }
                            </ul>
                        ) : <h1>Looks like you have no messages from {currentMessage.name}. Hit them up!</h1>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default MessageThread;