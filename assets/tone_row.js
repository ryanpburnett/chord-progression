const pitchClass = [" C ", " C# ", " D ", " D# ", " E ", " F ", " F# ", " G ", " G# ", " A ", " A# ", " B "];

let toBeSavedToneRow;
let toneRowKey = 100;

const gen1 = document.getElementById("gen1");

gen1.addEventListener("click", generateRow);

function generateRow() {
    document.querySelector("#toneRow").innerText = "";

    // Fisher-Yates array shuffle
    let i = pitchClass.length, j, temp;

    while(i > 0, i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = pitchClass[j];
        pitchClass[j] = pitchClass[i];
        pitchClass[i] = temp;
    }

    document.querySelector("#toneRow").innerText = pitchClass;

    toBeSavedToneRow = pitchClass;
    localStorage.setItem(toneRowKey, toBeSavedToneRow);
    let newSavedItem = localStorage.getItem(toneRowKey);
    let newSavedListItem = document.createElement("li");
    newSavedListItem.innerText = newSavedItem;
    saved.prepend(newSavedListItem);
    toneRowKey++;

    // // old randomizer
    // for (let i = 0; i < 12; i++) {
    //     const rowElement = document.createElement("p")

    //     rowElement.innerText = pitchClass[Math.floor(Math.random() * pitchClass.length)]
        
    //     document.getElementById("tone-row").appendChild(rowElement)
    // }

}