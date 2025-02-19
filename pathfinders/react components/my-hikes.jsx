import React, { useState } from 'react';
import './styles.css'; // Assuming your CSS file is in the same directory
import logo from './pngtree-adventure-men-logo-vector-png-image_6733821.png'; // Adjust the path as needed
import profileImg from './image.jpg'; // Adjust the path as needed

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

const MyHikes = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <main className="container">
            <button id="openFormButton" onClick={toggleFormVisibility}>
                Post New Hike
            </button>
            {isFormVisible && (
                <div id="formContainer">
                    <h3>Create a New Hike</h3>
                    <form id="hikeForm">
                        <label htmlFor="hikeTitle">Hike Title:</label>
                        <input type="text" id="hikeTitle" placeholder="Enter hike title" required />
                        
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" placeholder="Describe the hike..." required></textarea>
                        
                        <label htmlFor="location">Location:</label>
                        <input type="text" id="location" placeholder="Enter location" required />
                        
                        <label htmlFor="date">Date:</label>
                        <input type="date" id="date" required />
                        
                        <button type="submit">Post</button>
                        <button type="button" id="cancelFormButton" onClick={toggleFormVisibility}>Cancel</button>
                    </form>
                </div>
            )}
            <section id="hikesContainer">
                <h3>My Hike Posts</h3>
            </section>
        </main>
    );
};

const App = () => {
    return (
        <div>
            <Header />
            <MyHikes />
        </div>
    );
};

export default App;
