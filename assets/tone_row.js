const pitchClass = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

const gen1 = document.getElementById("gen1")

gen1.addEventListener("click", generateRow)

function generateRow() {
    document.querySelector("#tone-row").innerText = ""

    for (i = 0; i < 12; i++) {
        const row = document.createElement("p")

        row.innerText = pitchClass[Math.floor(Math.random() * pitchClass.length)]
        
        document.getElementById("tone-row").appendChild(row)
    }
    
    document.getElementById("tone-row").style.display = "block";

}