import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MessageElement from "./MessageElement";
import Search from "./Search";
import ProfileHeader from "./ProfileHeader";

const Profile = ({ profileData }) => {
    const dispatch = useDispatch();

    const { avatar, username, name } = profileData;
    const { messages, user } = useSelector(state => state);

    // useEffect(() => {
    //     // dispatch({ type: 'messages/getMessages' });

    // }, [])

    const filterMessages = (term) => {
        const filteredMessages = messages.messages.filter(message => {
            if (message.name.toLowerCase().includes(term) || message.username.toLowerCase().includes(term) || message.message.toLowerCase().includes(term)) {
                return message
            }
        });

        return filteredMessages;
    }

    //  console.log(filterMessages(messages.messageSearchTerm.toLowerCase().trim()));

    // console.log(messages.messages)

    return (
        <div className="profile-page">

            <ProfileHeader name={user.user.name} username={user.user.username} avatar={user.user.avi} />
            <div className="profile__messages">
                <Search />
                
                {
                    messages.messageSearchTerm ? <MessageElement messages={filterMessages(messages.messageSearchTerm.toLowerCase().trim())} /> : <MessageElement {...messages} />
                }
            </div>
        </div>
    )

}

export default Profile;