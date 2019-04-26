//Skjelett til resterende klasser som behandler data:
class Utdanning {
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


    load(){
        this.data = this.dataAccessor.accessData();
    }
}