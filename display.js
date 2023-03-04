let keyNames = new Array();
const guessInfo = document.querySelector("#guessInfo");
let arrayOfInputs = new Array();

function displayPropAndInput() {
    keyNames.forEach((propName) =>
    {
        if (propName != 'vehicles' && propName != 'starships' && propName != 'created' && propName != 'edited' && propName != 'url' && propName != 'species') {
            const charDiv = document.createElement('div');
            const p = document.createElement("p");
            const input = document.createElement('input');
            const enter = document.createElement('button');
            const output = document.createElement('p');
            

            charDiv.className = "propery";
            charDiv.style.display = "grid";
            charDiv.style.gridTemplateColumns = "100px 150px 100px 100px";
            charDiv.style.gridTemplateRows = "30px 1fr"

            p.innerHTML = propName + ": ";
            p.className = 'gridP';
            p.style.justifySelf = "left";

            input.id = propName;    
            input.setAttribute("type", "text");
            input.setAttribute("placeHolder", "Enter your guess");

            const eventName = enter.id = propName + "Guess";
            enter.innerHTML = "Enter";
            enter.style.marginLeft = "10px"

            arrayOfInputs.push(propName);

            output.id = propName + "Output";
            output.style.justifySelf = 'center';
            output.style.marginTop = '2px';

            
            charDiv.append(p);
            charDiv.append(input);
            charDiv.append(enter);
            charDiv.append(output);
            guessInfo.append(charDiv);
        }

    });
    

}
function displayArrayInfo(starWarsChar) {
    document.querySelector("#guessInfo").innerHTML = starWarsChar.name;
    keyNames = Object.keys(starWarsChar);
    displayPropAndInput();
}

export { displayArrayInfo, arrayOfInputs, keyNames};
