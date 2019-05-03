class Data {
    constructor(url){
        this.url = url;
    }

    accessData(){
        var req = new XMLHttpRequest();
        /**
         * Forklaring:
         * req.open(.., .., false); 
         * ^ Gjør den eksekveringen sykron slik at vi ikke får problemer med at datasettet
         * ikke er lastet inn før vi prøver å bruke det. Står dog at det er frarådet praksis så vi burde sikkert endre det.
         * Foreløpig kan vi ialf kode videre uten at vi har problemer med denne klassen.
        */
        req.open("GET", this.url, false);
        req.send(null);
        if(req.status === 200 && req.readyState === 4){
            this.data = JSON.parse(req.responseText);
        }
        this.data = this.data.elementer;
        console.log(this.data);
    }
}