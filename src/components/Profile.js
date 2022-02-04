import React from 'react';

const Profile = ({ profileData }) => {

    const { avatar, username, name, messages } = profileData;

    return (
        <div className="profile-page">
            <div className="profile__header">
                <div className="profile__meta">
                    <img className="profile__avatar" src={avatar} alt="avi" />
                    <h1 className="profile__name">{username}</h1>
                </div>
            </div>
        </div>
    )

}

export default Profile;