document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate successful login (you can add validation or an API call here)
        const emailInput = document.querySelector('input[type="email"]').value;
        const passwordInput = document.querySelector('input[type="password"]').value;

        // Here you can add actual authentication checks (this is a simulation for now)
        if (emailInput && passwordInput) {
            alert("Login successful! Redirecting to the homepage...");
            window.location.href = "homepage.html"; // Update the path to match the correct location.
 // Redirect to homepage (index.html)
        } else {
            alert("Please enter valid login credentials.");
        }
    });
});
