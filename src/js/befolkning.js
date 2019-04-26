//Skjelett til resterende klasser som behandler data:
class Befolkning {
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


    load(){
        this.data = this.dataAccessor.accessData();
        while(this.data == null){
            this.onload();
        }
    }
}
