/*jshint esversion: 6 */

//Skjelett til resterende klasser som behandler data:
class Befolkning {
  constructor(url, utdanning, sysselsetting) {
    this.onload = () => {
      this.data = this.dataAccessor.data;
      enableNavigationButtons();
      removeLoadingMessage();
      putOversikt(this, utdanning, sysselsetting);
    };
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
  getInfo(nummer) {
    for (var kommune in this.data) {
      if (nummer == this.data[kommune].kommunenummer) {
        var obj = this.data[kommune];
        obj.name = kommune;
        return obj;
      }
    }
  }

  getKommuneByName(kommune) {
    let obj = this.data[kommune];
    obj["navn"] = kommune;
    return obj;
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

  getLastPopulation(kommune) {
    var newest = 0;
    for (var kvinner in this.data[kommune].Kvinner) {
      if (Number(kvinner) > newest) {
        newest = kvinner;
      }
    }
    return this.data[kommune].Kvinner[newest] + this.data[kommune].Menn[newest];
  }

  getLastPopulationString(kommune) {
    var newest = 0;
    for (var kvinner in this.data[kommune].Kvinner) {
      if (Number(kvinner) > newest) {
        newest = kvinner;
      }
    }
    return "" + (this.data[kommune].Kvinner[newest] + this.data[kommune].Menn[newest]) + " (" + newest + ")";
  }


  load() {
    this.dataAccessor.accessData(this.onload);
  }
}
