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

   // let list = null;

   // let pilotInputFull = document.getElementById("pilotName");
   // //console.log(pilotInputFull)
   // let pilotInput = pilotInputFull.value;
   // alert("pilot: " + pilotInput);

   // let copilotInputFull = document.getElementById("copilotName");
   // let copilotInput = copilotInputFull.value;

   // let fuelLevelInputFull = document.getElementById("fuelLevel");
   // let fuelLevelInput = fuelLevelInputFull.value;

   // let cargoLevelInputFull = document.getElementById("cargoMass");
   // let cargoLevelInput = cargoLevelInputFull.value;


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
   // //document.getElementById("faultyItems").style.visibility = "visible";

});
//let form = this.document.querySelector("form");
// document.getElementById("formSubmit").addEventListener("click", function(event){
//    event.preventDefault()

// let list = null;

// let pilotInputFull = document.getElementById("pilotName");
// //console.log(pilotInputFull)
// let pilotInput = pilotInputFull.value;
// alert("pilot: " + pilotInput);

// let copilotInputFull = document.getElementById("copilotName");
// let copilotInput = copilotInputFull.value;

// let fuelLevelInputFull = document.getElementById("fuelLevel");
// let fuelLevelInput = fuelLevelInputFull.value;

// let cargoLevelInputFull = document.getElementById("cargoMass");
// let cargoLevelInput = cargoLevelInputFull.value;
//    console.log(pilotInput);
//    formSubmission(document, null, pilotInput, copilotInput, fuelLevelInput, cargoLevelInput);

// });