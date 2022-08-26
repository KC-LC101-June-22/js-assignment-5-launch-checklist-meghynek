// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {


       let listedPlanets;
       // Set listedPlanetsResponse equal to the value returned by calling myFetch()
       let listedPlanetsResponse = myFetch();
       console.log(listedPlanets);
      listedPlanetsResponse.then(function (result) {
          listedPlanets = result;
          console.log(listedPlanets);
      }).then(function () {
          console.log(listedPlanets);
          // Below this comment, call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
          let missionPlanet = pickPlanet(listedPlanets);
          console.log(missionPlanet);
          //pull planet object, list items for addDestinationInfo parameters
          let planetName = missionPlanet.planetName;
          let diameter = missionPlanet.diameter;
          let star = missionPlanet.star;
          let distance = missionPlanet.distance;
          let moons = missionPlanet.moons;
          let imageUrl = missionPlanet.image;
          addDestinationInfo(document, planetName, diameter, star, distance, moons, imageUrl)
      })


   let form = this.document.querySelector("form");
   form.addEventListener("submit", function (event) {
      let list = null;

      let pilotInputFull = document.getElementById("pilotName");
      //console.log(pilotInputFull)
      let pilotInput = pilotInputFull.value;
      alert("pilot: " + pilotInput);
   
      let copilotInputFull = document.getElementById("copilotName");
      let copilotInput = copilotInputFull.value;
   
      let fuelLevelInputFull = document.getElementById("fuelLevel");
      let fuelLevelInput = fuelLevelInputFull.value;
   
      let cargoLevelInputFull = document.getElementById("cargoMass");
      let cargoLevelInput = cargoLevelInputFull.value;
   
      event.preventDefault()
      alert("submit clicked");
      formSubmission(document, null, pilotInput, copilotInput, fuelLevelInput, cargoLevelInput);
 
   });

});