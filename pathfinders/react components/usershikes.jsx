import React, { useState } from 'react';
import './styles.css'; // Assuming your CSS file is in the same directory

const Gallery = () => {
    // Example hikes data (to be replaced with real data from a database or API)
    const hikesData = [
        {
            title: "Mountain Adventure",
            description: "A challenging hike with breathtaking views.",
            imageUrl: "hike1.jpg",
            hikeId: 1,
            postedBy: "@alicewndrs"
        },
        {
            title: "Beach Trail",
            description: "A relaxing hike along the coastline.",
            imageUrl: "hike2.jpg",
            hikeId: 2,
            postedBy: "@bobmilano"
        },
        {
            title: "Forest Escape",
            description: "A peaceful hike through the woods.",
            imageUrl: "hike3.jpg",
            hikeId: 3,
            postedBy: "charlielea"
        }
    ];

    // State for joined hikes and filtered hikes
    const [joinedHikes, setJoinedHikes] = useState([]);
    const [filteredHikes, setFilteredHikes] = useState(hikesData);

    // Function to display hikes
    const displayHikes = (filter = 'all', searchQuery = '') => {
        // Filter hikes based on 'filter' argument and search query
        const filtered = hikesData.filter(hike => {
            const matchesSearch = hike.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  hike.description.toLowerCase().includes(searchQuery.toLowerCase());

            if (filter === 'joined') {
                return joinedHikes.includes(hike.hikeId) && matchesSearch;
            }
            return matchesSearch;
        });

        setFilteredHikes(filtered);
    };

    // Function to handle 'Join' button click
    const handleJoinClick = (hikeId) => {
        if (joinedHikes.includes(hikeId)) {
            // Unjoin the hike
            setJoinedHikes(joinedHikes.filter(id => id !== hikeId));
        } else {
            // Join the hike
            setJoinedHikes([...joinedHikes, hikeId]);
        }
    };

    // Function to filter joined hikes
    const filterJoinedHikes = () => {
        const searchQuery = document.getElementById('searchInput').value;
        displayHikes('joined', searchQuery);
    };

    // Function to show all hikes
    const showAllHikes = () => {
        const searchQuery = document.getElementById('searchInput').value;
        displayHikes('all', searchQuery);
    };

    // Function to handle search
    const handleSearch = () => {
        const searchQuery = document.getElementById("searchInput").value.trim();
        displayHikes('all', searchQuery);
    };

    // Function to reset search
    const resetSearch = () => {
        document.getElementById("searchInput").value = '';
        displayHikes();
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
                        <img src="pngtree-adventure-men-logo-vector-png-image_6733821.png" alt="Pathfinders Logo" />
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

                {/* Search Bar */}
                <div className="search-bar">
                    <input type="text" id="searchInput" placeholder="Search hikes by title or description..." />
                    <button id="searchButton" onClick={handleSearch}>Search</button>
                    <button id="resetSearch" onClick={resetSearch}>Reset</button>
                </div>

                {/* Filter Buttons */}
                <div className="filter-buttons">
                    <button onClick={showAllHikes}>Show All Hikes</button>
                    <button onClick={filterJoinedHikes}>Show Joined Hikes</button>
                </div>

                {/* Grid for all hikes */}
                <div id="hikesContainer">
                    {filteredHikes.map(hike => (
                        <div className="hike-post" key={hike.hikeId}>
                            <div className="image-container">
                                <img src={hike.imageUrl} alt={hike.title} className="post-image" />
                            </div>
                            <h3>{hike.title}</h3>
                            <p>{hike.description}</p>
                            <p><strong>Posted by:</strong> {hike.postedBy}</p>
                            <button 
                                className="join-btn" 
                                onClick={() => handleJoinClick(hike.hikeId)}
                            >
                                {joinedHikes.includes(hike.hikeId) ? 'Joined!' : 'Join'}
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Gallery;
