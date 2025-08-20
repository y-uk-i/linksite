import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, description }) {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img src="/2021アイコン.jpg" alt="プロフィール画像" className="profile-image" />
      </div>
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-description">{description}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
