//Skjelett til resterende klasser som behandler data:
class Sysselsetting {
    constructor(url){
        this.onload = null; //skal potensielt tilordnes en funksjon
        this.url = url;
        this.dataAccessor = new Data(url); 
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
    load(){
        this.data = this.dataAccessor.accessData();
    }
}
