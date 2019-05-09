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

  //03a + 04a (høyere utdanning)
  //uferdig metode
  getHigherEducation(kommune) {
    kommune = this.data[kommune];
    var ret = 0;
    var newest = 0;
    for (var kvinner in kommune["03a"].Kvinner) {
      if (Number(kvinner) > newest) {
        newest = kvinner;
      }
    }
    ret += 0+(kommune["03a"].Kvinner[newest] + kommune["03a"].Menn[newest])/2;
    newest = 0;
    for (var kvinner in kommune["04a"].Kvinner) {
      if (Number(kvinner) > newest) {
        newest = kvinner;
      }
    }
    ret += 0+(kommune["04a"].Kvinner[newest] + kommune["04a"].Menn[newest])/2;

    return ret.toFixed(2);
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
