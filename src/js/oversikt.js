/*jshint esversion: 6 */

const hentOversikt = (befolkning) => {
    var ret = {};
    for (var kommune in befolkning.data) {
        var obj = befolkning.getKommuneByName(kommune);
        obj.befolkningstall = befolkning.getLastPopulationString(kommune);
        ret[kommune] = obj;
    }

    return ret;
};
const putOversikt = (befolkning) => {
    var table = document.getElementById('oversiktTabell');
    var oversikt = hentOversikt(befolkning);
    var i = 1;
    for (var kommune in oversikt) {
        var komObj = oversikt[kommune];
        var row = table.insertRow(i++);
        var kommuneNavn = row.insertCell(0);
        var kommuneNR = row.insertCell(1);
        var befolkningsTall = row.insertCell(2);
        kommuneNavn.innerHTML = kommune;
        kommuneNR.innerHTML = komObj.kommunenummer;
        befolkningsTall.innerHTML = komObj.befolkningstall;
    }
};