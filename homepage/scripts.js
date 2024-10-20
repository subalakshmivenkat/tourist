// Toggle password visibility
function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const icon = document.getElementById(inputId + '-icon');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Show the login form and hide others
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'none';
}

// Show the signup form and hide others
function showSignup() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'none';
}

// Show the forgot password form and hide others
function showForgotPassword() {
    document.getElementById('forgot-password-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
}

// Save users to local storage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Retrieve users from local storage
function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// Basic email validation
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Basic password strength check
function checkPasswordStrength() {
    const password = document.getElementById('signup-password').value;
    const strengthIndicator = document.getElementById('password-strength');
    let strength = '';

    if (password.length < 6) {
        strength = 'Weak';
    } else if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^a-zA-Z0-9]/)) {
        strength = 'Strong';
    } else {
        strength = 'Medium';
    }

    strengthIndicator.textContent = strength;
    strengthIndicator.className = 'strength ' + strength.toLowerCase();
}

// Login function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Basic validation
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format.");
        return;
    }

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        window.location.href = "homepage.html"; // Redirect to the next page
    } else {
        alert("Invalid credentials.");
    }
}

// Signup function
function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Basic validation
    if (email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email) ) {
        alert("Invalid email format.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const users = getUsers();
    if (users.some(u => u.email === email)) {
        alert("User with this email already exists.");
        return;
    }

    // Register the new user
    users.push({ email: email, password: password });
    saveUsers(users);
    alert("Signup successful. Please check your email to verify your account.");
    showLogin();
}

// Forgot password function
function forgotPassword() {
    const email = document.getElementById('forgot-email').value;

    // Basic validation
    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format.");
        return;
    }

    const users = getUsers();
    const user = users.find(u => u.email === email);

    if (user) {
        alert("Password reset link has been sent to your email.");
        // Here you would send the email with the reset link
    } else {
        alert("No user found with this email.");
    }
}
