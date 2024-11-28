// Funcionalidad: Redirigir al hacer clic en puntos del mapa
document.querySelectorAll('.punto').forEach(punto => {
    punto.addEventListener('click', () => {
        const lugar = punto.dataset.lugar;
        window.location.href = `lugares/${lugar}.html`; // Cambiar a la página del lugar correspondiente
    });
});

// Funcionalidad: Toggle del menú desplegable en dispositivos móviles
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});