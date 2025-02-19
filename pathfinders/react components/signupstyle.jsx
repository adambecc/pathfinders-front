import React, { useState } from 'react';
import './Overlay.css'; // Assuming you have a separate CSS file for styles

const OverlayComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle visibility of overlay and popup
    const toggleOverlay = () => setIsVisible(!isVisible);

    return (
        <div>
            <button id="signUpBtn" onClick={toggleOverlay}>
                Sign Up
            </button>
            <button id="logInBtn" onClick={toggleOverlay}>
                Log In
            </button>

            {isVisible && (
                <div className="overlay">
                    <div className="popup">
                        <h3>Welcome</h3>
                        <input type="text" placeholder="Enter your email" />
                        <input type="password" placeholder="Enter your password" />
                        <button className="close-btn" onClick={toggleOverlay}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OverlayComponent;
