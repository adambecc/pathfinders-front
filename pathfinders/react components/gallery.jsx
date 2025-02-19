import React, { useState } from 'react';
import './styles.css'; // Assuming your CSS file is in the same directory
import logo from './pngtree-adventure-men-logo-vector-png-image_6733821.png'; // Adjust the path as needed
import profileImg from './image.jpg'; // Adjust the path as needed

const Gallery = () => {
    const [showForm, setShowForm] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [hikes, setHikes] = useState([]); // Replace this with actual hike posts data

    const handlePostPictureClick = () => {
        setShowForm(!showForm);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission, e.g., post the data or save locally
        console.log('Posting picture...');
        setShowForm(false); // Hide form after submission
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

            <main className="container">
                <h2>Gallery</h2>
                <p>Browse through images from hiking adventures.</p>

                {/* Button to open the form */}
                <button id="postPictureBtn" onClick={handlePostPictureClick}>
                    Post Picture
                </button>

                {/* Form to upload a picture */}
                {showForm && (
                    <form id="hikeForm" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="hikeTitle"
                            placeholder="Hike Title"
                            required
                        />
                        <textarea
                            id="description"
                            placeholder="Description"
                            required
                        />
                        <input
                            type="text"
                            id="location"
                            placeholder="Location"
                            required
                        />
                        <input type="date" id="date" required />

                        {/* Image Upload Field */}
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        {imagePreview && (
                            <div id="imagePreview">
                                <img src={imagePreview} alt="Preview" width="200" />
                            </div>
                        )}

                        <button type="submit" id="openFormButton">Post Picture</button>
                    </form>
                )}

                {/* Container to show the posts after form submission */}
                <div id="hikesContainer">
                    {/* Hike posts will appear here */}
                    {hikes.length === 0 ? (
                        <p>No hikes posted yet.</p>
                    ) : (
                        hikes.map((hike, index) => (
                            <div key={index} className="hike-item">
                                <h3>{hike.title}</h3>
                                <p>{hike.description}</p>
                                <p>{hike.location}</p>
                                <p>{hike.date}</p>
                                {hike.image && <img src={hike.image} alt="Hike" />}
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
};

export default Gallery;
