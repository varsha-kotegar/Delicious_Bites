// scripts.js

// Function to highlight the active navigation link
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});

// Function for a basic form validation
const validateForm = (form) => {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.border = '1px solid red';
            isValid = false;
        } else {
            input.style.border = '1px solid #ddd';
        }
    });

    return isValid;
};

// Add event listener for form submissions
document.addEventListener('submit', (e) => {
    const form = e.target;
    if (form.classList.contains('contact-form') || form.classList.contains('login-form')) {
        if (!validateForm(form)) {
            e.preventDefault(); // Prevent form submission if validation fails
            alert('Please fill out all fields before submitting.');
        }
    }
});

// Additional interactivity (e.g., smooth scrolling or animations) can be added here
