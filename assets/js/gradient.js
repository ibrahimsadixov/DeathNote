const border = document.querySelector(".homeBg");
const colors = [ "white", "rgb(199, 48, 37)" ]

let currentColorIndex = 0;

function changeBorderColor() {
  border.style.borderColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

setInterval(changeBorderColor, 3000); 
