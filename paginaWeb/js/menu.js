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



document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".opciones-menu-servicios button");
  const infoContainer = document.querySelector(".container-inf-servicios");

  buttons.forEach((button) => {
      button.addEventListener("click", () => {
          // Obtén el texto del atributo data-info y la imagen del atributo data-bg
          const info = button.getAttribute("data-info");
          const bgImage = button.getAttribute("data-bg");

          // Cambia el contenido del div de información
          infoContainer.innerHTML = `
              <h2>${button.textContent}</h2>
              <p>${info}</p>
          `;

          // Cambia la imagen de fondo del div
          infoContainer.style.backgroundImage = `url('${bgImage}')`;
      });
  });
});
