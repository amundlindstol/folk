//Skjelett til resterende klasser som behandler data:
class Utdanning {
    constructor(url){
        this.onload = null; //skal potensielt tilordnes en funksjon
        this.url = url;
        this.dataAccessor = new Data(url);
        this.load();
        this.getHigherEducation();
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


    getKommuneByID(nummer) {
      for (var kommune in this.data) {
        if (nummer == this.data[kommune].kommunenummer) {
          var obj = this.data[kommune]
          obj["name"] = kommune;
          return obj;
        }
      }
    }

    //03a + 04a (høyere utdanning)
    //uferdig metode
    getHigherEducation(){
        var ret = {};
        for(var kommune in this.data){
            var tempKommune = this.getKommuneByID(this.data[kommune].kommunenummer);
            ret[kommune] = tempKommune;
        }
        return ret;
    }


    load(){
        this.dataAccessor.accessData();
        this.data = this.dataAccessor.data;
    }
}