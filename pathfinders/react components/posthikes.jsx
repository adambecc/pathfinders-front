import React, { useState } from 'react';
import './styles.css'; // Assuming your CSS file is in the same directory

const FutureHikes = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [hikes, setHikes] = useState([]);

  // Handle form visibility
  const openForm = () => {
    setFormVisible(true);
  };

  const cancelForm = () => {
    setFormVisible(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form values
    const hikeTitle = e.target.hikeTitle.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const date = e.target.date.value;

    // Validate year (ensure it's 2025 or later)
    const hikeYear = new Date(date).getFullYear();
    if (hikeYear < 2025) {
      alert("Only hikes scheduled for 2025 onwards can be added here!");
      return;
    }

    // Create new hike object
    const newHike = {
      title: hikeTitle,
      description,
      location,
      date,
      joinCount: 0,
      comments: [],
    };

    // Add new hike to state
    setHikes([...hikes, newHike]);

    // Reset form
    e.target.reset();
    setFormVisible(false);
  };

  // Handle join functionality
  const handleJoin = (index) => {
    const updatedHikes = [...hikes];
    updatedHikes[index].joinCount += 1;
    setHikes(updatedHikes);
  };

  // Handle comment functionality
  const handleComment = (index, commentText) => {
    const updatedHikes = [...hikes];
    if (commentText.trim()) {
      updatedHikes[index].comments.push(commentText);
      setHikes(updatedHikes);
    }
  };

  return (
    <div>
      <h1>Future Hikes</h1>
      
      {/* Button to open the form */}
      {!formVisible && (
        <button id="openFormButton" onClick={openForm}>Post New Hike</button>
      )}

      {/* Form to add a new hike */}
      {formVisible && (
        <div id="formContainer">
          <form id="hikeForm" onSubmit={handleSubmit}>
            <input type="text" id="hikeTitle" name="hikeTitle" placeholder="Hike Title" required />
            <textarea id="description" name="description" placeholder="Description" required></textarea>
            <input type="text" id="location" name="location" placeholder="Location" required />
            <input type="date" id="date" name="date" required />
            <button type="submit">Submit</button>
            <button type="button" onClick={cancelForm}>Cancel</button>
          </form>
        </div>
      )}

      {/* List of future hikes */}
      <div id="futureHikesContainer">
        {hikes.map((hike, index) => (
          <div key={index} className="hike-post">
            <h4>{hike.title}</h4>
            <p><strong>Description:</strong> {hike.description}</p>
            <p><strong>Location:</strong> {hike.location}</p>
            <p><strong>Date:</strong> {hike.date}</p>
            <button className="join-button" onClick={() => handleJoin(index)}>
              Join <span className="join-count">{hike.joinCount}</span>
            </button>

            <div className="comments-section">
              <h5>Comments:</h5>
              <ul className="comments-list">
                {hike.comments.map((comment, commentIndex) => (
                  <li key={commentIndex}>{comment}</li>
                ))}
              </ul>
              <textarea
                className="comment-input"
                placeholder="Add a comment..."
              ></textarea>
              <button
                className="comment-button"
                onClick={(e) => {
                  const commentText = e.target.previousElementSibling.value;
                  handleComment(index, commentText);
                  e.target.previousElementSibling.value = ''; // Clear the input
                }}
              >
                Post Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FutureHikes;
