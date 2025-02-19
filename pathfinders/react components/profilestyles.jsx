import React from 'react';
import './Profile.css'; // Assuming you have a Profile.css file with the styles

const Profile = () => {
  return (
    <div className="profile-section">
      <div className="profile-picture">
        <img src="profile-pic.jpg" alt="Profile" />
      </div>
      <div className="username">
        <h3>john_doe</h3>
      </div>
      <div className="name">
        <h3>John Doe</h3>
      </div>
      <div className="biography">
        <p>This is a brief biography of John Doe. He enjoys hiking and exploring new places!</p>
      </div>
    </div>
  );
};

export default Profile;
