import React from 'react';

const Avatar = ({ src, alt }) => (
        <span className="avi">
            <img src={src} alt={alt} />
        </span>
)

export default Avatar;