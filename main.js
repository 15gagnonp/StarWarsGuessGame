import {getStarWarsChar} from "./fetch.js";
import {eventCreate} from "./checkGuess.js"
import {giveUp} from "./giveUp.js"

async function runProgram() {
    await getStarWarsChar();
    eventCreate();
}
 
runProgram();

document.querySelector("#giveUp").addEventListener('click', giveUp);







