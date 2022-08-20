// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput === '') {
        return "Empty"
    } else if (isNaN(testInput) === true) {
        return "Not a Number"
    } else if (typeof (testInput) === "number") {
        return "Is a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    document.getElementById("faultyItems").style.visibility = "visible";
    this.document = document
    // list?
    this.list = list
    // pilot
    this.pilot = pilot;
    //alert(`Pilot: ${pilot}`)
    console.log(pilot);
    if (validateInput(pilot) === "Not a Number") {
        document.getElementById('pilotStatus').innerHTML += '<ol><li>`Pilot ${pilot} is ready`</li></ol>'
    } else if (validateInput(pilot) === "Empty") {
        document.getElementById('pilotStatus').innerHTML += '<li>`Pilot name not entered.`</li>'
    } else if (validateInput(pilot) === "Is a Number") {
        document.getElementById('pilotStatus').innerHTML += '<li>`Pilot name not entered.`</li>'
    }

    // copilot
    this.copilot = copilot;
    console.log(copilot);
    //alert(`Copilot: ${copilot}`)
    if (validateInput(copilot) === "Not a Number") {
        document.getElementById('pilotStatus').innerHTML = `Copilot ${copilot} is ready`
    } else if (validateInput(copilot) === "Empty") {
        document.getElementById('pilotStatus').innerHTML = '<ol><li>`All fields required.`</li></ol>'
    } else if (validateInput(copilot) === "Is a Number") {
        document.getElementById('pilotStatus').innerHTML = '<li>Please enter the name of the copilot.</li>'
    }

    // fuelLevel
    this.fuelLevel = fuelLevel;
    if (validateInput(fuelLevel) === "Is a Number" && validateInput(fuelLevel) <= 100000) {
        document.getElementById('fuelStatus').innerHTML = '<ol><li>`There is not enough fuel for journey.`</li></ol>'
    } else if (validateInput(fuelLevel) === "Is a Number" && validateInput(fuelLevel) >= 100000) {
        document.getElementById('fuelStatus').innerHTML = '<ol><li>`Sufficient fuel levels for journey.`</li></ol>'
    } else if (validateInput(fuelLevel) = "Empty") {
        document.getElementById('fuelStatus').innerHTML = '<ol><li>`Please enter the fuel levels for journey.`</li></ol>'
    } else if (validateInput(fuelLevel) === "Not a Number"){
        document.getElementById('fuelStatus').innerHTML = '<ol><li>`Please enter the fuel levels for journey.`</li></ol>'
    }

//cargoLevel
this.cargoLevel = cargoLevel
if (validateInput(cargoLevel) === "Is a Number" && validateInput(cargoLevel) <= 100000) {
    document.getElementById('cargoMass').innerHTML = '<li>"There is too much cargo mass for the journey."</li>'
} else if (validateInput(cargoLevel) === "Is a Number" && validateInput(cargoLevel) >= 100000){
    document.getElementById('cargoMass').innerHTML = '<li>`Cargo mass is at ${cargoLevel}`</li>'
}
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
