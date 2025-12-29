// const mainNav = document.getElementById("mainNav");
// const toggleMenu = document.querySelector(".toggleMenu");

// toggleMenu.addEventListener('click', () => {
//     toggleMenu.classList.toggle("change")
//     mainNav.classList.toggle("active")
// })

const darkMode = document.getElementById("darkMode");
const bodyElement = document.body;

darkMode.addEventListener('click', () => {
    bodyElement.classList.toggle("dark-mode")

    if(bodyElement.classList.contains("dark-mode")){
        darkMode.textContent = "Light"
    }
    else{
        darkMode.textContent = "Dark";
    }
})