# Random musical element generator

[Description](#description)

[Licence](#license)

[Installation](#installation)

[Usage](#usage)

[Dependencies](#dependencies)

[Contributing](#contributing)

[GitHub Link](#github-link)


## Link
https://ryanpburnett.github.io/chord-progression/

## Description
This project generates random chord progressions, tone rows, and rhythm matrices.

### License
GNU General Public Licence

### Installation
N/A

### Usage
Select which type of generator you want from the front page, and you're ready to go!

```
function generateProg() {
    document.querySelector("#chord-prog").innerText = ""

    for (i = 0; i < numOfChords.value; i++) {
        const prog = document.createElement("p")
        prog.innerText = 
        pitchClass[Math.floor(Math.random() * pitchClass.length)] +
        chordType[Math.floor(Math.random() * chordType.length)] 
        
        document.getElementById("chord-prog").appendChild(prog)
    }
    
    document.getElementById("chord-prog").style.display = "block";

}
```

![Title](./assets/chord.bmp)

### Dependencies
N/A

### Contributing
Email Ryan @ ryanpburnett@yahoo.com

### GitHub Link
https://github.com/ryanpburnett

The repo for this readme generator can be found on RPB's [Github](https://github.com/ryanpburnett/readme-generator) page.