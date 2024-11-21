// Manejo de clics en los puntos del mapa
document.querySelectorAll('.punto').forEach(punto => {
    punto.addEventListener('click', () => {
        const lugar = punto.dataset.lugar;
        window.location.href = `${lugar}.html`; // Redirige a la página específica
    });
});
