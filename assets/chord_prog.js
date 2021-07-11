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

const ninth = document.getElementById("ninth")
const eleventh = document.getElementById("eleventh")
const thirteenth = document.getElementById("thirteenth")
const quartal = document.getElementById("quartal")

const sevenths = document.getElementById("sevenths")
const more = document.getElementById("more")

// key for each localStorage item

let key = 0

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
    let chordType = []
    let toBeSaved = []

    // populates chordType array
    // refactor to be less WET

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

    for (let i = 0; i < ninth.value; i++) {
        chordType.push("9")
    }

    for (let i = 0; i < eleventh.value; i++) {
        chordType.push("11")
    }

    for (let i = 0; i < thirteenth.value; i++) {
        chordType.push("13")
    }

    for (let i = 0; i < quartal.value; i++) {
        chordType.push("Q4")
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
    let newSavedListItem = document.createElement("li")
    newSavedListItem.innerText = newSavedItem
    saved.prepend(newSavedListItem)
    key++

}