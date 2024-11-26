// 1. Validación del formulario de contacto
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe antes de la validación

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    // Validación simple
    if (nombre.value.trim() === "" || email.value.trim() === "" || mensaje.value.trim() === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Aquí puedes agregar más validaciones (por ejemplo, para el formato del email)
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    formulario.reset(); // Resetea el formulario
});

// 2. Efecto de animación al hacer scroll a las secciones
window.addEventListener('scroll', function() {
    const elementos = document.querySelectorAll('.animar');
    elementos.forEach(function(elemento) {
        if (elemento.getBoundingClientRect().top < window.innerHeight) {
            elemento.classList.add('mostrar'); // Agregar clase cuando el elemento esté visible
        }
    });
});

// 3. Mostrar/ocultar mapa (en el formulario de contacto)
const mapaButton = document.getElementById('mapaButton');
const mapa = document.getElementById('mapa');

mapaButton.addEventListener('click', function() {
    if (mapa.style.display === 'none') {
        mapa.style.display = 'block';
    } else {
        mapa.style.display = 'none';
    }
});

// 4. Botón de desplazamiento hacia arriba
const btnArriba = document.createElement('button');
btnArriba.innerText = '↑ Volver Arriba';
btnArriba.style.position = 'fixed';
btnArriba.style.bottom = '20px';
btnArriba.style.right = '20px';
btnArriba.style.backgroundColor = '#1E3A5F';
btnArriba.style.color = '#FFF';
btnArriba.style.border = 'none';
btnArriba.style.borderRadius = '5px';
btnArriba.style.padding = '10px 15px';
btnArriba.style.cursor = 'pointer';
btnArriba.style.display = 'none'; // Inicialmente oculto

document.body.appendChild(btnArriba);

// Mostrar el botón cuando se haga scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        btnArriba.style.display = 'block';
    } else {
        btnArriba.style.display = 'none';
    }
});

// Desplazar hacia arriba al hacer clic
btnArriba.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 5. Función para animar elementos al hacer scroll
document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.animar');
    elementsToAnimate.forEach(function(element) {
        element.style.opacity = 0;
        element.style.transition = 'opacity 0.5s ease-out';
    });
});

// 6. Función de confirmación para el formulario de reservas
document.getElementById('formReservas').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Mostrar el mensaje de éxito
    document.getElementById('mensajeExito').style.display = 'block';

    // Limpiar los campos del formulario
    document.getElementById('formReservas').reset();

    // Opcionalmente, ocultar el mensaje después de 5 segundos
    setTimeout(function() {
        document.getElementById('mensajeExito').style.display = 'none';
    }, 5000); // El mensaje desaparecerá después de 5 segundos
});
