import React, { useState } from 'react';
import './styles.css'; // Assuming your CSS file is in the same directory
import logo from './pngtree-adventure-men-logo-vector-png-image_6733821.png'; // Adjust the path as needed
import profileImg from './image.jpg'; // Adjust the path as needed
import profilePicture from './profile-picture.jpg'; // Adjust the path as needed

const Header = () => {
    return (
        <header>
            <div className="btn-container">
                <button id="signbtn">
                    <a href="sign.html">Sign Up / Log In</a>
                </button>
            </div>
            <div className="logo">
                <a href="index.html">
                    <img src={logo} alt="Pathfinders Logo" />
                </a>
            </div>
            <h1>Pathfinders</h1>
            <div className="profile-picture">
                <a href="myprofile.html">
                    <img src={profileImg} className="profile-img" alt="Profile" />
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="my-hikes.html">My Hikes</a></li>
                    <li><a href="all-hikes.html">All Hikes</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="myprofile.html">My Profile</a></li>
                </ul>
            </nav>
        </header>
    );
};

const MyProfile = () => {
    const [username, setUsername] = useState('@adambecc');
    const [name, setName] = useState('Adam Ben Chacha');
    const [bio, setBio] = useState('I am an outdoor enthusiast and technology lover. I enjoy hiking and exploring new trails while also developing web applications.');

    const handleSaveChanges = () => {
        alert(`Profile updated!\n\nUsername: ${username}\nName: ${name}\nBio: ${bio}`);
    };

    return (
        <main className="container">
            <section className="profile-section">
                <h2>My Profile</h2>

                <div className="profile-picture">
                    <img src={profilePicture} alt="Profile Picture" className="profile-img" />
                </div>

                <div className="username">
                    <label htmlFor="usernameInput">Username:</label>
                    <input 
                        type="text" 
                        id="usernameInput" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>

                <div className="name">
                    <label htmlFor="nameInput">Name:</label>
                    <input 
                        type="text" 
                        id="nameInput" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>

                <div className="biography">
                    <label htmlFor="bioInput">Biography:</label>
                    <textarea 
                        id="bioInput" 
                        rows="4" 
                        value={bio} 
                        onChange={(e) => setBio(e.target.value)} 
                    />
                </div>

                <button id="saveChanges" onClick={handleSaveChanges}>Save Changes</button>
            </section>
        </main>
    );
};

const App = () => {
    return (
        <div>
            <Header />
            <MyProfile />
        </div>
    );
};

export default App;
