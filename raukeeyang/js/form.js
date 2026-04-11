// Mobile navigation toggle
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll("#navMenu a");

// Toggle menu open/close
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuBtn.classList.toggle("active");
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuBtn.classList.remove("active");
    });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest("nav") && !e.target.closest("#menuBtn")) {
        navMenu.classList.remove("open");
        menuBtn.classList.remove("active");
    }
});

// Footer dates
document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;

// ===== CONTACT FORM =====
// Add form handling if needed
