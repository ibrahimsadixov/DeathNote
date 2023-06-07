

const menu = document.getElementById("menu")
const mobileMenu = document.getElementById("mobileMenu")

menu.addEventListener("click",()=>{
    menu.classList.toggle("active");
})


menu.addEventListener("click",()=>{
    mobileMenu.classList.toggle("mobileMenuOpen")
})

const links = document.querySelectorAll(".nav-link")

links.forEach(element => {
    element.addEventListener("click",()=>{
        mobileMenu.classList.remove("mobileMenuOpen")
        menu.classList.toggle("active");
    })
});