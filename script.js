// Navbar toggle for mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Example Explore button message
function showMessage() {
    alert('Welcome to SWEVEN! Explore our bold streetwear collection.');
}