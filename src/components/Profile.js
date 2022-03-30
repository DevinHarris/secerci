import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MessageElement from "./MessageElement";
import Search from "./Search";
import ProfileHeader from "./ProfileHeader";

const Profile = ({ profileData }) => {
    const dispatch = useDispatch();

    const { avatar, username, name } = profileData;
    const { user, searchTerm } = useSelector(state => state);
    const { messages } = user.user;


    // useEffect(() => {
    //     // dispatch({ type: 'messages/getMessages' });

    // }, [])


    const filterMessages = (term) => {
        const result = messages.filter(message => message.messages.some(item => item.from.username.includes(term) || item.from.name.includes(term) || item.message.includes(term)))

        return result;
        
    }

    //  console.log(filterMessages(messages.messageSearchTerm.toLowerCase().trim()));


    return (
        <div className="profile-page">

            <ProfileHeader name={user.user.name} username={user.user.username} avatar={user.avi} />
            <div className="profile__messages">
                <Search />
                
                {
                    searchTerm.term ? <MessageElement messages={filterMessages(searchTerm.term.toLowerCase().trim())} /> : <MessageElement messages={messages} />
                }
            </div>
        </div>
    )

}

export default Profile;