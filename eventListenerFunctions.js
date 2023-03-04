
import { starWarsChar} from "./fetch.js";
import { dataArray } from "./fetchAny.js";
let localFilmNames = new Array();
let localHomeWorldName = new Array();

export function getfilms () {
    dataArray.forEach((value) => {
        localFilmNames.push(value.title);
       });
}
export function getHomeWorld() {
    dataArray.forEach((value) => {
        localHomeWorldName.push(value.name);
    });
}

export function name () {
    const name = document.querySelector("#nameGuess").value;
    if (document.querySelector("#name").value == starWarsChar.name) {
        document.querySelector('#nameOutput').innerHTML = "correct!";

    }
    else {
        document.getElementById('nameOutput').innerHTML = "incorrect!";
    }

}

export function height () {
    const name = document.querySelector("#heightGuess").value;
    if (document.querySelector("#height").value == starWarsChar.height) {
        document.querySelector('#heightOutput').innerHTML = "correct!";

    }
    else {
        document.getElementById('heightOutput').innerHTML = "incorrect!";
    }

}

export function mass () {
    const name = document.querySelector("#massGuess").value;
    if (document.querySelector("#mass").value == starWarsChar.mass) {
        document.querySelector('#massOutput').innerHTML = "correct!";

    }
    else {
        document.getElementById('massOutput').innerHTML = "incorrect!";
    }

}

export function hair_color () {
    const name = document.querySelector("#hair_colorGuess").value;
    if (document.querySelector("#hair_color").value == starWarsChar.hair_color) {
        document.querySelector('#hair_colorOutput').innerHTML = "correct!";

    }
    else {
        document.getElementById('hair_colorOutput').innerHTML = "incorrect!";
    }

}

export function eye_color () {
    const name = document.querySelector("#eye_colorGuess").value;
    if (document.querySelector("#eye_color").value == starWarsChar.eye_color) {
        document.querySelector('#eye_colorOutput').innerHTML = "correct!";

    }
    else {
        document.getElementById('eye_colorOutput').innerHTML = "incorrect!";
    }

}

export function birth_year () {
    const name = document.querySelector("#birth_yearGuess").value;
    if (document.querySelector("#birth_year").value == starWarsChar.birth_year) {
        document.querySelector('#birth_yearOutput').innerHTML = "correct!";

    }
    else {
        document.getElementById('birth_yearOutput').innerHTML = "incorrect!";
    }

}

export function gender () {
    const name = document.querySelector("#genderGuess").value;
    if (document.querySelector("#gender").value == starWarsChar.gender) {
        document.querySelector('#genderOutput').innerHTML = "correct!";

    }
    else {
        document.getElementById('genderOutput').innerHTML = "incorrect!";
    }

}

export function homeworld () {
    getHomeWorld();
    if (localHomeWorldName.includes(document.querySelector("#homeworld").value)) {
        document.querySelector('#homeworldOutput').innerHTML = "correct!";

    }
    else {
        document.getElementById('homeworldOutput').innerHTML = "incorrect!";
    }

}

export function films () {
    getfilms();
    if (localFilmNames.includes(document.querySelector("#films").value)) {
        document.querySelector('#filmsOutput').innerHTML = "correct!";

    }
    else {
        document.getElementById('filmsOutput').innerHTML = "incorrect!";
    }


}

export function skin_color () {
    const name = document.querySelector("#skin_colorGuess").value;
    if (document.querySelector("#skin_color").value == starWarsChar.skin_color) {
        document.querySelector('#skin_colorOutput').innerHTML = "correct!";

    }
    else {
        document.getElementById('skin_colorOutput').innerHTML = "incorrect!";
    }

}

export {localFilmNames, localHomeWorldName}
