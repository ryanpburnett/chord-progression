var pitchClass = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
var chordType = ["M", "m", "dim", "aug", "7", "M7", "m7", "mM7", "dim7", "1/2dim7", "aug7"]
// new function that introduces non-randomness?
// options to alter what chord types to use,
    // popup window, switch(es), dropdown menu
// MIDI samples for playback

document.getElementById("generate1").addEventListener("click", generateRow)
// fix this with CSS grid? clearfix?
// rearrange array instead of randomizing so as not to repeat pitch classes
function generateRow() {

    for (var i = 0; i < 12; i++) {
        var row = document.createElement("p")

        row.innerText = pitchClass[Math.floor(Math.random() * pitchClass.length)]
        
        document.getElementById("tone-row").appendChild(row)
    }
    
    document.getElementById("tone-row").style.display = "block";

}
        
document.getElementById("generate2").addEventListener("click", generateProg)

function generateProg() {

    for (var i = 0; i < 4; i++) {
        var prog = document.createElement("p")

        prog.innerText = 
        pitchClass[Math.floor(Math.random() * pitchClass.length)] +
        chordType[Math.floor(Math.random() * chordType.length)] 
        
        document.getElementById("chord-prog").appendChild(prog)
    }
    
    document.getElementById("chord-prog").style.display = "block";

}