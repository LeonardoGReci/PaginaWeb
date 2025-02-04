const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir-boton");
const cerrar = document.querySelector("#cerrar-boton");
const header = document.querySelector("header");
const logoHeader = document.querySelector(".logo-header");


abrir.addEventListener("click",() => {
    nav.classList.add("visible");
}
)

cerrar.addEventListener("click",() => {
    nav.classList.remove("visible");
}
)

// Cierra el menú al hacer clic fuera del nav
document.addEventListener("click", (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnOpenButton = abrir.contains(event.target);

    if (!isClickInsideNav && !isClickOnOpenButton) {
        nav.classList.remove("visible");
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { // Cambia '50' por el valor que prefieras como umbral
        header.classList.add("scrolled");
        logoHeader.classList.add("scrolled"); // Mostrar logo-header
    } else {
        header.classList.remove("scrolled");
        logoHeader.classList.remove("scrolled"); // Ocultar logo-header
    }
});


// Selecciona el elemento a observar
const elementos = document.querySelectorAll('.mision, .vision, .icono-mid-inicio, .logo-mid-inicio, .txt-mid-inicio');

// Función que se ejecuta cuando el elemento entra en la vista
const onIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation-visible');  // Agrega la clase .visible para iniciar la animación
      observer.unobserve(entry.target); // Deja de observar el elemento una vez que ha sido visible
    }
  });
};

// Crea un Intersection Observer
const observer = new IntersectionObserver(onIntersection, {
  threshold: 0.1 // Define que el 50% del elemento debe estar en la vista para activar la animación
});

// Empieza a observar cada elemento
elementos.forEach(elemento => {
  observer.observe(elemento);
});


// Espera a que el documento se cargue completamente
document.addEventListener("DOMContentLoaded", function () {

  // Agrega evento a los enlaces "Ver Más" para mostrar la información adicional
  document.querySelectorAll(".ver-mas").forEach(function (enlace) {
      enlace.addEventListener("click", function (e) {
          e.preventDefault(); // Evita el comportamiento predeterminado del enlace
          let info = this.closest(".div-texto-carta").querySelector(".info-adicional");
          info.style.display = "block"; // Muestra la información adicional
      });
  });

  // Agrega evento a los botones "Cerrar" para ocultar la información adicional
  document.querySelectorAll(".cerrar-info").forEach(function (boton) {
      boton.addEventListener("click", function (e) {
          e.preventDefault();
          let info = this.closest(".info-adicional");
          info.style.display = "none"; // Oculta la información adicional
      });
  });

});
