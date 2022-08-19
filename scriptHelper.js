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
    this.document = document
    // list?
    this.list = list
    // pilot
    this.pilot = pilot;
    if (validateInput(pilot) === "Is a Number") {
        document.getElementById('pilotStatus').innerHTML = '<li>`Pilot &{pilot} is ready`</li>'
    } else if (validateInput(pilot) === "Empty") {
        alert("All fields required.")
    } else if (validateInput(pilot) === "Is a Number") {
        alert("Please enter the pilot's name.")
    }

    // copilot
    this.copilot = copilot;
    if (validateInput(copilot) === "Is a Number") {
        // rejoice?
    } else if (validateInput(copilot) === "Empty") {
        alert("All fields required.")
    } else if (validateInput(copilot) === "Is a Number") {
        alert("Please enter the copilot's name.")
    }

    // fuelLevel
    this.fuelLevel = fuelLevel;
    if (fuelLevel <= 100000) {
        alert("There is not enough fuel for the journey.")
    } 

//cargoLevel
this.cargoLevel = cargoLevel
if (cargoLevel<= 100000) {
    alert("There is too much cargo mass for the journey.")
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
