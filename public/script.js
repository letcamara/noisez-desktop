const btnMenu = document.querySelector('.noise-btnMenu')
const mainMenu = document.querySelector('.noise-mainMenu')

btnMenu.addEventListener("click", function(e){
  e.preventDefault();
  if (mainMenu.style.display === "none") {
    mainMenu.style.display = "block";
  } else {
    mainMenu.style.display = "none";
  }
}, false);

