// Usikker om dette er det beste stedet å ha disse, men de må laste inn før befolkning.
const enableNavigationButtons = () => {
  let introductionButton = document.getElementById("introductionButton");
  introductionButton.onclick = () => displayBlock("introduksjon");

  let overviewButton = document.getElementById("overviewButton");
  overviewButton.onclick = () => displayBlock("oversikt");

  let detailsButton = document.getElementById("detailsButton");
  detailsButton.onclick = () => displayBlock("detaljer");

  let comparisonButton = document.getElementById("comparisonButton");
  comparisonButton.onclick = () => displayBlock("sammenligning");
};

const removeLoadingMessage = () => {
  let loadingGif = document.getElementById("loading");
  loadingGIF.hidden = "true";
  let introductionDiv = document.getElementById("introduksjon");
  introductionDiv.hidden = false;
};

//Skjelett til resterende klasser som behandler data:
class Befolkning {
  constructor(url) {
    this.onload = () => {
      enableNavigationButtons();
      removeLoadingMessage();
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

  getKommuneByName(kommune) {
    var obj = this.data[kommune];
    obj["name"] = kommune;
    return obj;
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
    this.data = this.dataAccessor.data;
  }
}