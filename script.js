// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {


   //    let listedPlanets;
   //    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   //    let listedPlanetsResponse;
   //    listedPlanetsResponse.then(function (result) {
   //        listedPlanets = result;
   //        console.log(listedPlanets);
   //    }).then(function () {
   //        console.log(listedPlanets);
   //        // Below this comment, call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   //    })
   //let document = this.document;
   let list = null;
   let pilotInput = document.querySelector("#pilotName");
   let copilot = document.querySelector("#copilotName");
   let fuelLevel = document.querySelector("#fuelLevel");
   let cargoLevel = document.querySelector("#cargoMass");

   //console.log(pilotInput);
   formSubmission(document, null, pilotInput, copilot, fuelLevel, cargoLevel);

   let button = document.getElementById("formsubmit")
   button.addEventListener("click", function (event) {
      event.preventDefault();
   })
   document.getElementById("faultyItems").style.visibility = "visible";

});