import * as UI from './interfaz.js'
import { showLyrics, showInfo } from './showLyrics.js';
import {cleanHTML} from './cleanHTML.js'


//metodo de la clase

// class API {
//     constructor(artista, cancion) {
//         this.artista = artista;
//         this.cancion = cancion;
//     }
//     consultarAPI() {
//         const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
//         // Acá va el Spinner
//         UI.divResultado.innerHTML = "<div style='color:white;background:red'>Loading...</div>"
//         // METODO FETCH
//         fetch(url)
//             .then(respuesta => respuesta.json())
//             .then(resultado => {
//                 // console.log(resultado);
//                 const { lyrics } = resultado
//                 UI.divResultado.textContent = lyrics
//             })
//     }
// }

// Mostrar de mejor manera en el DOM y que al no cargar datos muestre los errores
// Mejorar el spinner
// Utilizar async/await




class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    async consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        UI.divResultado.innerHTML = '<div style="margin-top: 20%" class="lds-ripple"><div></div><div></div></div>'; //spinner

        try {
            const respuesta = await fetch(url);
            const respuestaJSON = await respuesta.json();
            const Lyrics = respuestaJSON.lyrics;
            // console.log(respuestaJSON);
 
            if (respuesta.status !== 404) {
                showLyrics(Lyrics);
                showInfo(this.artista, this.cancion);
                UI.formularioBuscar.reset();

            } else {
                UI.divMensajes.classList.add("error");
                UI.divMensajes.textContent = `Canción no encontrada.`;
                UI.formularioBuscar.reset();
                cleanHTML();
                
            }


        } catch (error) {
            console.error(error);
        }
    }
}

export default API
