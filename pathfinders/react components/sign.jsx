import React, { useState } from 'react';
import './styles.css'; // Assuming your CSS file is in the same directory
import './signup.css'; // Assuming your additional styles are in the same directory
import logo from './pngtree-adventure-men-logo-vector-png-image_6733821.png'; // Adjust the path as needed
import profileImg from './image.jpg'; // Adjust the path as needed

const Header = () => {
    return (
        <header>
            <div className="logo">
                <a href="index.html">
                    <img src={logo} alt="Pathfinders Logo" />
                </a>
            </div>
            <h1>Pathfinders</h1>
            <div className="profile-picture">
                <img src={profileImg} alt="Profile Picture" />
            </div>
        </header>
    );
};

const AuthenticationPopups = () => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isSignUpFormVisible, setSignUpFormVisible] = useState(false);
    const [isLogInFormVisible, setLogInFormVisible] = useState(false);

    const handleSignUpClick = () => {
        setSignUpFormVisible(true);
        setLogInFormVisible(false);
        setOverlayVisible(true);
    };

    const handleLogInClick = () => {
        setLogInFormVisible(true);
        setSignUpFormVisible(false);
        setOverlayVisible(true);
    };

    const closeOverlay = () => {
        setOverlayVisible(false);
    };

    return (
        <div>
            <Header />
            <div className="button-container">
                <button id="signUpBtn" onClick={handleSignUpClick}>Sign Up</button>
                <button id="logInBtn" onClick={handleLogInClick}>Log In</button>
            </div>

            {isOverlayVisible && (
                <div id="overlay" className="overlay">
                    <div className="popup" id="popup">
                        <h2 id="popupTitle">
                            {isSignUpFormVisible ? 'Sign Up' : 'Log In'}
                        </h2>

                        {isSignUpFormVisible && (
                            <form id="signUpForm">
                                <input
                                    type="text"
                                    id="signUpUsername"
                                    placeholder="Username"
                                    required
                                />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    required
                                />
                                <input
                                    type="password"
                                    id="signUpPassword"
                                    placeholder="Password"
                                    required
                                />
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    required
                                />
                                <button type="submit">Create Account</button>
                            </form>
                        )}

                        {isLogInFormVisible && (
                            <form id="logInForm">
                                <input
                                    type="text"
                                    id="logInUsername"
                                    placeholder="Username"
                                    required
                                />
                                <input
                                    type="password"
                                    id="logInPassword"
                                    placeholder="Password"
                                    required
                                />
                                <button type="submit">Log In</button>
                            </form>
                        )}

                        <button type="button" className="close-btn" id="closeBtn" onClick={closeOverlay}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthenticationPopups;
