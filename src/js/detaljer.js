/*jshint esversion: 6 */

const hentDetaljer = (befolkning, utdanning, sysselsetting) => {
    var nummer = document.getElementById('kommuneNr').value;
    var kommune = befolkning.getInfo(nummer);
    var dom = document.getElementById('detaljObjekt');
    generateDom(dom, kommune);
}

function generateDom(dom, kommune) {
  var antallUtdannede = (befolkning.getLastPopulation(kommune.name) * (utdanning.getHigherEducation(kommune.name)/100));
  var antallUtdannede = Math.floor(antallUtdannede);
  dom.innerHTML = "<b>" + kommune.name + "</b><br>" +
      "Kommunenummer: " + kommune.kommunenummer + "<br>" +
      "Befolkning: " + befolkning.getLastPopulationString(kommune.name) + "<br>" +
      "Sysselsetting: "+ sysselsetting.getLastEmployment(kommune.name)+"% <br>" +
      "Høyere utdanning: "+ utdanning.getHigherEducation(kommune.name)+"% (" +
       antallUtdannede + " personer) <br><br>" +
       "<table id='detaljerTable'>" +
       "</able>";
       generateTable(kommune.name);
}


function generateTable(kommune) {
  var table = document.getElementById('detaljerTable');
  var topRow = table.insertRow();
  topRow.className = "topRow";
  var yearCell = topRow.insertCell();
  var populationCell = topRow.insertCell();
  var employmentCell = topRow.insertCell();
  var educationCell = topRow.insertCell();
  yearCell.innerHTML = "År";
  populationCell.innerHTML = "Befolkning";
  employmentCell.innerHTML = "Sysselsetting";
  educationCell.innerHTML = "Utdanning";
  var old = befolkning.getOldestDate(kommune);
  var newest = befolkning.getNewestDate(kommune);
  while (old <= newest) {
      var newRow = table.insertRow();
      var year = newRow.insertCell();
      var population = newRow.insertCell();
      var employment = newRow.insertCell();
      var education = newRow.insertCell();
      year.innerHTML = ""+old;
      population.innerHTML = befolkning.getPopulation(kommune, old);
      employment.innerHTML = sysselsetting.getEmployment(kommune, old)+"%";
      education.innerHTML = utdanning.getHigherEducationByYear(kommune, old)+"%";
      old++;
  }
}
