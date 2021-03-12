const pitchClass = [" C ", " C# ", " D ", " D# ", " E ", " F ", " F# ", " G ", " G# ", " A ", " A# ", " B "]

const gen1 = document.getElementById("gen1")

gen1.addEventListener("click", generateRow)

function generateRow() {
    document.querySelector("#tone-row").innerText = ""

    // Fisher-Yates array shuffle
    let i = pitchClass.length, j, temp
    while(i > 0, i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = pitchClass[j];
    pitchClass[j] = pitchClass[i];
    pitchClass[i] = temp;
    }

    document.querySelector("#tone-row").innerText = pitchClass

    // // old randomizer
    // for (let i = 0; i < 12; i++) {
    //     const rowElement = document.createElement("p")

    //     rowElement.innerText = pitchClass[Math.floor(Math.random() * pitchClass.length)]
        
    //     document.getElementById("tone-row").appendChild(rowElement)
    // }

}