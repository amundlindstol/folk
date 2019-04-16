/**
 * 
 * Befolkning http://wildboy.uib.no/~tpe056/folk/104857.json
 * Sysselsatte http://wildboy.uib.no/~tpe056/folk/100145.json
 * Utdanning http://wildboy.uib.no/~tpe056/folk/85432.json
 * 
 * 
 * For å aksessere riktig objekt:
 * https://stackoverflow.com/questions/41619319/using-wildcards-when-accessing-a-multi-dimensional-object-in-javascript
 */

class Data {

    constructor(url){
        this.onload = null; //skal potensielt tilordnes en funksjon
        this.url = url;
    }

    //Fra oppgbeskrivelse
    /**
     * Returnerer listen av alle kommunenavn som fremtrer i datasettene.
     * 
     * @return names
     */

    getNames(){}
    /**
     * Returnerer listen av kommunenummer som fremtrer i datasettene.
     * 
     * @return numbers
     */
    getIDs(){}

    /**
     * Returnerer informasjon om en kommune basert på aktuelt datasett og gitt kommuneNr
     * 
     * @return numbers
     */
    getInfo(number){}

    /**
     * Klargjør og sender en forespørsel om å laste ned datasettet. 
     * To do: "Dersom objektet har egenskapet onload.."
     */
    load(){
        var obj = this;
        //Henter datasettet fra nettsiden og omdanner dette til et objekt
        var fetchAndConvert = function(url, callback) { 
           var req = new XMLHttpRequest();
            req.open("GET", url);
            req.responseType = "text";
            req.onreadystatechange = function() {
                if(req.status == 200 && req.readyState === 4){
                    callback(req.status, req.responseText);
                }
                else{
                    callback(null, req.response);
                }
            };
            req.send();
        }

        fetchAndConvert(this.url, (status, rawData) => {
            if(status !== null){
                var data = JSON.parse(rawData);
                obj.data = data;
                console.log(data);

                //Test
                console.log(data.elementer.Flora);
            }
            else{
                console.log(status);
            }
        });
        return obj.data;
    }

}

var population = new Data("http://wildboy.uib.no/~tpe056/folk/104857.json");
population.load();
/** 
var employment = new Data("http://wildboy.uib.no/~tpe056/folk/100145.json");
employment.load();
var education = new Data("http://wildboy.uib.no/~tpe056/folk/85432.json");
education.load();
*/