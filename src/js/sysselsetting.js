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
    load(){
        this.sammenlign();
    }

    sammenlign() {
        
        var data = this.dataAccessor;
        console.log(data);
        console.log(data.data);
        console.log(data.url);
        this.data = data;
        return;
        var kommune1 = document.getElementById("kommuneEn");
        var kommune2 = document.getElementById("kommuneTo");
        kommune1.onkeyup = function() {
            getInfo(kommune1.value, data, "En");
        };
        kommune2.onkeyup = function() {
            getInfo(kommune2.value, data, "To");
        };
    }
}

/** 
var employment = new Data("http://wildboy.uib.no/~tpe056/folk/100145.json");
employment.load();
var education = new Data("http://wildboy.uib.no/~tpe056/folk/85432.json");
education.load();
*/