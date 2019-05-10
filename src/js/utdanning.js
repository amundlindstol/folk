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
  //01 Grunnskole
  //02a VGS
  //11 Fagskole
  //03a Høyere utdanning bachelor
  //04a Høyere utdanning master
  //09a Ingen eller uvist utdanning
  getHigherEducation(kommune) {
    return ((this.getLastEducation(this.data[kommune], "03a"))+
    (this.getLastEducation(this.data[kommune], "04a"))).toFixed(2);
  }

  getHigherEducationByYear(kommune, year) {
    return ((this.getLastEducation(this.data[kommune], "03a", year))+
    (this.getLastEducation(this.data[kommune], "04a", year))).toFixed(2);
  }
  getEducation(kommune, type, year) {
    return 0+(kommune[type].Kvinner[year] + kommune[type].Menn[year])/2;
  }

  getLastEducation(kommune, type) {
    var newest = 0;
    for (var kvinner in kommune[type].Kvinner) {
      if (Number(kvinner) > newest) {
        newest = kvinner;
      }
    }
    return 0+(kommune[type].Kvinner[newest] + kommune[type].Menn[newest])/2;
  }

  load() {
    this.dataAccessor.accessData(this.onload);
  }
}
