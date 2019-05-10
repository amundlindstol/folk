/*jshint esversion: 6 */

//Skjelett til resterende klasser som behandler data:
class Sysselsetting {
    constructor(url) {
        this.url = url;
        this.onload = () => {
            this.data = this.dataAccessor.data;
            sammenlign(this);
        };
        this.dataAccessor = new Data(url);
        this.load();
    }

    /**
    * Returnerer siste sysselsetting (Gjennomsnitt av menn + kvinner) for
    * en kommune
    */
    getLastEmployment(kommune) {
      var newest = this.getNewestDate(kommune);
      var ret = 0+(this.data[kommune].Kvinner[newest] + this.data[kommune].Menn[newest])/2;
      return ret.toFixed(2);
    }

    getEmployment(kommune, year) {
      var ret = 0+(this.data[kommune].Kvinner[year] + this.data[kommune].Menn[year])/2;
      return ret.toFixed(2);
    }

    getNewestDate(kommune) {
      var newest = 0;
      for (var kvinner in this.data[kommune].Kvinner) {
        if (Number(kvinner) > newest) {
          newest = kvinner;
        }
      }
      return newest;
    }

    getOldestDate(kommune) {
      var old = 3000;
      for (var kvinner in this.data[kommune].Kvinner) {
        if (Number(kvinner) < old) {
          old = kvinner;
        }
      }
      return old;
    }

    getInfo(nummer) {
      for (var kommune in this.data) {
        if (nummer == this.data[kommune].kommunenummer) {
          var obj = this.data[kommune];
          obj.name = kommune;
          return obj;
        }
      }
    }

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

    /**
     * Klargjør og sender en forespørsel om å laste ned datasettet.
     */
    load() {
        this.dataAccessor.accessData(this.onload);
    }
}
