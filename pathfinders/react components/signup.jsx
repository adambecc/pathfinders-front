import React, { useState } from 'react';
import './styles.css'; // Assuming your CSS file is in the same directory

const AuthenticationPopup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [logInData, setLogInData] = useState({ username: '', password: '' });

  const openPopup = (action) => {
    setIsPopupVisible(true);
    setIsSignUp(action === 'signup');
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSignUpData({ username: '', email: '', password: '', confirmPassword: '' });
    setLogInData({ username: '', password: '' });
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleLogInChange = (e) => {
    const { name, value } = e.target;
    setLogInData({ ...logInData, [name]: value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    alert(`Account created for ${signUpData.username} with email ${signUpData.email}!`);
    closePopup();
  };

  const handleLogInSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back, ${logInData.username}!`);
    closePopup();
  };

  return (
    <div>
      <button id="signUpBtn" onClick={() => openPopup("signup")}>Sign Up</button>
      <button id="logInBtn" onClick={() => openPopup("login")}>Log In</button>

      {isPopupVisible && (
        <div id="overlay" style={{ display: 'flex' }}>
          <div className="popup">
            <button id="closeBtn" onClick={closePopup}>X</button>
            <h2 id="popupTitle">{isSignUp ? "Sign Up" : "Log In"}</h2>

            {isSignUp ? (
              <form id="signUpForm" onSubmit={handleSignUpSubmit}>
                <input
                  type="text"
                  name="username"
                  id="signUpUsername"
                  placeholder="Username"
                  value={signUpData.username}
                  onChange={handleSignUpChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={signUpData.email}
                  onChange={handleSignUpChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  id="signUpPassword"
                  placeholder="Password"
                  value={signUpData.password}
                  onChange={handleSignUpChange}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={signUpData.confirmPassword}
                  onChange={handleSignUpChange}
                  required
                />
                <button type="submit">Create Account</button>
              </form>
            ) : (
              <form id="logInForm" onSubmit={handleLogInSubmit}>
                <input
                  type="text"
                  name="username"
                  id="logInUsername"
                  placeholder="Username"
                  value={logInData.username}
                  onChange={handleLogInChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  id="logInPassword"
                  placeholder="Password"
                  value={logInData.password}
                  onChange={handleLogInChange}
                  required
                />
                <button type="submit">Log In</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthenticationPopup;
