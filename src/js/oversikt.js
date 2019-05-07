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
    let overviewDiv = document.getElementById('oversiktDiv');
    let oversikt = hentOversikt(befolkning);
    let i = 1;
    for (let kommune in oversikt) {
        let kommuneObject = oversikt[kommune];
        let columnDiv = document.createElement("div");
        columnDiv.className = "columnElement";

        let kommuneNavn = document.createElement("div");
        kommuneNavn.innerHTML = "<p>" + kommune + "</p>"; 
        
        let kommuneNr = document.createElement("div");
        kommuneNr.innerHTML = "<p>" + kommuneObject.kommunenummer + "</p>"; 
        kommuneNr.className = "kommunenummer";

        let befolkningsTall = document.createElement("div");
        befolkningsTall.innerHTML = "<p>" + kommuneObject.befolkningstall + "</p>"; 

        //console.log(kommune);
        //console.log(komObj);
        //let row = table.insertRow(i++);
        //kommuneNavn.innerHTML = kommune;
        //kommuneNR.innerHTML = komObj.kommunenummer;
        //befolkningsTall.innerHTML = komObj.befolkningstall;
        columnDiv.appendChild(kommuneNavn);
        columnDiv.appendChild(kommuneNr);
        columnDiv.appendChild(befolkningsTall);
        overviewDiv.appendChild(columnDiv);
    }
};