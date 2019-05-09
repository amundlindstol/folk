//Skjelett til resterende klasser som behandler data:
class Utdanning {
  constructor(url) {
    this.url = url;
    this.dataAccessor = new Data(url);
    this.onload = () => {
      this.data = this.dataAccessor.data;

    };
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
  getNames() {
    var elementer = this.data;
    var ret = [];
    var count = 0;
    for (var kommune in elementer) {
      ret[count++] = kommune;
    }
    return ret;
  }

  /**
   * Metode som tar et kommunenummer som argument, og returnerer informasjonen om denne kommunen fra
   * dette datasettet.
   * 
   * @param  nummer  Nummeret på kommunen
   * @return obj     Objekt som inneholder informasjon om gitt kommune
   */
  getInfo() {
    for (var kommune in this.data) {
      if (nummer == this.data[kommune].kommunenummer) {
        var obj = this.data[kommune];
        obj.name = kommune;
        return obj;
      }
    }
  }

  /**
   * Returnerer listen av kommunenummer som fremtrer i datasettene.
   *
   * @return numbers
   */
  getIDs() {
    var elementer = this.data;
    var ret = [];
    var count = 0;
    for (var kommune in elementer) {
      ret[count++] = String(elementer[kommune].kommunenummer);
    }
    return ret;
  }


  //03a + 04a (høyere utdanning)
  //uferdig metode
  getHigherEducation() {
    var ret = {};
    for (var kommune in this.data) {
      var tempKommune = this.getKommuneByID(this.data[kommune].kommunenummer);
      ret[kommune] = tempKommune;
    }
    return ret;
  }


  load() {
    this.dataAccessor.accessData(this.onload);
  }
}