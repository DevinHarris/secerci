import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import MessageThread from "./MessageThread";
import MessageInput from './MessageInput';
import ProfileHeader from "./ProfileHeader";

const MessagePage = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { messages, user } = useSelector(state => state);
    const [message, setMessage] = useState(messages.currentMessage);





    // useEffect(() => {
    //     dispatch({ type: 'messages/getMessage', payload: id });
    //     // console.log(messages);
    // }, [])
    
    return (
        <div className="message">
            {/* <ProfileHeader name={user.user.name} username={user.user.username} avatar={user.user.avi} /> */}
            <MessageThread />
            <MessageInput />
        </div>
    )
}

export default MessagePage;