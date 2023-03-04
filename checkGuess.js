import * as method from "./eventListenerFunctions.js";
function createEventListeners () {

    
document.querySelector('#nameGuess').addEventListener('click', method.name);
document.querySelector('#heightGuess').addEventListener('click', method.height);
document.querySelector('#massGuess').addEventListener('click', method.mass);
document.querySelector('#hair_colorGuess').addEventListener('click', method.hair_color);
document.querySelector('#eye_colorGuess').addEventListener('click', method.eye_color);
document.querySelector('#birth_yearGuess').addEventListener('click', method.birth_year);
document.querySelector('#genderGuess').addEventListener('click', method.gender);
document.querySelector('#homeworldGuess').addEventListener('click', method.homeworld);
document.querySelector('#filmsGuess').addEventListener('click', method.films);
document.querySelector('#skin_colorGuess').addEventListener('click', method.skin_color);    

} 

export function eventCreate () {
    createEventListeners();

}

