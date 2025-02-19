// Example hikes data (to be replaced with real data from a database or API)
const hikes = [
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


// To track joined hikes
// To track joined hikes
let joinedHikes = [];

// Function to display all hikes in the grid
function displayHikes(filter = 'all', searchQuery = '') {
    const hikesContainer = document.getElementById("hikesContainer");
    hikesContainer.innerHTML = ''; // Clear any existing content

    // Filter hikes based on 'filter' argument and search query
    const filteredHikes = hikes.filter(hike => {
        const matchesSearch = hike.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              hike.description.toLowerCase().includes(searchQuery.toLowerCase());
        if (filter === 'joined') {
            return joinedHikes.includes(hike.hikeId) && matchesSearch;
        }
        return matchesSearch;
    });

    // Create hike posts
    filteredHikes.forEach(hike => {
        const hikePost = document.createElement("div");
        hikePost.classList.add("hike-post");

        hikePost.innerHTML = `
            <div class="image-container">
                <img src="${hike.imageUrl}" alt="${hike.title}" class="post-image">
            </div>
            <h3>${hike.title}</h3>
            <p>${hike.description}</p>
            <p><strong>Posted by:</strong> ${hike.postedBy}</p>
            <button class="join-btn" data-hike-id="${hike.hikeId}">${joinedHikes.includes(hike.hikeId) ? 'Joined!' : 'Join'}</button>
        `;

        hikesContainer.appendChild(hikePost);
    });

    // Add event listeners to 'Join' buttons
    // Add event listeners to 'Join' buttons
    const joinButtons = document.querySelectorAll(".join-btn");
    joinButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const button = event.target;
            const hikeId = parseInt(button.getAttribute("data-hike-id"));

            // Check if the hike is already joined
            if (joinedHikes.includes(hikeId)) {
                // Unjoin the hike: Remove the hikeId from the joinedHikes array
                joinedHikes = joinedHikes.filter(id => id !== hikeId);
                button.textContent = "Join";
                button.disabled = false;
            } else {
                // Join the hike: Add the hikeId to the joinedHikes array
                joinedHikes.push(hikeId);
                button.textContent = "Unjoin";
                button.disabled = false;
            }

            // Re-render hikes with the current search query
            displayHikes('all', document.getElementById('searchInput').value);
        });
    });

}

// Function to filter joined hikes
function filterJoinedHikes() {
    const searchQuery = document.getElementById('searchInput').value;
    displayHikes('joined', searchQuery);
}

// Function to show all hikes
function showAllHikes() {
    const searchQuery = document.getElementById('searchInput').value;
    displayHikes('all', searchQuery);
}

// Function to handle search
function handleSearch() {
    const searchQuery = document.getElementById("searchInput").value.trim();
    displayHikes('all', searchQuery);
}

// Function to reset search
function resetSearch() {
    document.getElementById("searchInput").value = '';
    displayHikes();
}

// Add event listeners for search and reset
document.getElementById("searchButton").addEventListener("click", handleSearch);
document.getElementById("resetSearch").addEventListener("click", resetSearch);

// Populate the page initially
displayHikes();
