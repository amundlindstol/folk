//Skjelett til resterende klasser som behandler data:
class X {
    constructor(url){
        this.onload = null; //skal potensielt tilordnes en funksjon
        this.url = url;
    }

    //Fra oppgbeskrivelse
    /**
     * Returnerer listen av alle kommunenavn som fremtrer i datasettene.
     * 
     * @return names
     */

    getNames(){}
    /**
     * Returnerer listen av kommunenummer som fremtrer i datasettene.
     * 
     * @return numbers
     */
    getIDs(){}
    /**
     * Returnerer informasjon om en kommune basert på aktuelt datasett og gitt kommuneNr
     * 
     * @return numbers
     */
    getInfo(number){}

    /**
     * Klargjør og sender en forespørsel om å laste ned datasettet. 
     * To do: "Dersom objektet har egenskapet onload.."
     */
    load(){}
}

/** 
var employment = new Data("http://wildboy.uib.no/~tpe056/folk/100145.json");
employment.load();
var education = new Data("http://wildboy.uib.no/~tpe056/folk/85432.json");
education.load();
*/