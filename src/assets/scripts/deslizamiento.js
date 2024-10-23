// Función para prevenir el desplazamiento del ratón en resoluciones de PC

const mobileWidth = 576;
const tabletWidth = 768;
const desktopWidth = 992;

function preventMouseScroll() {
    // Comprobar si la anchura de la ventana es mayor que un umbral (ej. 768px)
    if (window.innerWidth > desktopWidth) {
        // Añadir el listener para prevenir el desplazamiento
        window.addEventListener('wheel', handleWheel, { passive: false });
    } else {
        // Si la ventana es menor o igual a 768px, quitar el listener
        window.removeEventListener('wheel', handleWheel);
    }
}

// Función que maneja el evento wheel
function handleWheel(event) {
    event.preventDefault();
}

// Llamar a la función al cargar la página
window.onload = preventMouseScroll;

// También puedes agregar un listener para el cambio de tamaño de la ventana
window.addEventListener('resize', preventMouseScroll);
