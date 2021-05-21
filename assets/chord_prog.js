const pitchClass = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
const chordType = [
"", "", "", "", "", "", "", "", 
"m", "m", "m", "m", "m", "m", "m", "m", 
"dim", "dim", "dim", "dim",
"aug", "aug", 
"7", "7", "7", "7", 
"M7", "M7", 
"m7", "m7", 
"mM7", 
"dim7", "dim7", 
"1/2dim7", 
"aug7"
]

const gen2 = document.getElementById("gen2")

const numOfChords = document.getElementById("numOfChords")

gen2.addEventListener("click", generateProg)

function generateProg() {
    document.querySelector("#chord-prog").innerText = ""

    for (let i = 0; i < numOfChords.value; i++) {
        
        if (i === 4 || i === 8 || i === 12) {
            const lineBreak = document.createElement("br")
            document.getElementById("chord-prog").appendChild(lineBreak)
        }

        const prog = document.createElement("p")
        prog.innerText = 
        pitchClass[Math.floor(Math.random() * pitchClass.length)] +
        chordType[Math.floor(Math.random() * chordType.length)] 
        
        document.getElementById("chord-prog").appendChild(prog)
    }

}