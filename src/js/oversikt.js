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
    let i = 1;
    for (let kommune in oversikt) {
        let kommuneObject = oversikt[kommune];
        let tableElement = overviewTable.insertRow();
        tableElement.className = "tableElement";

        let kommuneNavn = tableElement.insertCell();
        kommuneNavn.innerHTML = "<p>" + kommune + "</p>"; 
        
        let kommuneNr = tableElement.insertCell();
        kommuneNr.innerHTML = "<p>" + kommuneObject.kommunenummer + "</p>"; 
        kommuneNr.className = "kommunenummer";

        let befolkningsTall = tableElement.insertCell();
        befolkningsTall.innerHTML = "<p>" + kommuneObject.befolkningstall + "</p>"; 

        //console.log(kommune);
        //console.log(komObj);
        //let row = table.insertRow(i++);
        //kommuneNavn.innerHTML = kommune;
        //kommuneNR.innerHTML = komObj.kommunenummer;
        //befolkningsTall.innerHTML = komObj.befolkningstall;
        //tableElement.appendChild(kommuneNavn);
        //tableElement.appendChild(kommuneNr);
        //tableElement.appendChild(befolkningsTall);
        //overviewTable.appendChild(tableElement);
    }
};