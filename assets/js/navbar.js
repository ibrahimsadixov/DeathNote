
const navbarr = document.getElementById("nav");

window.addEventListener("scroll", function() {
  if (window.pageYOffset === 0) {
    navbarr.classList.remove("navBorder");
  } else {
    navbarr.classList.add("navBorder");
  }
});
