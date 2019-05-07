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
 * will take the {input} and list every kommunenummer starting with {input}
 * if only one kommune is found, see if other input is 
 */
function getInfo(number, data, oneOrTwo) {
    let errorMessage = document.createElement('tr');
    errorMessage.innerHTML = "ugyldig kommunenummer";
    const kommuneTable = getTable(oneOrTwo);
    let lastKommuneNavn = "feil";
    let count = 0;
    while (kommuneTable.firstChild) { // clear table
        kommuneTable.removeChild(kommuneTable.firstChild);
    }
    for (let kommune in data) {  // 'live' search through the data
        if (data.hasOwnProperty(kommune) && String(data[kommune].kommunenummer).startsWith(number)) {
            const tableElement = document.createElement('tr');
            tableElement.innerHTML = kommune + "    " + data[kommune].kommunenummer;
            kommuneTable.appendChild(tableElement);
            lastKommuneNavn = kommune;
            count++;
        }
    }
    if (count === 1) { // there is only one match
        let content = JSON.stringify(data[lastKommuneNavn]).replace(/}|"/g, "").split(/,|{/g);
        for (let line of content) {
            const tableElement = document.createElement('tr');
            tableElement.innerHTML = line+"\n";
            kommuneTable.appendChild(tableElement);
        }
        compareWithOther(oneOrTwo); // compare if other table exist
    } else if (count === 0) { // no kommunenummer match
        kommuneTable.appendChild(errorMessage);
        result = "ugyldig kommunenummer";
    } else {
        let otherCol = getTable(oneOrTwo, true);
        if (otherCol != undefined) {
            for (const iterator of otherCol.children) {
                iterator.style.color = "black";
            }
        }
    }
}

function compareWithOther(oneOrTwo) {
    let child = getTable(oneOrTwo).children;
    let otherChild = getTable(oneOrTwo, true).children;
    if (child.length < 2 || otherChild.length < 2) {
        return; // Only one table exist
    }
    compare(child, otherChild, oneOrTwo);
}

// compares the percent values in both columns & gives them corresponding colors
function compare(child, otherChild, oneOrTwo) {
    for (let i = 0; i < child.length || i < otherChild.length; i++) {
        let first = String(child[i].innerHTML);
        let second = String(otherChild[i].innerHTML);
        let firstVal = Number(first.substring(first.indexOf(":") + 1, first.length));
        let secondVal = Number(second.substring(second.indexOf(":") + 1, second.length));
        if (firstVal > secondVal) {
            getTable(oneOrTwo).children[i].style.color = "green";
            getTable(oneOrTwo, true).children[i].style.color = "lightcoral";
        } else if (firstVal < secondVal) {
            getTable(oneOrTwo, true).children[i].style.color = "green";
            getTable(oneOrTwo).children[i].style.color = "lightcoral";
        } else {
            getTable(oneOrTwo).children[i].style.color = "black";
            getTable(oneOrTwo, true).children[i].style.color = "black";
        }

    }
}

function flip(oneOrTwo) {
    if (oneOrTwo == "En") {
        return "To";
    } else {
        return "En";
    }
}

getTable = (EnTo, other=false) => {
    if (other) {
        EnTo = flip(EnTo);
    }
    return document.getElementById("kommune" + EnTo + "Text")
}