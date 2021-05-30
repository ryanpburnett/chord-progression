const pitchClass = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
const chordType = []

const gen2 = document.getElementById("gen2")
const numOfChords = document.getElementById("numOfChords")
const major = document.getElementById("major")
const minor = document.getElementById("minor")
const dim = document.getElementById("dim")
const aug = document.getElementById("aug")

gen2.addEventListener("click", generateProg)

function generateProg() {
    document.querySelector("#chord-prog").innerText = ""

    for (let i = 0; i < major.value; i++) {
        chordType.push("")
    }

    for (let i = 0; i < minor.value; i++) {
        chordType.push("m")
    }

    for (let i = 0; i < dim.value; i++) {
        chordType.push("dim")
    }

    for (let i = 0; i < aug.value; i++) {
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