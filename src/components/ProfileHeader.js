import React from 'react';
import { Link } from'react-router-dom';

const ProfileHeader = ({ name, username, avatar }) => (

    <div className="profile__header">
        <div className="profile__meta">
            <img className="profile__avatar" src={avatar} alt="avi" />
            <h1 className="profile__name">{`${name} (${username})`}</h1>
           <div className="profile__cta">
                <div className="profile__send-message">
                    <Link to="/new">Send new message.</Link>
                </div>
           </div>
        </div>
    </div>
)

export default ProfileHeader;