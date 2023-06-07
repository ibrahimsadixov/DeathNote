const bg = document.querySelector(".homeBg");
const images = [ "Death_Note_Poster.webp","death-note-manga-1996x2912-anime-death-note-hd-art-wallpaper-preview.jpg","716ASj7z2GL._AC_UF1000,1000_QL80_.jpg"];

let currentBg = 0;

function changeBg() {
  bg.style.backgroundImage = `url(/assets/images/${images[currentBg]})`;
  currentBg = (currentBg + 1) % images.length;
}

setInterval(changeBg, 4000);
changeBg()