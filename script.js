// Manejo de clics en los puntos del mapa
document.querySelectorAll('.punto').forEach(punto => {
    punto.addEventListener('click', () => {
        const lugar = punto.dataset.lugar;
        window.location.href = `lugares/${lugar}.html`;
    });
});

// Menu Toggle for Mobile
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
