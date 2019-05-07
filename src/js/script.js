/*jshint esversion: 6 */

var loadingGIF = document.getElementById("loading");
var blocks = document.getElementsByClassName("innhold");


const enableNavigationButtons = () => {
  let introductionButton = document.getElementById("introductionButton");
  introductionButton.onclick = () => displayBlock("introduksjon");

  let overviewButton = document.getElementById("overviewButton");
  overviewButton.onclick = () => displayBlock("oversikt");

  let detailsButton = document.getElementById("detailsButton");
  detailsButton.onclick = () => displayBlock("detaljer");

  let comparisonButton = document.getElementById("comparisonButton");
  comparisonButton.onclick = () => displayBlock("sammenligning");
};

const removeLoadingMessage = () => {
  let loadingGif = document.getElementById("loading");
  loadingGIF.hidden = "true";
  let introductionDiv = document.getElementById("introduksjon");
  introductionDiv.hidden = false;
};


//Load JSON from url into js objects
//Kan aksessere data om henholdsvis utdanning, sysselsetting og beolkning v.hj.a. disse objektene
var utdanning = new Utdanning("http://wildboy.uib.no/~tpe056/folk/85432.json");
var sysselsetting = new Sysselsetting("http://wildboy.uib.no/~tpe056/folk/100145.json");
var befolkning = new Befolkning("http://wildboy.uib.no/~tpe056/folk/104857.json");


function displayBlock(block) {
  var blocks = document.getElementsByClassName("innhold");
  for (i = 0; i < blocks.length; i++) {
    blocks.item(i).style.display = "none";
  }
  document.getElementById(block).style.display = "block";

  /*if (document.getElementById("sammenligning").style.display == "block") {
    new Sammenligning("http://wildboy.uib.no/~tpe056/folk/100145.json");
  }*/
}

//Gjør alt innhold usynlig. Hjelpemetode.
function invisible() {
  for (i = 0; i < blocks.length; i++) {
    blocks.item(i).style.display = "none";
  }
}