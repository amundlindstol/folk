/*jshint esversion: 6 */

const hentDetaljer = (befolkning, utdanning, sysselsetting) => {
    var nummer = document.getElementById('kommuneNr').value;
    var kommune = befolkning.getKommuneByID(nummer);
    var dom = document.getElementById('detaljObjekt');
    dom.innerHTML = "<b>" + kommune.name + "</b><br>" +
        "Kommunenummer: " + kommune.kommunenummer + "<br>" +
        "Befolkning: " + befolkning.getLastPopulationString(kommune.name) + "<br>" +
        "Sysselsetting"+ sysselsetting.getLastEmployment(kommune);
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
};
