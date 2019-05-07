/*jshint esversion: 6 */

class Data {
    constructor(url) {
        this.url = url;
    }

    accessData(onload) {
        var req = new XMLHttpRequest();

        if (onload != undefined) {
            req.onreadystatechange = () => {
                if (req.readyState === 4) {
                    this.data = JSON.parse(req.responseText);
                    this.data = this.data.elementer;
                    onload();
                }
            };
        }
        req.open("GET", this.url, true);
        req.send(null);

        //if (req.status === 200 && req.readyState === 4) {

        //}
        //console.log(this.data);
    }
}