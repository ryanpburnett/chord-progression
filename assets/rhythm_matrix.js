const rhythmMatrix = ["-", "X"]

const numOfBeats = document.getElementById("numOfBeats")

const gen3 = document.getElementById("gen3")

gen3.addEventListener("click", generateMatrix)
// fix this with CSS grid? clearfix?
// rearrange array instead of randomizing so as not to repeat pitch classes
function generateMatrix() {
    document.querySelector("#rhythm-matrix").innerText = ""

    for (let i = 0; i < numOfBeats.value; i++) {

        if (i === 4 || i === 8 || i === 12) {
            const lineBreak = document.createElement("br")
            document.getElementById("rhythm-matrix").appendChild(lineBreak)
        }

        const matrix = document.createElement("p")

        matrix.innerText = rhythmMatrix[Math.floor(Math.random() * rhythmMatrix.length)]
        
        document.getElementById("rhythm-matrix").appendChild(matrix)
    }

}