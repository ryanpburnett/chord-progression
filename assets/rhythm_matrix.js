const numOfBeats = document.getElementById("numOfBeats")

const gen3 = document.getElementById("gen3")

const notes = document.getElementById("notes")
const rests = document.getElementById("rests")

gen3.addEventListener("click", generateMatrix)
// fix this with CSS grid? clearfix?
// rearrange array instead of randomizing so as not to repeat pitch classes
function generateMatrix() {
    document.querySelector("#rhythmMatrix").innerText = ""
    const rhythmMatrix = []

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
    }

}