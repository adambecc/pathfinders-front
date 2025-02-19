document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.getElementById("formContainer");
    const openFormButton = document.getElementById("openFormButton");
    const cancelFormButton = document.getElementById("cancelFormButton");
    const hikeForm = document.getElementById("hikeForm");
    const futureHikesContainer = document.getElementById("futureHikesContainer");

    // Toggle form visibility
    openFormButton.addEventListener("click", () => {
        formContainer.classList.remove("hidden");
    });

    cancelFormButton.addEventListener("click", () => {
        formContainer.classList.add("hidden");
    });

    // Handle form submission
    hikeForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form values
        const hikeTitle = document.getElementById("hikeTitle").value;
        const description = document.getElementById("description").value;
        const location = document.getElementById("location").value;
        const date = document.getElementById("date").value;

        // Validate year (ensure it's 2025 or later)
        const hikeYear = new Date(date).getFullYear();
        if (hikeYear < 2025) {
            alert("Only hikes scheduled for 2025 onwards can be added here!");
            return;
        }

        // Create hike post
        const hikePost = document.createElement("div");
        hikePost.className = "hike-post";
        hikePost.innerHTML = `
            <h4>${hikeTitle}</h4>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Date:</strong> ${date}</p>
            <button class="join-button">Join <span class="join-count">0</span></button>
            <div class="comments-section">
                <h5>Comments:</h5>
                <ul class="comments-list"></ul>
                <textarea class="comment-input" placeholder="Add a comment..."></textarea>
                <button class="comment-button">Post Comment</button>
            </div>
        `;

        // Add event listener for joins
        const joinButton = hikePost.querySelector(".join-button");
        const joinCount = hikePost.querySelector(".join-count");
        joinButton.addEventListener("click", () => {
            joinCount.textContent = parseInt(joinCount.textContent) + 1;
        });

        // Add event listener for comments
        const commentInput = hikePost.querySelector(".comment-input");
        const commentButton = hikePost.querySelector(".comment-button");
        const commentsList = hikePost.querySelector(".comments-list");
        commentButton.addEventListener("click", () => {
            const commentText = commentInput.value.trim();
            if (commentText) {
                const commentItem = document.createElement("li");
                commentItem.textContent = commentText;
                commentsList.appendChild(commentItem);
                commentInput.value = "";
            }
        });

        // Append hike post to the "2025 onwards" container
        futureHikesContainer.appendChild(hikePost);

        // Reset and hide form
        hikeForm.reset();
        formContainer.classList.add("hidden");
    });
});
