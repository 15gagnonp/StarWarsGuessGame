import {displayArrayInfo} from "./display.js";
import {getStarWarsInfo} from "./fetchAny.js"
let randomNum = null;
let starWarsChar = new Array();
let charMovieUrl = new Array();
let charHomeworld = null;

function getArrayNames() {
    charMovieUrl = starWarsChar.films;
    charMovieUrl.forEach((url) => {
        getStarWarsInfo(url);
    });
    
    charHomeworld = starWarsChar.homeworld;
    getStarWarsInfo(charHomeworld);

}

async function getStarWarsChar() {
    randomNum = (Math.random() * (82 - 1) + 1).toFixed(0);
    if(randomNum == 17) {
        randomNum++;
    }
    const swUrl = 'https://swapi.dev/api/people/' + randomNum + '/'; 
    const charArray = await fetch(swUrl);
    if (charArray.ok) {
        const charData = await charArray.json();
        starWarsChar = charData;
        displayArrayInfo(starWarsChar);

    }
    getArrayNames();

}





export {starWarsChar, getStarWarsChar, randomNum};