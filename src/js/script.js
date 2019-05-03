var loadingGIF = document.getElementById("loading");
var blocks = document.getElementsByClassName("innhold");

//Load JSON from url into js objects

//Kan aksessere data om henholdsvis utdanning, sysselsetting og beolkning v.hj.a. disse objektene
var utdanning = new Utdanning("http://wildboy.uib.no/~tpe056/folk/85432.json");
//var sysselsetting = new Sysselsetting("http://wildboy.uib.no/~tpe056/folk/100145.json");
var befolkning = new Befolkning("http://wildboy.uib.no/~tpe056/folk/104857.json");

befolkning.load();

/**
 * Tilordner det siste datasettet som skal lastes en funksjon som gjør at det vises en GIF som laster (dersom datasettet ikke ferdig nedlastet).
 * Det betyr at når dette datasettet er lastet inn, burde de andre også være det.
 *
 *
 * Midlertidig. kan fjernes
 */
befolkning.onload = () => {
    if(befolkning.data == null){
        loadingGIF.style.display = "block";
    }
    else{
        loadingGIF.style.display = "none";
    }
}

function hentDetaljer() {
  var nummer = document.getElementById('kommuneNr').value;
  var kommune = befolkning.getKommuneByID(nummer);
  var dom = document.getElementById('detaljObjekt');
  dom.innerHTML = "<b>"+kommune["name"]+"</b><br>"+
  "Kommunenummer: "+kommune["kommunenummer"]+"<br>"+
  "Befolkning: "+befolkning.getLastPopulationString(kommune["name"]);

  /**
  * Kommunens navn
  * Kommunenr
  * Siste befolkningstall
  * Siste Sysselsetting
  * Siste Utdanning
  *
  * Tabell for utvikling i alle 3 datasett
  *
  */
}


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

//Gjør alt innhold usynlig. Hjelpemetode.
function invisible(){
    for(i = 0; i < blocks.length; i++){
        blocks.item(i).style.display = "none";
    }
}
