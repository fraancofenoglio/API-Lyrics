import * as UI from './interfaz.js'

export function cleanHTML() {
    UI.divResultado.classList.remove("resultado");
    UI.divResultado.innerHTML = "<h2 style='margin-top: 10%;'> Aquí se mostrará la letra de la canción ⇩ </h2>";
    UI.headingResultado.textContent = "";

    setTimeout(() => {

        UI.divMensajes.innerHTML = "";
        UI.divMensajes.classList.remove("error");
    }, 5000);
}
