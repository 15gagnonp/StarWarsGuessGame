import { getfilms, getHomeWorld, localFilmNames, localHomeWorldName} from "./eventListenerFunctions.js";
import { starWarsChar } from "./fetch.js";

export function giveUp() {
    let i = 0;
    getfilms();
    getHomeWorld();
    const propNames = Object.getOwnPropertyNames(starWarsChar);
    const objectValues = Object.values(starWarsChar);
    const giveUpDiv = document.querySelector("#info");
    for( i; i < 10; i++) {
           const p = document.createElement('p');
           const span = document.createElement('span');
           p.innerHTML = propNames[i] + ": ";
           if (propNames[i] == 'homeworld') {
                span.innerHTML = localHomeWorldName;
                console.log(localHomeWorldName);
           }
           else if (propNames[i] == 'films') {
                span.innerHTML = localFilmNames;
                console.log(localFilmNames);
           }
           else {
                span.innerHTML = objectValues[i];
           }
        p.append(span);
        giveUpDiv.append(p);
    }
}