// Initialize Variables below
let date = ("Monday 2019-03-18");
let time = ("10:05:34 AM");
let astronautCount = 7;
let astronautStatus = ("ready");
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = ("100%");
let weatherStatus = ("Clear");
let preparedForLiftOff = true;
let scrubMission = ("Mission Scrubbed!");

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7);
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready");
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit);
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (minimumFuelTemp < fuelTempCelsius < maximumFuelTemp);
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%");
// add logic below to verify the weather status is clear
if (weatherStatus = "clear");
// Verify shuttle launch can proceed based on above conditions
if (astronautCount > 7){
    console.log(astronautCount + " are too many crew!" + scrubMission)
} else if (astronautStatus !== "ready"){
    console.log("Astronaut Status " + astronautStatus + scrubMission)
} else if (totalMassKg > 850000){
    console.log("Mass too heavy " + scrubMission)
} else if (fuelTempCelsius < -300 || fuelTempCelsius > -150){
    console.log("Fuel at dangerous temperature! " + scrubMission)
} else if (fuelLevel !== "100%"){
    console.lof("Fuel level not acceptable. " + scrubMission)
} else if (weatherStatus !== "clear"){
    console.log("Inclamate Weather. " + scrubMission)
} else {

console.log("Date: " + date);
console.log("Time: " + time);
console.log("Astronaut Count: " + astronautCount);
console.log("Crew Mass: " + crewMassKg);
console.log("Fuel Mass: " + fuelMassKg);
console.log("Shuttle Mass: " + shuttleMassKg);
console.log("Total Mass: " + totalMassKg);
console.log("Fuel Temp: " + fuelTempCelsius);
console.log("Weather Status: " + weatherStatus);

console.log("Shuttle Ready to launch!");
}
