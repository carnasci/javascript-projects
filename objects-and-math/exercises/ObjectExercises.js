let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function (){return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function (){return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function (){return Math.floor(Math.random()*11)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function (){return Math.floor(Math.random()*11)}
};

let microAnimal = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function (){return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, superChimpTwo, salamander, dog, microAnimal];

function crewReports(crewObject){
   return `${crewObject.name} is a ${crewObject.species}. They are ${crewObject.age} years old and ${crewObject.mass} kilograms. Their ID is ${crewObject.astronautID}.`
}

for (let i = 0; i < crew.length; i++){
   console.log(crewReports(crew[i]));
}

function fitnessTest(animals){
   let results = [], numSteps, numTurns;
   for (let i = 0; i < animals.length; i++){
      numSteps = 0;
      numTurns = 0;
      while (numSteps < 20){
         numSteps += animals[i].move();
         numTurns++;
      }
      results.push(`${animals[i].name} took ${numTurns} to take 2o steps.`);
   }
   return results;
}

console.log(fitnessTest(crew));

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!