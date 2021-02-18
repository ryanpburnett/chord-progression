const rhythmMatrix = ["-", "X"]

const numOfBeats = document.getElementById("numOfBeats")

const gen3 = document.getElementById("gen3")

gen3.addEventListener("click", generateMatrix)
// fix this with CSS grid? clearfix?
// rearrange array instead of randomizing so as not to repeat pitch classes
function generateMatrix() {
    document.querySelector("#rhythm-matrix").innerText = ""

    for (i = 0; i < numOfBeats.value; i++) {
        const matrix = document.createElement("p")

        matrix.innerText = rhythmMatrix[Math.floor(Math.random() * rhythmMatrix.length)]
        
        document.getElementById("rhythm-matrix").appendChild(matrix)
    }
    
    document.getElementById("rhythm-matrix").style.display = "block";

}