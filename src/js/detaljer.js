/*jshint esversion: 6 */

const hentDetaljer = (befolkning, utdanning, sysselsetting) => {
    var nummer = document.getElementById('kommuneNr').value;
    var kommune = befolkning.getInfo(nummer);
    var dom = document.getElementById('detaljObjekt');
    generateDom(dom, kommune);
}

function generateDom(dom, kommune) {
  dom.innerHTML = "<b>" + kommune.name + "</b><br>" +
      "Kommunenummer: " + kommune.kommunenummer + "<br>" +
      "Befolkning: " + befolkning.getLastPopulationString(kommune.name) + "<br>" +
      "Sysselsetting"+ sysselsetting.getLastEmployment(kommune.name);
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
