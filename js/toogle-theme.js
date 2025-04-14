const toogleTheme = document.getElementById("toogle-theme");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode () {
  body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "activado");  
}

function desactivarDarkMode () {
  body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", "desactivado");  
}

toogleTheme.addEventListener("click", () => {

  darkMode = localStorage.getItem("dark-mode");

  if (darkMode !== "activado") {
    activarDarkMode();
  } else {
    desactivarDarkMode();
  }
});