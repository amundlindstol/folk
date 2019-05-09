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
      var newest = 0;
      for (var kvinner in this.data[kommune].Kvinner) {
        if (Number(kvinner) > newest) {
          newest = kvinner;
        }
      }
      var ret = 0+(this.data[kommune].Kvinner[newest] + this.data[kommune].Menn[newest])/2;
      return ret.toFixed(2);
    }

    getInfo() {
        // TODO: Implementer.
    }

    //Fra oppgbeskrivelse
    /**
     * Returnerer listen av alle kommunenavn som fremtrer i datasettene.
     *
     * @return names
     */

    getNames() {}
    /**
     * Returnerer listen av kommunenummer som fremtrer i datasettene.
     *
     * @return numbers
     */
    getIDs() {}

    /**
     * Klargjør og sender en forespørsel om å laste ned datasettet.
     * To do: "Dersom objektet har egenskapet onload.."
     */
    load() {
        this.dataAccessor.accessData(this.onload);
    }


}

/**
var employment = new Data("http://wildboy.uib.no/~tpe056/folk/100145.json");
employment.load();
var education = new Data("http://wildboy.uib.no/~tpe056/folk/85432.json");
education.load();
*/
