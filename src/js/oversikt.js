/*jshint esversion: 6 */

const hentOversikt = (befolkning) => {
    let ret = {};
    for (let kommune in befolkning.data) {
        let obj = befolkning.getKommuneByName(kommune);
        obj.befolkningstall = befolkning.getLastPopulationString(kommune);
        ret[kommune] = obj;
    }

    return ret;
};
const putOversikt = (befolkning) => {
    let overviewTable = document.getElementById('oversiktTable');
    let oversikt = hentOversikt(befolkning);
    console.log(oversikt);
    let i = 1;
    for (let kommune in oversikt) {
        let kommuneObject = oversikt[kommune];
        let tableElement = overviewTable.insertRow();
        tableElement.className = "tableElement";

        let kommuneNavn = tableElement.insertCell();
        kommuneNavn.innerHTML = "<p><span class='infoTab'>Kommune: </span>" + kommune + "</p>";

        let kommuneNr = tableElement.insertCell();
        kommuneNr.innerHTML = "<p><span class='infoTab'>Kommunenummer: </span>" + kommuneObject.kommunenummer + "</p>";
        kommuneNr.className = "kommunenummer";

        let befolkningsTall = tableElement.insertCell();
        befolkningsTall.innerHTML = "<p><span class='infoTab'>Befolkning: </span>" + kommuneObject.befolkningstall + "</p>";
    }
};
