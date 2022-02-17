import React from 'react';

const ProfileHeader = ({ name, username, avatar }) => (

    <div className="profile__header">
        <div className="profile__meta">
            <img className="profile__avatar" src={avatar} alt="avi" />
            <h1 className="profile__name">{`${name} (${username})`}</h1>
        </div>
    </div>
)

export default ProfileHeader;