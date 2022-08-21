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


   let form = this.document.querySelector("form");
   form.addEventListener("submit", function (event) {
      alert("submit clicked");
      formSubmission(document, null, pilotInput, copilotInput, fuelLevelInput, cargoLevelInput);
      event.preventDefault()
   });
   //document.getElementById("faultyItems").style.visibility = "visible";

});

// form.getElementById("formSubmit").addEventListener("click", function(event){
//    event.preventDefault()
//    let list = null;
//    // let pilotInput = document.querySelector("#pilotName");
//    let pilotInput = document.querySelector("input=[pilotName]");
// console.log(pilotInput);
//    let copilotInput = document.querySelector("#copilotName");
//    let fuelLevelInput = document.querySelector("#fuelLevel");
//    let cargoLevelInput = document.querySelector("#cargoMass");

//    console.log(pilotInput);
   // formSubmission(document, null, pilotInput, copilotInput, fuelLevelInput, cargoLevelInput);

// });