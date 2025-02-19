import React, { useState } from 'react';
import './styles.css'; // Assuming you've moved the CSS to an external file

const HikePost = () => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  
  const handleCommentChange = (e) => setCommentInput(e.target.value);
  
  const addComment = () => {
    setComments([...comments, commentInput]);
    setCommentInput('');
  };

  return (
    <div className="container">
      <header>
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <h1>Hike Share</h1>
        <div className="profile-picture">
          <img src="profile.jpg" alt="Profile" />
        </div>
      </header>

      <div className="hike-post">
        <div className="image-container">
          <img src="hike.jpg" alt="Hike" className="post-image" />
        </div>
        <button className="join-btn">Join Hike</button>
        <div className="comments-section">
          <ul className="comments-list">
            {comments.map((comment, index) => (
              <li key={index} className="comment-item">
                <div className="comment-text">{comment}</div>
              </li>
            ))}
          </ul>
          <input 
            type="text" 
            value={commentInput} 
            onChange={handleCommentChange} 
            className="comment-input" 
            placeholder="Add a comment..." 
          />
          <button onClick={addComment} className="comment-button">Post Comment</button>
        </div>
      </div>

      <button id="openFormButton">Post a Hike</button>
    </div>
  );
}

export default HikePost;
