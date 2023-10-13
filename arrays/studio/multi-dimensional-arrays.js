const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(",").sort();
let equipmentArray = equipment.split(",").sort();
let petsArray = pets.split(",").sort();
let sleepAidsArray = sleepAids.split(",").sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(foodArray, equipmentArray, petsArray, sleepAidsArray);
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let selectedCabinet = input.question("Please select a cabinet: ");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (selectedCabinet > cargoHold.length - 1 || selectedCabinet < 0){
    console.log(`Please select a number from 0 to ${cargoHold.length - 1}`);
} else {
console.log(`Contents of cabinet ${selectedCabinet} is:
${cargoHold[selectedCabinet].join(", ")}`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let selectedItem = input.question("Please select an item: ");

let conditionalText;

if (cargoHold[selectedCabinet].includes(selectedItem)){
    conditionalText = "DOES";
} else {
    conditionalText = "DOES NOT";
};

console.log(`Cabinet ${conditionalText} contain ${selectedItem}`);