import API from './api.js';
import * as UI from './interfaz.js';
import {cleanHTML} from './cleanHTML.js';


// console.log(UI.formularioBuscar);

UI.formularioBuscar.addEventListener('submit', buscarCancion)

function buscarCancion(e) {
    e.preventDefault()

    const artista = document.querySelector('#artista').value
    const cancion = document.querySelector('#cancion').value

    const busqueda = new API(artista, cancion);

    if ((!artista) || (!cancion)) {
        UI.divMensajes.classList.add("error");
        UI.divMensajes.textContent = "Ingrese ambos campos para comenzar la búsqueda.";
        cleanHTML();
        
    } else {
        busqueda.consultarAPI();
    }

}