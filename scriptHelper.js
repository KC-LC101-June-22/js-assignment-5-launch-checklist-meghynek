// Write your helper functions here!
require('isomorphic-fetch');
//import fetch from "node-fetch";

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    //the stuff
    this.document = document;
    this.name = name;
    this.diameter = diameter;
    this.star = star;
    this.distance = distance;
    this.moons = moons;
    this.imageUrl = imageUrl

    // Here is the HTML formatting for our mission target div.
    document.getElementById('missionTarget').innerHTML =
        ` <h2>Mission Destination</h2>
    
        <ol>
        <li> Name: ${name}</li>
    
        <li>Diameter: ${diameter}</li>
    
        <li>Star: ${star}</li>
    
        <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons} </li>
    
        </ol> 

        <img src = ${imageUrl}> `
}

function validateInput(testInput) {
    if (testInput == '') {
        return "Empty"
    } else if (isNaN(testInput) === true) {
        return "Not a Number"
    } else if (typeof (Number(testInput)) === "number") {
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
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields must be completed.")
        //event.preventDefault();
    }

    // if incorrect stuff input, alert
    else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(fuelLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!")
        //event.preventDefault();
    }
    // correct stuff input, all is well
    else if (validateInput(pilot) === "Not a Number" || validateInput(copilot) === "Not a Number" || validateInput(fuelLevel) === "Is a Number" || validateInput(cargoLevel) === "Is a Number") {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;
        document.getElementById('launchStatus').innerHTML = 'Shuttle is Ready for Launch';
        document.getElementById("launchStatus").style.color = 'rgb(65, 159, 106)';

        if (fuelLevel < 10000 || cargoLevel >= 10000) {

            document.getElementById('launchStatus').innerHTML = 'Shuttle Not Ready for Launch'
            document.getElementById("launchStatus").style.color = 'rgb(199, 37, 78)';
            if (fuelLevel < 10000) {
                document.getElementById('fuelStatus').innerHTML = 'Fuel level too low for launch'
                alert("Fuel Level too low for launch")
            } 
            if (cargoLevel >= 100000) {
                document.getElementById('cargoStatus').innerHTML = "Cargo mass too heavy for launch"
                alert("Cargo mass too heavy for launch")
            }
        }
        if (fuelLevel >= 10000 && cargoLevel < 10000) {

                document.getElementById('launchStatus').innerHTML = 'Shuttle is Ready for Launch'
                document.getElementById("launchStatus").style.color = 'rgb(65, 159, 106)';
                document.getElementById('fuelStatus').innerHTML = 'Fuel level high enough for launch'
                document.getElementById('cargoStatus').innerHTML = "Cargo mass low enough for launch"
            }

            // } else if (fuelLevel >= 10000){
            //     document.getElementById('fuelStatus').innerHTML = 'Fuel level high enough for launch.'
            // };
            // if (cargoLevel >= 100000) {
            //     console.log(cargoLevel)

            //     document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch.'
            //     document.getElementById("launchStatus").style.color = "red";
            // } else if (cargoLevel <= 10000) {
            //     document.getElementById('cargoStatus').innerHTML = "Cargo mass low enough for launch."
            // }

        
    }
}; //end bracket


async function myFetch() {
    let planetsReturned = [];

    planetsReturned = fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    })
    return planetsReturned;
};


function pickPlanet(planets) {
    //take in a list of planets
    this.planets = planets;
    //use math.random() to pick a planet using a randomly-selected index
    let randomIndex = Math.floor(Math.random() * planets.length)
    //use the random index to select the lucky planet
    let selectedPlanet = planets[randomIndex]
    return selectedPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
