const colorModeButton = document.querySelector("#modo-oscuro");
const body = document.body;

colorModeButton.addEventListener("click",cambiarModoColor);

function cambiarModoColor() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")){
        colorModeButton.innerText = "Cambiar a Light Mode";
    }else{
        colorModeButton.innerText = "Cambiar a dark Mode";
    }
}