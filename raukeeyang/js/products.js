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

// ===== PRODUCTS PAGE =====
const container = document.querySelector("#productContainer");
const modal = document.querySelector("#productModal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");
const filterButtons = document.querySelectorAll(".filters button");

let products = [];

// FETCH DATA
async function getProducts() {
    try {
        const response = await fetch("data/products.json");
        products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error("Error loading products:", error);
    }
}

// DISPLAY CARDS
function displayProducts(list) {
    container.innerHTML = "";

    list.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button data-id="${product.id}">View Details</button>
    `;

        container.appendChild(card);
    });

    addModalEvents(list);
}

// FILTER BUTTONS
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        const filtered = filter === "all"
            ? products
            : products.filter(p => p.category === filter);
        displayProducts(filtered);
    });
});

// MODAL
function addModalEvents(list) {
    document.querySelectorAll(".card button").forEach(btn => {
        btn.addEventListener("click", () => {
            const product = list.find(p => p.id == btn.dataset.id);

            modalContent.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
        <strong>${product.price}</strong>
      `;

            modal.showModal();
        });
    });
}

closeModal.addEventListener("click", () => modal.close());

// START APP
getProducts();