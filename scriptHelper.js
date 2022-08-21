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
    if (testInput == '') {
        return "Empty"
    } else if (isNaN(testInput) === true) {
        return "Not a Number"
    } else if (typeof (testInput) === "number") {
        return "Is a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // the stuff
    this.document = document;
    this.list = list;
    this.pilot = pilot;
    this.copilot = copilot;
    this.fuelLevel = fuelLevel;
    this.cargoLevel = cargoLevel;


    // if empty, alert
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        alert("All fields must be completed.")
        event.preventDefault();
    } 
    
    // if incorrect stuff input
    else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" ||validateInput(fuelLevel) === "Not a Number"){
        alert("Make sure to enter valid information for each field!")
    }
    // correct stuff input
    else if (validateInput(pilot) === "Not a Number" || validateInput(copilot) === "Not a Number" || validateInput(fuelLevel) === "Is a Number" ||validateInput(fuelLevel) === "Is a Number") {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready.`
        document.getElementById('copilotStatus').innerHTML = `Copilot ${copilot} is ready`;
            if (fuelLevel <= 10000){
                document.getElementById('fuelStatus').innerHTML = 'Fuel level too low for launch.'
            };
            if (cargoLevel <= 100000){
                document.getElementById('cargoMass').innerHTML = "Cargo mass too high for launch."
            }
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
