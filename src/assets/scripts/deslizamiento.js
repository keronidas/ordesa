// Prevenir el desplazamiento del ratón
window.addEventListener('wheel', (event) => {
    event.preventDefault();
}, { passive: true });