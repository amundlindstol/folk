//Skjelett til resterende klasser som behandler data:
class Befolkning {
    constructor(url){
        this.onload = null; //skal potensielt tilordnes en funksjon
        this.url = url;
        this.dataAccessor = new Data(url);
        this.load();

    }

    /** 
    getData(){
      return this.data.data.elementer;
      this.load();
    }
    */

    //Fra oppgbeskrivelse
    /**
     * Returnerer listen av alle kommunenavn som fremtrer i datasettene.
     *
     * @return names
     */

    getNames(){
      var elementer = this.getData();
      var ret = [];
      var count = 0;
      for (var kommune in elementer) {
          return[count++] = elementer[kommune];
      }
    }
    /**
     * Returnerer listen av kommunenummer som fremtrer i datasettene.
     *
     * @return numbers
     */
    getIDs(){
      var elementer = this.getData();
      var ret = [];
      var count = 0;
      for (var kommune in elementer) {
          return[count++] = elementer[kommune].kommunenummer;
      }
    }


    load(){
        this.dataAccessor.accessData();
        this.data = dataAccessor.data;
    }
}
