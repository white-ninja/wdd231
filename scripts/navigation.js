// Stores the selected navigation element
const navbutton = document.getElementById('ham-btn');
const navlinks = document.getElementById('nav-bar');
// Toggles the 'open' class on the navigation menu
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});