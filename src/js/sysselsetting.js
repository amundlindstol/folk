/*jshint esversion: 6 */

//Skjelett til resterende klasser som behandler data:
class Sysselsetting {
    constructor(url) {
        this.url = url;
        this.onload = () => {
            this.data = this.dataAccessor.data;
            sammenlign(this);  
        };
        this.dataAccessor = new Data(url);
        this.load();
    }

    //Fra oppgbeskrivelse
    /**
     * Returnerer listen av alle kommunenavn som fremtrer i datasettene.
     * 
     * @return names
     */

    getNames() {}
    /**
     * Returnerer listen av kommunenummer som fremtrer i datasettene.
     * 
     * @return numbers
     */
    getIDs() {}

    /**
     * Klargjør og sender en forespørsel om å laste ned datasettet. 
     * To do: "Dersom objektet har egenskapet onload.."
     */
    load() {
        this.dataAccessor.accessData(this.onload);
    }

    
}

/** 
var employment = new Data("http://wildboy.uib.no/~tpe056/folk/100145.json");
employment.load();
var education = new Data("http://wildboy.uib.no/~tpe056/folk/85432.json");
education.load();
*/