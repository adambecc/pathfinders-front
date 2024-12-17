document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const popupTitle = document.getElementById("popupTitle");
    const signUpForm = document.getElementById("signUpForm");
    const logInForm = document.getElementById("logInForm");
    const closeBtn = document.getElementById("closeBtn");

    // Buttons to open popups
    const signUpBtn = document.getElementById("signUpBtn");
    const logInBtn = document.getElementById("logInBtn");

    // Function to open the popup with appropriate content
    function openPopup(action) {
        overlay.style.display = "flex";

        if (action === "signup") {
            popupTitle.textContent = "Sign Up";
            signUpForm.classList.remove("hidden");
            logInForm.classList.add("hidden");
        } else {
            popupTitle.textContent = "Log In";
            logInForm.classList.remove("hidden");
            signUpForm.classList.add("hidden");
        }
    }

    // Function to close the popup
    function closePopup() {
        overlay.style.display = "none";
        signUpForm.reset();
        logInForm.reset();
    }

    // Event listeners for buttons
    signUpBtn.addEventListener("click", () => openPopup("signup"));
    logInBtn.addEventListener("click", () => openPopup("login"));
    closeBtn.addEventListener("click", closePopup);

    // Handle Sign-Up form submission
    signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("signUpUsername").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("signUpPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        alert(`Account created for ${username} with email ${email}!`);
        closePopup();
    });

    // Handle Log-In form submission
    logInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("logInUsername").value;
        const password = document.getElementById("logInPassword").value;

        alert(`Welcome back, ${username}!`);
        closePopup();
    });
});
