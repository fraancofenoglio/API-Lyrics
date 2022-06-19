import * as UI from './interfaz.js';


export function showInfo(Artist, Song){
    UI.headingResultado.textContent = `${(Artist).toUpperCase()} - ${(Song).toUpperCase()}`;
}


export function showLyrics(Lyrics){
    UI.divResultado.classList.add("resultado")
    UI.divResultado.innerHTML = Lyrics;
}