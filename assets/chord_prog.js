const pitchClass = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
const chordType = []

const gen2 = document.getElementById("gen2")
const numOfChords = document.getElementById("numOfChords")
const numMajor = document.getElementById("numMajor")
const numMinor = document.getElementById("numMinor")
const numDim = document.getElementById("numDim")
const numAug = document.getElementById("numAug")

gen2.addEventListener("click", generateProg)

function generateProg() {
    document.querySelector("#chord-prog").innerText = ""

    for (let i = 0; i < numMajor.value; i++) {
        chordType.push("")
    }

    for (let i = 0; i < numMinor.value; i++) {
        chordType.push("m")
    }

    for (let i = 0; i < numDim.value; i++) {
        chordType.push("dim")
    }

    for (let i = 0; i < numAug.value; i++) {
        chordType.push("aug")
    }

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