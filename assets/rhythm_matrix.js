const numOfBeats = document.getElementById("numOfBeats")

const gen3 = document.getElementById("gen3")

const notes = document.getElementById("notes")
const rests = document.getElementById("rests")

let rhythmMatrixKey = 200

gen3.addEventListener("click", generateMatrix)

// fix this with CSS grid? clearfix?
function generateMatrix() {
    document.querySelector("#rhythmMatrix").innerText = ""
    let rhythmMatrix = []
    let toBeSavedRhythmMatrix = []
    
    for (let i = 0; i < notes.value; i++) {
        rhythmMatrix.push("X")
    }

    for (let i = 0; i < rests.value; i++) {
        rhythmMatrix.push("-")
    }

    for (let i = 0; i < numOfBeats.value; i++) {

        if (i === 4 || i === 8 || i === 12) {
            const lineBreak = document.createElement("br")
            document.getElementById("rhythmMatrix").appendChild(lineBreak)
        }

        const matrix = document.createElement("p")

        matrix.innerText = rhythmMatrix[Math.floor(Math.random() * rhythmMatrix.length)]
        
        document.getElementById("rhythmMatrix").appendChild(matrix)

        toBeSavedRhythmMatrix.push(matrix.innerText)
    }

    // local storage
    
    JSON.stringify(toBeSavedRhythmMatrix)
    localStorage.setItem(rhythmMatrixKey, toBeSavedRhythmMatrix)
    let newSavedItem = localStorage.getItem(rhythmMatrixKey)
    let newSavedListItem = document.createElement("li")
    newSavedListItem.innerText = newSavedItem
    saved.prepend(newSavedListItem)
    rhythmMatrixKey++

}