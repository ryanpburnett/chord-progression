const pitchClass = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

const chordProg = document.getElementById("chordProg")
const gen2 = document.getElementById("gen2")
const numOfChords = document.getElementById("numOfChords")
const saved = document.getElementById("saved")

const major = document.getElementById("major")
const minor = document.getElementById("minor")
const dim = document.getElementById("dim")
const aug = document.getElementById("aug")

const domSeven = document.getElementById("domSeven")
const majSeven = document.getElementById("majSeven")
const minSeven = document.getElementById("minSeven")

const sevenths = document.getElementById("sevenths")
const more = document.getElementById("more")

// array to save progs in localStorage, key for each localStorage item

toBeSaved = []
key = 0

// hides/displays seventh chords, etc.

let mode = "hide"
let mode2 = "hide"

function seventhsShow() {
    if (mode === "hide") {
        mode = "show"
        sevenths.setAttribute("class", "show")
    }else{
        mode = "hide"
        sevenths.setAttribute("class", "hide")
    }
}

function moreShow() {
    if (mode2 === "hide") {
        mode2 = "show"
        more.setAttribute("class", "show")
    }else{
        mode2 = "hide"
        more.setAttribute("class", "hide")
    }
}

// generates progression

gen2.addEventListener("click", generateProg)

function generateProg() {

    // clears existing data in #chordProg html element

    chordProg.innerText = ""
    chordType = []
    toBeSaved = []

    // populates chordType array

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

    for (let i = 0; i < domSeven.value; i++) {
        chordType.push("7")
    }

    for (let i = 0; i < majSeven.value; i++) {
        chordType.push("M7")
    }

    for (let i = 0; i < minSeven.value; i++) {
        chordType.push("m7")
    }

    // generates new progression

    for (let i = 0; i < numOfChords.value; i++) {
        
        // line breaks every 4 chords

        if (i === 4 || i === 8 || i === 12) {
            const lineBreak = document.createElement("br")
            chordProg.appendChild(lineBreak)
        }

        // individual chord elements

        const prog = document.createElement("p")
        prog.innerText = 
        pitchClass[Math.floor(Math.random() * pitchClass.length)] +
        chordType[Math.floor(Math.random() * chordType.length)] 
        
        chordProg.appendChild(prog)
        
        // populating toBeSaved array

        toBeSaved.push(prog.innerText)
    }

    // localStorage stuff

    JSON.stringify(toBeSaved)
    localStorage.setItem(key, toBeSaved)
    let newSavedItem = localStorage.getItem(key)
    let newSavedP = document.createElement("p")
    newSavedP.innerText = newSavedItem
    saved.appendChild(newSavedP)
    key++

}