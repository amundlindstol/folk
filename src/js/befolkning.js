//Skjelett til resterende klasser som behandler data:
class Befolkning {
    constructor(url){
        this.onload = null; //skal potensielt tilordnes en funksjon
        this.url = url;
        this.dataAccessor = new Data(url);
        this.load();

    }

    //Fra oppgbeskrivelse
    /**
     * Returnerer listen av alle kommunenavn som fremtrer i datasettene.
     *
     * @return names
     */

    getNames(){
      var elementer = this.data;
      var ret = [];
      var count = 0;
      for (var kommune in elementer) {
          ret[count++] = kommune;
      }
      return ret;
    }
    /**
     * Returnerer listen av kommunenummer som fremtrer i datasettene.
     *
     * @return numbers
     */
    getIDs(){
      var elementer = this.data;
      var ret = [];
      var count = 0;
      for (var kommune in elementer) {
          ret[count++] = String(elementer[kommune].kommunenummer);
      }
      return ret;
    }


    load(){
        this.dataAccessor.accessData();
        this.data = this.dataAccessor.data;
    }
}
