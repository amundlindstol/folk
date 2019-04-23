/**
 * 
 * Befolkning http://wildboy.uib.no/~tpe056/folk/104857.json
 * Sysselsatte http://wildboy.uib.no/~tpe056/folk/100145.json
 * Utdanning http://wildboy.uib.no/~tpe056/folk/85432.json
 * 
 * 
 * For å aksessere riktig objekt (kan kanskje være nyttig, dunno)
 * https://stackoverflow.com/questions/41619319/using-wildcards-when-accessing-a-multi-dimensional-object-in-javascript
 * https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f
 * https://javascript.info/keys-values-entries
 */

class Data {
    constructor(url){
        this.url = url;
    }

    accessData(){
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