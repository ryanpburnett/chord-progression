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
const rhythmMatrix = ["-", "X"]

const gen1 = document.getElementById("gen1")
const gen2 = document.getElementById("gen2")
const gen3 = document.getElementById("gen3")

// way of producing weighted probability in lieu of duplicate array items
// new function that introduces non-randomness?
// options to alter what chord types to use,
    // popup window, switch(es), dropdown menu
// MIDI samples for playback
// Allow user to alter chords randomly generated
// store previously generated chords or tone rows in history tab

gen1.addEventListener("click", generateRow)
// fix this with CSS grid? clearfix?
// rearrange array instead of randomizing so as not to repeat pitch classes
// format generated material equally spaced
function generateRow() {
    document.querySelector("#tone-row").innerText = ""

    for (i = 0; i < 12; i++) {
        const row = document.createElement("p")

        row.innerText = pitchClass[Math.floor(Math.random() * pitchClass.length)]
        
        document.getElementById("tone-row").appendChild(row)
    }
    
    document.getElementById("tone-row").style.display = "block";

}
        
gen2.addEventListener("click", generateProg)

function generateProg() {
    document.querySelector("#chord-prog").innerText = ""

    for (i = 0; i < 4; i++) {
        const prog = document.createElement("p")
        prog.innerText = 
        pitchClass[Math.floor(Math.random() * pitchClass.length)] +
        chordType[Math.floor(Math.random() * chordType.length)] 
        
        document.getElementById("chord-prog").appendChild(prog)
    }
    
    document.getElementById("chord-prog").style.display = "block";

}

gen3.addEventListener("click", generateMatrix)
// fix this with CSS grid? clearfix?
// rearrange array instead of randomizing so as not to repeat pitch classes
function generateMatrix() {
    document.querySelector("#rhythm-matrix").innerText = ""

    for (i = 0; i < 8; i++) {
        const matrix = document.createElement("p")

        matrix.innerText = rhythmMatrix[Math.floor(Math.random() * rhythmMatrix.length)]
        
        document.getElementById("rhythm-matrix").appendChild(matrix)
    }
    
    document.getElementById("rhythm-matrix").style.display = "block";

}