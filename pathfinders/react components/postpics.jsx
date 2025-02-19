import React, { useState } from 'react';
import './styles.css'; // Assuming your CSS file is in the same directory

const Gallery = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [hikes, setHikes] = useState([]);
  const [likeCounts, setLikeCounts] = useState([]);
  const [likedStates, setLikedStates] = useState([]);

  // Handle image preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const hikeTitle = e.target.hikeTitle.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const date = e.target.date.value;
    const imageFile = e.target.imageUpload.files[0];

    const newHike = {
      title: hikeTitle,
      description,
      location,
      date,
      image: imageFile ? URL.createObjectURL(imageFile) : null,
    };

    setHikes((prevHikes) => [...prevHikes, newHike]);
    setLikeCounts((prevCounts) => [...prevCounts, 0]);
    setLikedStates((prevStates) => [...prevStates, false]);

    e.target.reset();
    setImagePreview(null);
    setFormVisible(false);
  };

  // Handle like functionality
  const handleLike = (index) => {
    const updatedLikedStates = [...likedStates];
    const updatedLikeCounts = [...likeCounts];
    updatedLikedStates[index] = !updatedLikedStates[index];
    updatedLikeCounts[index] = updatedLikedStates[index]
      ? updatedLikeCounts[index] + 1
      : updatedLikeCounts[index] - 1;

    setLikedStates(updatedLikedStates);
    setLikeCounts(updatedLikeCounts);
  };

  // Toggle image size
  const handleImageClick = (index) => {
    const images = document.querySelectorAll('.hike-img');
    const image = images[index];
    if (image.classList.contains('enlarged')) {
      image.style.maxWidth = '100%';
      image.style.maxHeight = '300px';
      image.classList.remove('enlarged');
    } else {
      image.style.maxWidth = '90vw';
      image.style.maxHeight = '90vh';
      image.classList.add('enlarged');
    }
  };

  return (
    <div>
      <header>
        <div className="btn-container">
          <button id="signbtn">
            <a href="sign.html">Sign Up / Log In</a>
          </button>
        </div>
        <div className="logo">
          <a href="index.html">
            <img
              src="pngtree-adventure-men-logo-vector-png-image_6733821.png"
              alt="Pathfinders Logo"
            />
          </a>
        </div>
        <h1>Pathfinders</h1>
        <div className="profile-picture">
          <a href="myprofile.html">
            <img src="image.jpg" className="profile-img" alt="Profile" />
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

      <main className="container">
        <h2>Gallery</h2>
        <p>Browse through images from hiking adventures.</p>

        {/* Button to open the form */}
        {!formVisible && (
          <button id="postPictureBtn" onClick={() => setFormVisible(true)}>
            Post Picture
          </button>
        )}

        {/* Form */}
        {formVisible && (
          <form id="hikeForm" onSubmit={handleSubmit}>
            <input type="text" id="hikeTitle" name="hikeTitle" placeholder="Hike Title" required />
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              required
            ></textarea>
            <input type="text" id="location" name="location" placeholder="Location" required />
            <input type="date" id="date" name="date" required />

            {/* Image Upload */}
            <input
              type="file"
              id="imageUpload"
              name="imageUpload"
              accept="image/*"
              onChange={handleImageUpload}
            />
            <div id="imagePreview">
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Hike Preview"
                  style={{ maxWidth: '100%', maxHeight: '300px' }}
                />
              )}
            </div>

            <button type="submit">Post Picture</button>
          </form>
        )}

        {/* Container to show the posts */}
        <div id="hikesContainer">
          {hikes.map((hike, index) => (
            <div className="hike-post" key={index}>
              <h4>{hike.title}</h4>
              <p><strong>Description:</strong> {hike.description}</p>
              <p><strong>Location:</strong> {hike.location}</p>
              <p><strong>Date:</strong> {hike.date}</p>

              <div className="like-section">
                <button className="like-btn" onClick={() => handleLike(index)}>
                  {likedStates[index] ? '💔' : '❤️'}
                </button>
                <span className="like-count">{likeCounts[index]} Likes</span>
              </div>

              {hike.image && (
                <img
                  src={hike.image}
                  alt="Hike Image"
                  className="hike-img"
                  style={{ maxWidth: '100%', maxHeight: '300px', cursor: 'pointer' }}
                  onClick={() => handleImageClick(index)}
                />
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Gallery;