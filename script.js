// Declare the variables at the top of the script using const if they won't change
const loginForm = document.querySelector('.login-form');
const navbar = document.querySelector('.navbar');

// Toggle the login form when clicking the login button
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');  // Toggle 'active' class for login form
    navbar.classList.remove('active');     // Ensure the navbar isn't active
}

// Toggle the navbar when clicking the menu button
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');     // Toggle 'active' class for navbar
    loginForm.classList.remove('active');  // Ensure the login form isn't active
}

// Remove 'active' class from both login form and navbar when scrolling the page
window.onscroll = () => {
    loginForm.classList.remove('active');  // Ensure login form is hidden on scroll
    navbar.classList.remove('active');     // Ensure navbar is hidden on scroll
}
