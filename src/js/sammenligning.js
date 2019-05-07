/*jshint esversion: 6 */


const sammenlign = (sysselsetting) => {
    let kommune1 = document.getElementById("kommuneEn");
    let kommune2 = document.getElementById("kommuneTo");
    kommune1.onkeyup = () => {
        getInfo(kommune1.value, sysselsetting.data, "En");
    };
    kommune2.onkeyup = () => {
        getInfo(kommune2.value, sysselsetting.data, "To");
    };
};

/**
 * Returnerer informasjon om en kommune basert på aktuelt datasett og gitt kommuneNr
 * 
 * @return numbers
 */
function getInfo(number, data, oneOrTwo) {
    var result = "";
    var kommuneNavn = "feil";
    var count = 0;
    for (var kommune in data) {
        if (data.hasOwnProperty(kommune) && String(data[kommune].kommunenummer).startsWith(number)) {
            result += "<p>" + kommune + "    " + data[kommune].kommunenummer + "</p>";
            kommuneNavn = kommune;
            count++;
        }
    }
    if (count === 1) { // there is only one match
        var content = JSON.stringify(data[kommuneNavn]).replace(/}|"/g, "").split(/,|{/g);
        for (var line of content) {
            result += "<tr><td>" + line + "</td></tr>";
        }
        document.getElementById("kommune" + oneOrTwo + "Text").innerHTML = result;
        triggerOther(number, oneOrTwo);
        return;
    } else if (count === 0) {
        result = "ugyldig kommunenummer";
    }
    document.getElementById("kommune" + oneOrTwo + "Text").innerHTML = result;
}

function triggerOther(number, oneOrTwo) {
    var ch = document.getElementById("kommune" + oneOrTwo + "Text").children;
    oneOrTwo = flip(oneOrTwo);
    var otherCh = document.getElementById("kommune" + oneOrTwo + "Text").children;
    //TODO fix
    compare(ch, otherCh, oneOrTwo);
    compare(otherCh, ch, flip(oneOrTwo));
}

function flip(oneOrTwo) {
    if (oneOrTwo == "En") {
        return "To";
    } else {
        return "En";
    }
}

function compare(ch, otherCh, chTextId) {
    if (otherCh[25] === undefined || ch[25] === undefined || ch.length < 25 || otherCh.length < 25) {
        return;
    }
    for (var i = 0; i < ch.length || i < otherCh.length; i++) {
        var first = String(ch[i].innerHTML);
        var second = String(otherCh[i].innerHTML);
        var firstVal = Number(first.substring(first.indexOf(":") + 1, first.length));
        var secondVal = Number(second.substring(second.indexOf(":") + 1, second.length));
        console.log(firstVal + " " + secondVal);
        if (firstVal < secondVal) {
            document.getElementById("kommune" + chTextId + "Text").children[i].style.color = "green";
        } else if (firstVal > secondVal) {
            document.getElementById("kommune" + flip(chTextId) + "Text").children[i].style.color = "green";
        } else {
            document.getElementById("kommune" + chTextId + "Text").children[i].style.color = "red";
            document.getElementById("kommune" + flip(chTextId) + "Text").children[i].style.color = "red";
        }

    }
}