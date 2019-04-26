//loadinganimation

//Load JSON from url into js objects
const utdanning = new Data("http://wildboy.uib.no/~tpe056/folk/85432.json");
const sysselsatte = new Data("http://wildboy.uib.no/~tpe056/folk/100145.json"); 
const befolkning = new Data("http://wildboy.uib.no/~tpe056/folk/104857.json");


console.log(utdanning);
console.log(sysselsatte);
console.log(befolkning);


function displayBlock(block) {
    var blocks = document.getElementsByClassName("innhold");
    for(i = 0; i < blocks.length; i++){
        blocks.item(i).style.display = "none";
    } 
    document.getElementById(block).style.display = "block";
    if (document.getElementById("sammenligning").style.display == "block") {
        new Sammenligning("http://wildboy.uib.no/~tpe056/folk/100145.json"); 
    }
}

//undo loadinganimation