document.addEventListener("DOMContentLoaded", () => {
    const postButton = document.getElementById("postPictureBtn"); // Select the button to open the form
    const hikeForm = document.getElementById("hikeForm");
    const hikesContainer = document.getElementById("hikesContainer");
    const imageUpload = document.getElementById("imageUpload");
    const imagePreview = document.getElementById("imagePreview");

    // Show the form when the button is clicked
    postButton.addEventListener("click", function() {
        hikeForm.style.display = "block"; // Show the form
        postButton.style.display = "none"; // Hide the button
    });

    // Preview the selected image
    imageUpload.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                imagePreview.innerHTML = `<img src="${event.target.result}" alt="Hike Image" style="max-width: 100%; max-height: 300px;">`;
            };
            reader.readAsDataURL(file);
        } else {
            imagePreview.innerHTML = ''; // Clear preview if no file is selected
        }
    });

    // Handle form submission
    hikeForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form values
        const hikeTitle = document.getElementById("hikeTitle").value;
        const description = document.getElementById("description").value;
        const location = document.getElementById("location").value;
        const date = document.getElementById("date").value;
        const imageFile = imageUpload.files[0];

        // Create a new hike post element
        const hikePost = document.createElement("div");
        hikePost.classList.add("hike-post");

        // Initial like count and liked state
        let likeCount = 0;
        let isLiked = false;

        // Set the content for the hike post
        let postContent = `
            <h4>${hikeTitle}</h4>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Date:</strong> ${date}</p>
            <div class="like-section">
                <button class="like-btn">❤️</button>
                <span class="like-count">0 Likes</span>
            </div>
        `;

        // If an image was uploaded, add it to the post
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function(event) {
                postContent += `
                    <img src="${event.target.result}" alt="Hike Image" class="hike-img" style="max-width: 100%; max-height: 300px; cursor: pointer;">
                `;
                hikePost.innerHTML = postContent;
                addLikeFunctionality(hikePost, likeCount, isLiked);
                addImageToggle(hikePost);
                hikesContainer.appendChild(hikePost);
            };
            reader.readAsDataURL(imageFile);
        } else {
            // If no image is uploaded, just show the post text
            hikePost.innerHTML = postContent;
            addLikeFunctionality(hikePost, likeCount, isLiked);
            hikesContainer.appendChild(hikePost);
        }

        // Clear the form after submission
        hikeForm.reset();
        imagePreview.innerHTML = ''; // Clear the image preview

        // Hide the form and show the button again
        hikeForm.style.display = "none";
        postButton.style.display = "block";
    });

    // Function to add like functionality
    function addLikeFunctionality(postElement, likeCount, isLiked) {
        const likeBtn = postElement.querySelector(".like-btn");
        const likeCounter = postElement.querySelector(".like-count");

        likeBtn.addEventListener("click", () => {
            // Toggle like state
            isLiked = !isLiked;
            likeCount = isLiked ? likeCount + 1 : likeCount - 1;

            // Update button text and like count display
            likeBtn.textContent = isLiked ? "💔" : "❤️";
            likeCounter.textContent = `${likeCount} Likes`;
        });
    }

    // Function to toggle image size when clicked
    function addImageToggle(postElement) {
        const image = postElement.querySelector(".hike-img");

        image.addEventListener("click", () => {
            if (image.classList.contains("enlarged")) {
                // Shrink image
                image.style.maxWidth = "100%";
                image.style.maxHeight = "300px";
                image.classList.remove("enlarged");
            } else {
                // Enlarge image
                image.style.maxWidth = "90vw";
                image.style.maxHeight = "90vh";
                image.classList.add("enlarged");
            }
        });
    }
});
