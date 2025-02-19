import React, { useState } from 'react';
import './styles.css'; // Assuming your CSS file is in the same directory
import logo from './pngtree-adventure-men-logo-vector-png-image_6733821.png'; // Adjust the path as needed
import profileImg from './image.jpg'; // Adjust the path as needed

const AllHikes = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [hikes, setHikes] = useState([]); // This should be replaced with actual hike data

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
        // Add search functionality here
        console.log(`Searching for hikes with query: ${searchQuery}`);
    };

    const handleResetSearch = () => {
        setSearchQuery('');
        // Add reset functionality here (e.g., fetch all hikes)
    };

    const showAllHikes = () => {
        // Show all hikes (you may need to fetch from a server or filter the list)
        console.log('Showing all hikes');
    };

    const filterJoinedHikes = () => {
        // Filter hikes that the user has joined (this will depend on your data structure)
        console.log('Showing joined hikes');
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
                <h2>All Hikes</h2>
                <p>Discover hiking trails shared by others.</p>

                {/* Search Bar */}
                <div className="search-bar">
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Search hikes by title or description..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button id="searchButton" onClick={handleSearchClick}>
                        Search
                    </button>
                    <button id="resetSearch" onClick={handleResetSearch}>
                        Reset
                    </button>
                </div>

                {/* Filter Buttons */}
                <div className="filter-buttons">
                    <button onClick={showAllHikes}>Show All Hikes</button>
                    <button onClick={filterJoinedHikes}>Show Joined Hikes</button>
                </div>

                {/* Grid for all hikes */}
                <div id="hikesContainer">
                    {/* Hikes should be dynamically inserted here */}
                    {hikes.length === 0 ? (
                        <p>No hikes found.</p>
                    ) : (
                        hikes.map((hike, index) => (
                            <div key={index} className="hike-item">
                                <h3>{hike.title}</h3>
                                <p>{hike.description}</p>
                                <p>{hike.location}</p>
                                <p>{hike.date}</p>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
};

export default AllHikes;
