let menuBox = document.querySelector(".menu-box")
let burgerMenu = menuBox.querySelector(".burger-menu")
let closeMenu = menuBox.querySelector(".close")
let links = document.querySelector(".links")

menuBox.addEventListener("click", e => {
    links.classList.toggle("visible")
    burgerMenu.classList.toggle("invisible")
    closeMenu.classList.toggle("visible")
})