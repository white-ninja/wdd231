// TIMESTAMP
document.getElementById("timestamp").value = new Date().toISOString();

// MODALS
const links = document.querySelectorAll("[data-modal]");
const buttons = document.querySelectorAll(".close");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.getElementById(link.dataset.modal).showModal();
    });
});

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.close();
    });
});