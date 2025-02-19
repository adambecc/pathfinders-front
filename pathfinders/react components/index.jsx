import React from 'react';
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

const Main = () => {
    return (
        <main className="container">
            <h2>Welcome to Pathfinders</h2>
            <p>Explore your hikes, discover new trails, and enjoy a gallery of stunning views.</p>
        </main>
    );
};

const App = () => {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
};

export default App;
