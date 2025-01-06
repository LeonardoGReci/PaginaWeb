const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir-boton");
const cerrar = document.querySelector("#cerrar-boton");


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