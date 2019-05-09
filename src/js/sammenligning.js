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


function displayTableOfKommune(kommuneData, oneOrTwo) {
    // TODO: Could refactor these into seperate functions, but 
    // I don't have the time :(

    let fullKommuneDiv = document.getElementById("kommune" + oneOrTwo + "Text");
    let kommuneDataDiv = document.createElement('div');
    fullKommuneDiv.append(kommuneDataDiv);
    kommuneDataDiv.id = 'kommune' + oneOrTwo + 'Data';
    // Years
    let years = Object.keys(kommuneData.Kvinner);
    let tableOfYears = document.createElement('table');
    tableOfYears.id = 'Years';


    tableOfYears.innerHTML = '<strong>År</strong>';
    for (const year of years) {
        let yearsRow = tableOfYears.insertRow();
        let yearCell = yearsRow.insertCell();
        yearCell.innerHTML = year + ":";
    }
    kommuneDataDiv.append(tableOfYears);

    // Women
    const employedWomenPerYear = Object.values(kommuneData.Kvinner);
    let tableOfWomen = document.createElement('table');
    tableOfWomen.innerHTML = '<strong>Kvinner</strong>';
    tableOfWomen.id = 'WomenElements';


    for (const employedWomen of employedWomenPerYear) {
        let employedWomenRow = tableOfWomen.insertRow();
        let employedWomenCell = employedWomenRow.insertCell();
        employedWomenCell.innerHTML = employedWomen;
    }
    kommuneDataDiv.append(tableOfWomen);

    // Men 
    const employedMenPerYear = Object.values(kommuneData.Menn);
    let tableOfMen = document.createElement('table');
    tableOfMen.innerHTML = '<strong>Menn</strong>';
    tableOfMen.id = 'MenElements';

    for (const employedMen of employedMenPerYear) {
        let employedMenRow = tableOfMen.insertRow();
        let employedMenCell = employedMenRow.insertCell();
        employedMenCell.innerHTML = employedMen;
    }
    kommuneDataDiv.append(tableOfMen);

    // Both sexes
    const employedBothSexesPerYear = Object.values(kommuneData["Begge kjønn"]);
    let tableOfBothSexes = document.createElement('table');
    tableOfBothSexes.innerHTML = '<strong>Begge kjønn</strong>';
    tableOfBothSexes.id = 'BothSexesElements';


    for (const employedBothSexes of employedBothSexesPerYear) {
        let employedBothSexesRow = tableOfBothSexes.insertRow();
        let employedBothSexesCell = employedBothSexesRow.insertCell();
        employedBothSexesCell.innerHTML = employedBothSexes;
    }
    kommuneDataDiv.append(tableOfBothSexes);


};

/**
 * will take the {input} and list every kommunenummer starting with {input}
 * if only one kommune is found, see if other input is 
 */
function getInfo(number, data, oneOrTwo) {
    let errorMessage = document.createElement('tr');
    errorMessage.innerHTML = "ugyldig kommunenummer";
    const kommuneTable = getTableText(oneOrTwo);
    let lastKommuneNavn = "feil";
    let count = 0;
    while (kommuneTable.firstChild) { // clear table
        kommuneTable.removeChild(kommuneTable.firstChild);
    }
    for (let kommune in data) { // 'live' search through the data
        if (data.hasOwnProperty(kommune) && String(data[kommune].kommunenummer).startsWith(number)) {
            const tableElement = document.createElement('div');
            tableElement.innerHTML = "<strong>" + kommune + "    " + data[kommune].kommunenummer + "</strong>"; // TODO: Shouldn't always be strong?
            kommuneTable.appendChild(tableElement);
            lastKommuneNavn = kommune;
            count++;
        }
    }
    if (count === 1) { // there is only one match
        let content = JSON.stringify(data[lastKommuneNavn]).replace(/}|"/g, "").split(/,|{/g);
        displayTableOfKommune(data[lastKommuneNavn], oneOrTwo);

        compareWithOther(oneOrTwo); // compare if other table exist
    } else if (count === 0) { // no kommunenummer match
        kommuneTable.appendChild(errorMessage);
        result = "ugyldig kommunenummer";
    } else {
        let otherCol = getTableText(oneOrTwo, true);
        if (otherCol != undefined) {
            for (const iterator of otherCol.children) {
                iterator.style.color = "black";
            }
        }
    }
}

function compareWithOther(oneOrTwo) {
    let oneTable = getTableData(oneOrTwo);
    let otherTable = getTableData(oneOrTwo, true);

    if (oneTable == null || otherTable == null) {
        return; // Only one table exist
    }
    compare(oneTable.children, otherTable.children, oneOrTwo);
}

// compares the percent values in both columns & gives them corresponding colors
function compare(child, otherChild, oneOrTwo) {

    let otherChildsTables = Object.values(otherChild);
    let thisChildsTables = Object.values(child);

    for (let i = 1; i < thisChildsTables.length && i < otherChildsTables.length; i++) {
        let thisRows = thisChildsTables[i].rows;
        let otherRows = otherChildsTables[i].rows;

        for (let j = 0; j < thisRows.length || j < otherRows.length; j++) {
            let firstVal = thisRows[j].textContent;
            let secondVal = otherRows[j].textContent;
            if (firstVal > secondVal) {
                thisRows[j].style.color = "green";
                otherRows[j].style.color = "lightcoral";
            } else if (firstVal < secondVal) {
                thisRows[j].style.color = "lightcoral";
                otherRows[j].style.color = "green";
            } else {
                thisRows[j].style.color = "black";
                otherRows[j].style.color = "black";
            }

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

const getTableText = (EnTo, other = false) => {
    if (other) {
        EnTo = flip(EnTo);
    }
    return document.getElementById("kommune" + EnTo + "Text");
};


const getTableData = (EnTo, other = false) => {
    if (other) {
        EnTo = flip(EnTo);
    }
    return document.getElementById("kommune" + EnTo + "Data");
};